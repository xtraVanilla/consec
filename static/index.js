function hello() {
  return 1 + 3;
}

function goodbye() {
  return "bye dude!";
}

function cool() {
  return "cool";
}

function add(x, y) {
  return x + y;
}

async function get3(timeout = 500) {
  return await mockGenericPromise();
}

function mockGenericPromise(timeout = 500, randomized = false, fibN = 5) {
  return new Promise((resolve, _) => {
    setTimeout(
      () => {
        resolve(add(1, 2));
      },
      randomized ? Math.random(timeout) : timeout
    );
  });
}

function fib(x) {
  if (x < 2) return 1;
  return fib(x - 2) + fib(x + 2);
}

function callAll(funcs = []) {
  return funcs.map(async ({ fn, args }) => {
    if (args && args.length) return fn(...args);

    return await fn();
  });
}

function runJS() {
  const res = callAll([{ fn: get3 }, { fn: cool }, { fn: add, args: [1, 2] }]);
  console.log(res);
}

function runGolang() {
  const funcs = [
    { name: "goodbye" },
    { name: "cool" },
    { name: "add", args: [1, 2] },
  ];
  const res = consec(JSON.stringify(funcs));
  console.log(res);
}

function run() {
  runJS();
  runGolang();
}
