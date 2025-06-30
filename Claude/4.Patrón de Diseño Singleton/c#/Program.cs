using System;
using System.Threading;

public sealed class Singleton
{
    private static volatile Singleton instance;
    private static readonly object lockObject = new object();
    private string data;
    
    private Singleton()
    {
        data = "Instancia Singleton";
    }
    
    public static Singleton GetInstance()
    {
        if (instance == null)
        {
            lock (lockObject)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
    
    public string GetData()
    {
        return data;
    }
    
    public void SetData(string data)
    {
        this.data = data;
    }
    
    static void Main()
    {
        Console.WriteLine("=== Prueba del Patrón Singleton ===");
        
        // Crear instancias
        Singleton instance1 = Singleton.GetInstance();
        Singleton instance2 = Singleton.GetInstance();
        
        // Verificar que sean la misma instancia
        Console.WriteLine($"instance1 HashCode: {instance1.GetHashCode()}");
        Console.WriteLine($"instance2 HashCode: {instance2.GetHashCode()}");
        Console.WriteLine($"instance1 == instance2: {ReferenceEquals(instance1, instance2)}");
        
        // Modificar datos en una instancia
        instance1.SetData("Datos modificados");
        Console.WriteLine($"Datos en instance2: {instance2.GetData()}");
        
        // Prueba con múltiples hilos
        TestMultipleThreads();
    }
    
    private static void TestMultipleThreads()
    {
        Console.WriteLine("\n=== Prueba con Múltiples Hilos ===");
        
        Thread thread1 = new Thread(() =>
        {
            Singleton instance = Singleton.GetInstance();
            Console.WriteLine($"Thread 1 - Instancia: {instance.GetHashCode()}");
        });
        
        Thread thread2 = new Thread(() =>
        {
            Singleton instance = Singleton.GetInstance();
            Console.WriteLine($"Thread 2 - Instancia: {instance.GetHashCode()}");
        });
        
        thread1.Start();
        thread2.Start();
        
        thread1.Join();
        thread2.Join();
    }
}