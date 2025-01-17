/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {
  const count = {};
  for (let char of str1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  for (let char of str2) {
    if (char in count) {
      count[char] -= 1;
    } else {
      return false;
    }
  }
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
}
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("tan", "nan")); /* 

    Anagrams are groups of words that can be spelled with the same letters. 
    For example, the letters in "pea" can be rearrange to spell "ape", and 
    the letters in "allergy" can be rearranged to spell "gallery."
    
    Write a function to check if two strings of lowercase letters are anagrams. 
    Return true if the word is an anagram. Return false if it isn't. 
    
    Example input: "allergy", "gallery"
    Example output: true
    
    Example input: "rainbow", "crossbow"
    Example output: false
    
    */

function isAnagram(str1, str2) {
  const count = {};
  for (let char of str1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  for (let char of str2) {
    if (char in count) {
      count[char] -= 1;
    } else {
      return false;
    }
  }
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
}
console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("tan", "nan"));

// function isAnagram(str1, str2){
//     // are the strings the same length? if yes return false.
//     if(str1.length !== str2.length) return false;

//     // split string into an array
//     // sort
//     // join the array back together as a string
//     const newStr1 = str1.split('').sort().join('');

//     // repeat with second word
//     const newStr2 = str2.split('').sort().join('');

//     // are the two words equal? true or false
//     return newStr1 === newStr2;
// }

// console.log(isAnagram("allergy", "gallery"));
// console.log(isAnagram("treasure", "measure"));
