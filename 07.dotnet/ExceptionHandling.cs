namespace DefaultNamespace;

public class ExceptionHandling
{
    try
    {
        private int num = 10;
        private int deno = 10;
        int result = num / deno;
        Console.log("$Result: {result}");
    }
    catch (Exception ex) {
        Console.WriteLine("$Exception: {ex.Message}");
    }
    finally {
        Console.WriteLine("$Finally: {num}");
    }
    
    
    
}