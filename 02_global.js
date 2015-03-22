function helloWorld() {
  console.log("Hello World");
}

var i = 0;
function counter() {
  console.log(i++);
}

console.log(__filename);
console.log(__dirname);

var t = setTimeout(helloWorld, 1000);

//clearTimeout(t);

var tCounter = setInterval(counter, 2000);

setTimeout(function() {
  clearInterval(tCounter);
}, 10000);