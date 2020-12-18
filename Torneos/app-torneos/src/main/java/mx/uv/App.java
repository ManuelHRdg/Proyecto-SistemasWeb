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

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
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


        get("/hello", (req, res) -> "Aloha");


        //Funcion para generar el registro
        post("/registrarse", (req, res) ->{

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

        //Funcion para editar el perfil del usuario
        post("/editar", (req, res) ->{

            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();

            String id;
            String nombre;
            String email;
            String password;

            id = peticion.get("id").getAsString();
            nombre = peticion.get("nombre").getAsString();
            email = peticion.get("email").getAsString();
            password = peticion.get("password").getAsString();

            UsuariosDAO usuarioDAO = new UsuariosDAO();

            usuarioDAO.updateUsuario(id, nombre, email, password);
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

        post("/eliminarPerfil", (req, res) -> {
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();

            String nombre;
            nombre = peticion.get("nombre").getAsString();

            UsuariosDAO usuarioDAO = new UsuariosDAO();
            usuarioDAO.delete(nombre);

            return "0";
        });


        //Metodo para recuperar los datos de los torneos del juego determinado
        post("/torneos", (req, res) ->{
            JsonParser parser = new JsonParser();
            JsonElement arbol = parser.parse(req.body());
            JsonObject peticion = arbol.getAsJsonObject();

            String juego;
            juego = peticion.get("juego").getAsString();

            List<Torneos> listaTorneos = new ArrayList<Torneos>();

            TorneosDAO torneos = new TorneosDAO();
            listaTorneos = torneos.consultarJuego(juego);

            List<String[]> arrayElementos = new ArrayList<String[]>();

            String respuesta = "";
            while(listaTorneos.size() > 0){
                //Agrega los datos del torneo a un array de Strings
                String[] aux = new String[4];
                aux[0] = listaTorneos.get(0).getUrlImagen();
                aux[1] = listaTorneos.get(0).getNombre();
                aux[2] = listaTorneos.get(0).getDescripcion();
                aux[3] = String.valueOf(listaTorneos.get(0).getCapacidad());

                arrayElementos.add(aux);

                //Agrega al String los datos del torneo en el ciclo actual
                respuesta += "(" + aux[0] + ")" + "(" + aux[1] + ")" + "(" + aux[2] + ")" + "(" + aux[3] + ")";
                listaTorneos.remove(0);

            }

            return respuesta;

        });
    }
}