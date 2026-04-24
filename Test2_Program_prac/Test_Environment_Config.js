// Test Environment Config
// In CI/CD pipelines, tests run against different environments. 
// Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. 
// Use const for fixed values and let for the assembled config.

// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.

//Input--->envName = "staging"
//Output--->Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror

const envName = "staging" ;

let environment=" ";
let baseurl=" ";
let apikey=" ";
let timeout=" ";
let description=" ";

switch (envName){
    case "staging":
        environment ="STAGING";
        baseurl = "https://staging-api.testingacademy.com";
        apikey ="tg_key_xxxx-xxxx";
        timeout= "8000ms";
        description="Staging - Pre-production mirror";
        break;
    case "dev" :
        environment ="DEV";
        baseurl = "https://dev-api.testingacademy.com";
        apikey ="tg_key_xxxx-xxxx";
        timeout= "8000ms";
        description="Dev - Pre-production mirror";
        break;
    case "qa":
        environment ="QA";
        baseurl = "https://qa-api.testingacademy.com";
        apikey ="tg_key_xxxx-xxxx";
        timeout= "8000ms";
        description="Qa - Pre-production mirror";
        break;
    case "prod" :
        environment ="PRODUCTION";
        baseurl = "https://prod-api.testingacademy.com";
        apikey ="tg_key_xxxx-xxxx";
        timeout= "8000ms";
        description="Production";   
        break; 
}

console.log(`Environment: ${environment} | Base URL: ${baseurl} | API Key: ${apikey} | Timeout: ${timeout} | Description: ${description}`);