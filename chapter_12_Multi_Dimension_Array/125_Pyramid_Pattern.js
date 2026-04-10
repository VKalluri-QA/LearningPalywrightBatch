//   *
//  ***
// ***** 

let n = 3;
for (let i = 1; i <= n; i++) {

    let row = "";
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }
    console.log(row);

}

function lastNonRepChar(s){

const charCount={}

for (let char of s){

charCount[char]=(charCount[char] || 0) +1

}

for (let i = s.length-1;i>=0;i--){

if (charCount[s[i]]==1){

return s[i]

}

}return '$'

}

console.log(lastNonRepChar("geeksforgeeks"))

console.log(lastNonRepChar("aabbcc"))

