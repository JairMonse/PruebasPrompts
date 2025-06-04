using System;
public class Singleton {
    private static Singleton instance = null;
    private static readonly object padlock = new object();
    private Singleton() {}
    public static Singleton Instance {
        get {
            lock (padlock) {
                if (instance == null)
                    instance = new Singleton();
                return instance;
            }
        }
    }
}
class Program {
    static void Main() {
        var s1 = Singleton.Instance;
        var s2 = Singleton.Instance;
        Console.WriteLine("HashCode instancia s1: " + s1.GetHashCode());
        Console.WriteLine("HashCode instancia s2: " + s2.GetHashCode());
        Console.WriteLine("¿Misma instancia? " + (s1 == s2));
    }
}
