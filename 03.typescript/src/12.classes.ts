interface int_eg {
  id: number;
  name: string;
  func(): void;
}

class Class_eg implements int_eg {
  id: number = 1;
  name: string = "p";
  func(): void {
    throw new Error("Method not implemented.");
  }
}
class Person_eg {
  private readonly name1: string;

  public constructor(name1: string) {
    // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
    this.name1 = name1;
  }

  public getName(): string {
    return this.name1;
  }
}

const person = new Person_eg("Jane");

console.log(person.getName());
