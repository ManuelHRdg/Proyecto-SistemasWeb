package mx.uv;


import java.net.ConnectException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

import javax.swing.text.StyledEditorKit.BoldAction;

import java.sql.*;


public class AdminsDAO {

    public Admins consultarAdmin(String id) throws Exception{
        Statement stm = null;
        Connection con = null;
        Admins admin = null;
        String sql = "SELECT * FROM admin where id = '" + id + "';";
        try {
            con = new Conexion().conectarMySQL();
            stm = con.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            while(rs.next()){
                admin = new Admins(rs.getString(1), rs.getString(2));
            }
            stm.close();
            rs.close();
            con.close();
        } catch (SQLException e) {
            throw new Exception("Error: Método Create" + e.getMessage());
        } catch (NullPointerException e){
            throw new Exception("Error: No hay conexion" + e.getMessage());
        }
        return admin;
    }
    
}
