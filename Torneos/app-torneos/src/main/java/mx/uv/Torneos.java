package mx.uv;

public class Torneos {
    String id;
    String juego;
    String nombre;
    String descripcion;
    String urlImagen;
    int capacidad;


    public Torneos() {
    }

    public Torneos(String id, String juego, String nombre, String descripcion, String urlImagen, int capacidad) {
        this.id = id;
        this.juego = juego;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.capacidad = capacidad;
    }

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getJuego() {
        return this.juego;
    }

    public void setJuego(String juego) {
        this.juego = juego;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return this.descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlImagen() {
        return this.urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public int getCapacidad() {
        return this.capacidad;
    }

    public void setCapacidad(int capacidad) {
        this.capacidad = capacidad;
    }


}
