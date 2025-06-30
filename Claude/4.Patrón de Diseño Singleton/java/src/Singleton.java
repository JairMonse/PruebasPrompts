public class Singleton {
    private static volatile Singleton instance;
    private String data;
    
    private Singleton() {
        this.data = "Instancia Singleton";
    }
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
    
    public String getData() {
        return data;
    }
    
    public void setData(String data) {
        this.data = data;
    }
    
    public static void main(String[] args) {
        System.out.println("=== Prueba del Patrón Singleton ===");
        
        // Crear instancias
        Singleton instance1 = Singleton.getInstance();
        Singleton instance2 = Singleton.getInstance();
        
        // Verificar que sean la misma instancia
        System.out.println("instance1 hashCode: " + instance1.hashCode());
        System.out.println("instance2 hashCode: " + instance2.hashCode());
        System.out.println("instance1 == instance2: " + (instance1 == instance2));
        
        // Modificar datos en una instancia
        instance1.setData("Datos modificados");
        System.out.println("Datos en instance2: " + instance2.getData());
        
        // Prueba con múltiples hilos
        testMultipleThreads();
    }
    
    private static void testMultipleThreads() {
        System.out.println("\n=== Prueba con Múltiples Hilos ===");
        
        Thread thread1 = new Thread(() -> {
            Singleton instance = Singleton.getInstance();
            System.out.println("Thread 1 - Instancia: " + instance.hashCode());
        });
        
        Thread thread2 = new Thread(() -> {
            Singleton instance = Singleton.getInstance();
            System.out.println("Thread 2 - Instancia: " + instance.hashCode());
        });
        
        thread1.start();
        thread2.start();
        
        try {
            thread1.join();
            thread2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}