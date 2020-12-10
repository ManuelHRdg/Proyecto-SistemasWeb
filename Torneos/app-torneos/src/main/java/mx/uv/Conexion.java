package mx.uv;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public String driver = "org.mariadb.jdbc.Driver";
    public String database = "proyectoTorneos";
    public String hostname = "localhost";
    public String port = "3306";
    public String url = "jdbc:mariadb://localhost:3306/proyectoTorneos" + "?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false";
    public String username = "equipoSW";
    public String password = "web";

    public Connection conectarMySQL() throws Exception{
        Connection conn = null;
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(url, username, password);
        //} catch (ClassNotFoundException | SQLException e) {
        //    throw new Exception("Error en la ConexionDB");
        //}
        }catch(Exception e){
            System.out.println(e);
        }
        return conn;
    }
}
