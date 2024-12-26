function func<S,T>(v1:S, v2:T): [S,T] {
    return [v1,v2];
}
console.log(func<string,number>('hello', 2));
