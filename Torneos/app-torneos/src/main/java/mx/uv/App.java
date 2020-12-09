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


public class App 
{
    public static void main( String[] args )
    {
        HashMap<String, String> model = new HashMap<>();
        System.out.println( "Hello World!" );
        get("/hello", (req, res) -> "Aloha");
    }
}
