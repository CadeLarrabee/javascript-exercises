const reverseString = function(strToReverse) {
    strToReverse.split();
    let reverseWord = [];
   for(let i = strToReverse.length; i > 0; i--){
    reverseWord.push(strToReverse[i-1]);
   }
   return reverseWord.join('');
};
// Do not edit below this line
module.exports = reverseString;