// (function() {
//     fetch("https://official-joke-api.appspot.com/random_joke")
//         .then(res => res.json()) 
//         .then(data => postMessage(`${data.setup} - ${data.punchline}`))
//         .catch(() => postMessage("Error fetching joke."));
// })();
var i=0;
console.log("worker");
function timedCount() {
    i=i+1;
    postMessage(i);
}
setTimeout(timedCount,1000);