interface Student {
    id: number,
    name: string,
    surname?: string
}

let student_obj : Partial<Student> = {id: 1};

let student_obj2 : Required<Student> = {id:2, name:"q", surname:"w"};

let student_obj3 : Omit<Student, 'id'> = {
    name: "q"
}

let student_obj4 : Pick<Student, 'id'> = {
    id: 1
}

let student_obj6 : Readonly<Student> = {
    id:1,
    name:"q"
}
// student_obj6.surname = "w"; not allowed as readonly property

// Record is a shortcut to defining an object type with a specific key type and value type.
const StudentMap: Record<string,number> = {
    'q':1,
    'w':2,
}

// Exclude removes types from a union.
let student_obj5: Record<Exclude<keyof Student, 'surname'>, any> = {
    id: 3,
    name: "John"
};

// ReturnType extracts the return type of a function type.
function getStudentName(student: Student): string {
    return student.name;
}

type StudentNameReturnType = ReturnType<typeof getStudentName>;

let studentName: StudentNameReturnType = "John";

// Parameters extracts the parameter types of a function type as a tuple.
type GetStudentNameParameters = Parameters<typeof getStudentName>;

let studentParams: GetStudentNameParameters = [{ id: 1, name: "John" }];