# @xvanilla/consec

This package exposes a Go function called *consec*. It calls *n* number of JavaScript functions defined in the global scope.

### Install
```
npm i -S @xvanilla/consec
```

Copy and paste the following into your index.html:

```
import "@xvanilla/consec/static/wasm_exec"
```

### Usage

```
function goodbye() {
  return "bye dude!";
}

function cool() {
  return "cool";
}

function add(x, y) {
  return x + y;
}


const funcs = [
    { name: "goodbye" },
    { name: "cool" },
    { name: "add", args: [1, 2] },
  ];
  
const res = consec(JSON.stringify(funcs));

console.log(res); // 
```