// Test Case Result Counter
// After a test suite runs, you receive an array of test results (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many tests passed, failed, and were skipped. 
// Print a test report with total tests, counts, pass rate percentage, and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release)

//Expected result : Total Tests : 8 Passed: 5 Failed: 2 Skipped: 1 Pass Rate: 62.50% VERDICT: Minor failures. Review before release.

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let totalTests = 0;
let passed = 0;
let failed = 0;
let skipped = 0;
let passRate;
for (let i = 0; i < testResults.length; i++) {

    if (testResults[i] === "pass") {
        ++passed;
    } else if (testResults[i] === "fail") {
        ++failed;
    }
    else if (testResults[i] === "skip") {
        ++skipped;
    }

}
console.log("Total Tests :" + testResults.length);
console.log("Passed: " + passed);
console.log("Failed " + failed);
console.log("Skipped " + skipped);
passRate = passed / testResults.length * 100;
console.log("Pass Rate: " + passRate + "%")
if (passed === testResults.length) {
    console.log("Ready to Release");
} else if (failed <= 2) {
    console.log("Minor failures. Review before release.");
}
else (console.log("Block Release"))
