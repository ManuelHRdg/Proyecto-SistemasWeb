package mx.uv;

public class Usuarios {
    private String nombre;
    private String email;
    private String sexo;
    private String password;

    public Usuarios(String nombre, String email, String password, String sexo) {
        this.nombre = nombre;
        this.email = email;
        this.sexo = sexo;
        this.password = password;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSexo() {
        return this.sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    
}
