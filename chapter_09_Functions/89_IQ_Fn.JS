// // Returns a value
// function getStatus(code) {
//     if (code >= 200 && code < 300) return "success";
//     if (code >= 400 && code < 500) return "client error";
//     if (code >= 500) return "server error";
// }

// getStatus(200);
// getStatus(404);
// getStatus(500);



// function logTest(name) {
//     console.log(`Running: ${name}`);
//     // no return statement
// }
// let result = logTest("Login");
// console.log(result);


 greet("Alice"); // Calling the function in previous step (Hoisting) will work with below kind of function

function greet(name) {
    return `Hello, ${name}!`;
}

// ❌ Expression — NOT hoisted

sayHi("Bob");// this hoisting doesn't work for const or var that holds the function.

const sayHi = function (name) {
    return `Hi, ${name}!`;
};