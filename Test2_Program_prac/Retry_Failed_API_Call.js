// git
// In automation testing, API calls sometimes fail due to network issues. 
// Write a JavaScript program that simulates retrying a failed API call using a do...while loop. 
// The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
// Log each attempt and print the final result.

//Input-----> MAX_ATTEMPTS = 5
//Output---->Attempt 1: ❌ FAILED (Timeout/Error) Attempt 2: ✅ SUCCESS (Response 200 OK) API call PASSED after 2 attempt(s).



const MAX_ATTEMPTS = 5;
let attempt = 1;
let success = false;
do {
    let responseCode = Math.random();

    console.log("Performing Attempt " + attempt);

    if (responseCode > 0.6) {
        console.log(responseCode)
        console.log("✅ SUCCESS (Response 200 OK)");
        console.log("API call PASSED after " + attempt + (attempt === 1 ? " attempt" : " attempts"));
        success= true;
        break;
    }

    else {
        console.log(responseCode)
        console.log("Attempt " + attempt + " failed")
        console.log("❌ FAILED (Timeout/Error)");
    }
    attempt++;

} while (attempt <= MAX_ATTEMPTS);
if(!success){
    console.log("❌ All retries exhausted. API call failed.");
}
