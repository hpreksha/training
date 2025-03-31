namespace _07.dotnet;

public class StudentGeneric<T>
{
    public void Add(T item)
    {
        Console.WriteLine($"student {item}");
    }
}

public record StudentRecord(string FirstName, string LastName);

public class Student() : IStudentInterface
{
    public string Name { get; set; }
    public int Age { get; set; }
    
    public string Func(Student student)
    {
        return "Name: " + student.Name + " Age: " + student.Age;
    }

    public void AnonymousExample()
    {
        var temp = new { FirstName = "John", LastName = "Doe" };
        // temp.FirstName = "John1";   immutable
        Console.WriteLine(temp);
    }
    
    // StudentGeneric<int> studentGeneric = new StudentGeneric<int>();
    // studentGeneric.Add(1);

    public void DeconstructExample()
    {
        var person = ("John", "Doe");
        var (firstname, _) = person;
        Console.WriteLine($"DeconstructExample() {firstname}");
    }
    
}