using System;

class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static Singleton GetInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }

    static void Main() {
        var a = Singleton.GetInstance();
        var b = Singleton.GetInstance();
        Console.WriteLine("¿Es la misma instancia? " + (a == b));
    }
}
