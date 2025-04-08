namespace DefaultNamespace;
public class ExceptionHandling
{
    private int _k = 2 / 1;
    
    public void ExceptionHandler()
    {
        try
        {
            int _num = 10;
            int _deno = 10;
            _k = _num / _deno;
        }
        catch (Exception ex) {
            Console.WriteLine($"Exception: {ex.Message}");
        }
        finally {
            Console.WriteLine($"Finally: {_k}");
        }
    }
}