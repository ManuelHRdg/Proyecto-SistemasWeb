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

    public void updateUsuario(String id, String nombre, String email, String password) throws Exception{
        Statement stm = null;
        Connection con = null;
        String sql = "UPDATE usuario SET nombre = '" + nombre + "', email = '" + email + "', password = '" + password + "' where nombre = '" + id + "';";
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

    public Usuarios consultarUsuario(String email) throws Exception{
        Statement stm = null;
        Connection con = null;
        Usuarios usuario = null;
        String sql = "SELECT * FROM usuario where email = '" + email + "';";
        try {
            con = new Conexion().conectarMySQL();
            stm = con.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            while(rs.next()){
                usuario = new Usuarios(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4));
            }
            stm.close();
            rs.close();
            con.close();
        } catch (SQLException e) {
            throw new Exception("Error: Método Create" + e.getMessage());
        } catch (NullPointerException e){
            throw new Exception("Error: No hay conexion" + e.getMessage());
        }
        return usuario;
    }

    public Usuarios consultarUsuarioNombre(String nombre) throws Exception{
        Statement stm = null;
        Connection con = null;
        Usuarios usuario = null;
        String sql = "SELECT * FROM usuario where nombre = '" + nombre + "';";
        try {
            con = new Conexion().conectarMySQL();
            stm = con.createStatement();
            ResultSet rs = stm.executeQuery(sql);
            while(rs.next()){
                usuario = new Usuarios(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4));
            }
            stm.close();
            rs.close();
            con.close();
        } catch (SQLException e) {
            throw new Exception("Error: Método Create" + e.getMessage());
        } catch (NullPointerException e){
            throw new Exception("Error: No hay conexion" + e.getMessage());
        }
        return usuario;
    }

    public void delete(String nombre) throws Exception{
        Statement stm = null;
        Connection con = null;
        String sql = "DELETE FROM usuario where nombre = '" + nombre + "';";
        try {
            con = new Conexion().conectarMySQL();
            stm = con.createStatement();
            stm.execute(sql);
            stm.close();
            con.close();
        } catch (SQLException e) {
            throw new Exception("Error: Método Delete" + e.getMessage());
        } catch (NullPointerException e){
            throw new Exception("Error: No hay conexion" + e.getMessage());
        }
    }
}