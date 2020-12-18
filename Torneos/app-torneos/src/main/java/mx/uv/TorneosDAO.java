package mx.uv;


import java.net.ConnectException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

import javax.swing.text.StyledEditorKit.BoldAction;

import java.sql.*;

public class TorneosDAO {
    
    public List<Torneos> consultarJuego(String juego) throws Exception{

        Statement stm = null;
        Connection con = null;
        ResultSet rs = null;
        String sql = "SELECT * FROM torneos where juego = '" + juego + "';";

        List<Torneos> listaTorneos = new ArrayList<Torneos>();
        try {
            con = new Conexion().conectarMySQL();
            stm = con.createStatement();
            rs = stm.executeQuery(sql);
            while(rs.next()){
                Torneos torneo = new Torneos(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getInt(6));
                listaTorneos.add(torneo);
            }
            stm.close();
            rs.close();
            con.close();
        } catch (SQLException e) {
            throw new Exception("Error: Método Create" + e.getMessage());
        } catch (NullPointerException e){
            throw new Exception("Error: No hay conexion" + e.getMessage());
        }

        return listaTorneos;
    }
}
