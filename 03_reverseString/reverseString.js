const reverseString = function(strToReverse) {
    strToReverse.split();
    let reverseWord = [];
   for(let i = strToReverse.length; i > 0; i--){
    reverseWord.push(strToReverse[i-1]);
    console.log(reverseWord);
   }
   return reverseWord;
};
reverseString("hello");
// Do not edit below this line
module.exports = reverseString;
