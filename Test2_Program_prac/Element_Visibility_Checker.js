// Element Visibility Checker
// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. 
// Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and 
// prints the appropriate action a QA engineer should take. 
// Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

// States: 
// READY (all true), 
// DISABLED (present+displayed but not enabled), 
// HIDDEN (present but not displayed), 
// NOT FOUND (not present).
// Severity: 
// CRITICAL (not present), 
// WARNING (not displayed or not enabled), 
// OK (all good).

//Input: isPresent = true, isDisplayed = true, isEnabled = false
//Output Status: DISABLED ---Severity: WARNING ---Action: Element is visible but disabled. Wait for enable state or check preconditions.

const isPresent = false;
const isDisplayed = true;
const isEnabled = false;

let status = "";
if (isPresent === false) {
    status = "NOT FOUND";
}
else if (isDisplayed === false) {
    status = "HIDDEN";
}
else if (isEnabled === false) {
    status = "DISABLED";
}
else {
    status = "READY";
}
const severity = (status === "NOT FOUND") ? "CRITICAL" :
    (status === "HIDDEN" || status === "DISABLED") ? "WARNING" : "OK"

let action = "";
switch (status) {
    case "READY":
        action = "Element is all good to take action";
        break;

    case "DISABLED":
        action = "Element is visible but disabled. Wait for enable state or check preconditions.";
        break;

    case "HIDDEN":
        action = "Element is not displayed";
        break;

    case "NOT FOUND":
        action = "Element is NOT FOUND";
        break;
}

console.log("Status : " , status );
console.log("Severity : " , severity);
console.log("Action : ", action) ;



