namespace _07.dotnet;

public class Initial
{
    
    public static bool TryParseInt(string input, out int result)
    {
        return int.TryParse(input, out result);
    }
    
    public static void Main(string[] args)
    {
        // Inheritance
        Student student = new Student() {Name = "John", Age = 18};
        Student student2 = new Student() {Name = "John", Age = 18};
        Student student3 = student;
        Console.WriteLine($"student2 == student {student2 == student}");
        Console.WriteLine($"student3 == student {student3 == student}");
        student3.Name = "John1";
        Console.WriteLine($"student {student.Func(student)}");
        
        
        //Class vs Records
        StudentRecord studentRecord = new StudentRecord("John", "Johnson");
        StudentRecord studentRecord2 = new StudentRecord("John", "Johnson");
        StudentRecord studentRecord3 = studentRecord;
        // studentRecord3.FirstName = "John1";
        Console.WriteLine($"studentRecord == studentRecord3 {studentRecord == studentRecord3}");
        Console.WriteLine($"studentRecord == studentRecord {studentRecord == studentRecord2}");
        Console.WriteLine(studentRecord);
        
        
        //Generics
        StudentGeneric<int> studentGeneric = new StudentGeneric<int>();
        studentGeneric.Add(1);

        
        //Anonymous Objects
        student.AnonymousExample();

        
        //null and type checks
        int? x = 12;
        if (x is not null)
        {
            Console.WriteLine(x);
        }
        else
        {
            Console.WriteLine($"{x} is not int");
        }

        
        // Relational patterns
        string valueState(int value) => value switch
        {
            >= 0 and < 20 => "10-20",
            < 0 => "<0",
            > 20 => ">20",
            _ => "invalid value"
        };
        Console.WriteLine(valueState(20));
        
        // Deconstruct tuple
        student.DeconstructExample();
        
        
        // Out
        // string input = "123";
        // if (TryParseInt(input, out int number))
        // {
        //     Console.WriteLine($"Parsed number: {number}");
        // }
        // else
        // {
        //     Console.WriteLine("Failed to parse input.");
        // }
        
        // Exception Handling
		ExceptionHandling e = new ExceptionHandling();		
        
    }
}