package mx.uv;

public class Admins {
    
    String id;
    String password;


    public Admins() {
    }

    public Admins(String id, String password) {
        this.id = id;
        this.password = password;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
