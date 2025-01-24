const one1 = () => Promise.resolve('One!');

async function myFunc() {
    console.log('1');
    const res = await one1();
    
    console.log(res);
    console.log('4');
}

function myFunc1() {
    console.log('1');
    one1().then(res => {
        console.log(res);
        
    });
    console.log('4');
}


console.log('2');
myFunc();
console.log('3');
