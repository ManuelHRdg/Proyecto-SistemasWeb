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

            System.out.println("Nombre: " + nombre);
            System.out.println("Email: " + email);
            System.out.println("Password: " + password);
            System.out.println("Sexo: " + sexo);

            UsuariosDAO usuario = new UsuariosDAO();

            usuario.createUsuario(nombre, email, password, sexo);
            return nombre;
        });
    }
}