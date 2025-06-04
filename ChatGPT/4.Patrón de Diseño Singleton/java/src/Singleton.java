public class Singleton {
    private static Singleton instance;
    private Singleton() {}
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
    public static void main(String[] args) {
        Singleton s1 = Singleton.getInstance();
        Singleton s2 = Singleton.getInstance();
        System.out.println("HashCode instancia s1: " + s1.hashCode());
        System.out.println("HashCode instancia s2: " + s2.hashCode());
        System.out.println("¿Misma instancia? " + (s1 == s2));
    }
}
