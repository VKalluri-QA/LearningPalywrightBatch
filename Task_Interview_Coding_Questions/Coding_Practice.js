//Reversing a String

let name = "Playwright";
let stringReverse = "";

for(let i= name.length-1; i>=0 ; i--){
 stringReverse = stringReverse + name[i];  
}
console.log(stringReverse);

//counting duplicates in String

let word = "success";
let charCount= {};
for(let char of word){
    charCount[char]=(charCount[char] || 0)+1;
}
for(let char in charCount){
    let times = charCount[char]===1 ? "time" : "times";
    console.log(`${char} -> ${charCount[char]} ${times}`)
        }
``


console.log(`-------------------------------------------->`)



// write a code to count the repetitive letters in a string, 
//if 0 repetitions in string then print #

let wording = "nest"
let wordingObj = {}
for(let char of wording){
    wordingObj[char] = (wordingObj[char] || 0 ) +1
}

let hasRepetitions = false ;
for(let char in wordingObj){
    if(wordingObj[char] > 1){
    hasRepetitions = true;
    }
}

if(!hasRepetitions){
    console.log(":-{)");
}
else{
for(let char in wordingObj ){
    let count = wordingObj[char] === 1 ? "time" : "times"
   if (count == "times"){
    console.log( `${char}==> ${wordingObj[char]} ${count}`)}
}
}