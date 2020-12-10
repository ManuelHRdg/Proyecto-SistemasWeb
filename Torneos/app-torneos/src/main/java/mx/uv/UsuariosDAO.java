package mx.uv;


import java.net.ConnectException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

import javax.swing.text.StyledEditorKit.BoldAction;

import java.sql.*;

public class UsuariosDAO {



    public void createUsuario(String nombre, String email, String password, String sexo) throws Exception{
        Statement stm = null;
        Connection con = null;
        String sql = "INSERT INTO usuario VALUES('" + nombre + "','" + email + "','" + password + "','" + sexo + "');";
        try {
            con = new Conexion().conectarMySQL();
            stm = con.createStatement();
            stm.execute(sql);
            stm.close();
            con.close();
        } catch (SQLException e) {
            throw new Exception("Error: Método Create" + e.getMessage());
        } catch (NullPointerException e){
            throw new Exception("Error: No hay conexion" + e.getMessage());
        }
    }
}