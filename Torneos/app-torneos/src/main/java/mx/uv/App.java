package mx.uv;

/**
 * Hello world!
 *
 */

import static spark.Spark.*;

import spark.Spark.*;
import spark.Request;
import spark.Response;
import spark.ModelAndView;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.Gson;
import spark.ModelAndView;
import java.util.HashMap;
import java.util.Map;


public class App 
{
    public static void main( String[] args )
    {

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });
        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        Gson gson = new Gson();
        HashMap<String, String> model = new HashMap<>();
        System.out.println( "Hello World!" );
        get("/hello", (req, res) -> "Aloha");

        post("/registrarse", (req, res) ->{

            System.out.println( "Aloha World!" );
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();


            String nombre;
            String email;
            String password;
            String sexo;

            nombre = peticion.get("nombre").getAsString();
            email = peticion.get("email").getAsString();
            password = peticion.get("password").getAsString();
            sexo = peticion.get("sexo").getAsString();

            UsuariosDAO usuarioDAO = new UsuariosDAO();

            usuarioDAO.createUsuario(nombre, email, password, sexo);
            return nombre;
        });

        post("/login", (req, res) -> {
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();

            String email;
            String password;

            email = peticion.get("email").getAsString();
            password = peticion.get("password").getAsString();

            UsuariosDAO usuarioDAO = new UsuariosDAO();
            Usuarios usuario = (Usuarios)usuarioDAO.consultarUsuario(email);
            if(usuario!=null){
                if(usuario.getPassword().equals(password)){
                    return usuario.getNombre();
                }
            }

            return "0";

        });

        post("/getCorreo", (req, res) -> {
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();

            String nombre;

            nombre = peticion.get("nombre").getAsString();

            UsuariosDAO usuarioDAO = new UsuariosDAO();
            Usuarios usuario = (Usuarios)usuarioDAO.consultarUsuarioNombre(nombre);
            if(usuario!=null){
                return usuario.getEmail();
            }

            return "0";

        });

        post("/getPassword", (req, res) -> {
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();

            String nombre;

            nombre = peticion.get("nombre").getAsString();

            UsuariosDAO usuarioDAO = new UsuariosDAO();
            Usuarios usuario = (Usuarios)usuarioDAO.consultarUsuarioNombre(nombre);
            if(usuario!=null){
                return usuario.getPassword();
            }

            return "0";

        });
    }
}