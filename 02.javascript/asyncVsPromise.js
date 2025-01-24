const one1 = () => Promise.resolve('One!');

async function myFunc() {
    console.log('1');
    const res = await one1();
    
    console.log(res);
    console.log('4');
}
// 2
// 1
// 3
// One!
// 4

function myFunc1() {
    console.log('1');
    one1().then(res => {
        console.log(res);
        
    });
    console.log('4');
// }
// 2
// 1
// 4
// 3
// One!


console.log('2');
myFunc();
// myFunc1();
console.log('3');
