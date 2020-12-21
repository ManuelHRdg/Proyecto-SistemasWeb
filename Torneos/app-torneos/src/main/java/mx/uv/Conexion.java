package mx.uv;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public String driver = "com.mysql.cj.jdbc.Driver";
    public String port = "3306";
    public String url = "jdbc:mysql://db4free.net:3306/proyectotorneos" + "?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false";
    public String username = "equiposw";
    public String password = "proyectoweb";

    //proyectoweb
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
