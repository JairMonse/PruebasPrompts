public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton Instance {
        get {
            if (instance == null) {
                instance = new Singleton();
            }
            return instance;
        }
    }

    public static void Main() {
        Singleton s1 = Singleton.Instance;
        Singleton s2 = Singleton.Instance;
        Console.WriteLine("¿s1 y s2 son la misma instancia? " + (s1 == s2));
    }
}