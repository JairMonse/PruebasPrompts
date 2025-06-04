public class Singleton {
    // Instancia privada y estática
    private static Singleton instance;

    // Constructor privado para evitar instanciación externa
    private Singleton() {
        System.out.println("Instancia creada");
    }

    // Método público y estático para obtener la instancia
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    // Método de prueba
    public static void main(String[] args) {
        Singleton a = Singleton.getInstance();
        Singleton b = Singleton.getInstance();

        System.out.println("¿Es la misma instancia? " + (a == b));
    }
}
