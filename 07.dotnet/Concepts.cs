#nullable disable
namespace _07.dotnet;

public class Concepts
{
    public void NullableExample()
    {
        int? t1 = 2;
        // int t2 = t1;
        Console.WriteLine($"NullableExample1 {t1}");
    }

    
    public static IEnumerable<int> GetNumbersWithoutYield()
    {
        // List<int> numbers = new List<int>();
        for (int i = 1; i <= 5; i++)
        {
            yield return i;
        }
        // return numbers;
    }
    
    public void EnumerableExample()
    {
        List<int> numbers = new List<int> {1,2,3,4};
        foreach (var number in numbers) 
        {
            Console.WriteLine($"IEnumerableExample {number}");
        }
        
        Console.WriteLine("---------------------------------");
        IEnumerable<int> numbers2 =numbers;
        IEnumerator<int> enumerator = numbers2.GetEnumerator();
        while (enumerator.MoveNext())
        {
            Console.WriteLine($"IEnumeratorExample {enumerator.Current}");
        }
        
        Console.WriteLine("---------------------------------");
        IEnumerable<int> numbers3 = GetNumbersWithoutYield();
        foreach (var number in numbers3)
        {
            if (number == 3)
            {
                break;
            }
            Console.WriteLine($"WithoutYieldExample {number}");
        }
        Console.WriteLine("---------------------------------");

    }
}

// NullableExample1 2
// IEnumerableExample 1
// IEnumerableExample 2
// IEnumerableExample 3
// IEnumerableExample 4
// IEnumeratorExample 1
// IEnumeratorExample 2
// IEnumeratorExample 3
// IEnumeratorExample 4
