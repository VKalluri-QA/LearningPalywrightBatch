// Test Data Generator
// As an SDET, you frequently need to generate test data for form testing. 
// Write a JavaScript program that generates test user data using a for loop. 
// Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). 
// Every 3rd user should be inactive (edge case testing). 
// Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).



//Input--->Generate 8 users

//Output--->USR-0001 | TestUser_1 | testuser1@testingacademy.com | admin | 
        // ACTIVE USR-0002 | TestUser_2 | testuser2@testingacademy.com |editor | 
        // ACTIVE USR-0003 | TestUser_3 | testuser3@testingacademy.com | viewer | 
        // INACTIVE

 // ✅ const — fixed values that never change
const DOMAIN = "testingacademy.com";
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];


// ✅ var — global counter (exists outside loop scope)
var totalActiveUsers = 0;
var totalInactiveUsers = 0;

// ✅ let — loop/block variables that change each iteration
for (let i = 1; i <= ROLES.length; i++) {

  let uniqueID = `USR-${String(i).padStart(4, '0')}`; // USR-0001 format
  let name     = `TestUser_${i}`;
  let email    = `testuser${i}@${DOMAIN}`;
  let role     = ROLES[(i - 1) % ROLES.length];       // cycles through 5 roles
  let status   = (i % 3 === 0) ? "INACTIVE" : "ACTIVE"; // every 3rd user

  // Track counts using var (global)
  if (status === "ACTIVE") {
    totalActiveUsers++;
  } else {
    totalInactiveUsers++;
  }

  console.log(`${status} ${uniqueID} | ${name} | ${email} | ${role}  `);
}

// var variables are accessible here outside the loop
console.log(`\nSummary → Active: ${totalActiveUsers} | Inactive: ${totalInactiveUsers}`);