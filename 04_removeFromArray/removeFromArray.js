const removeFromArray = function(originArray,...elementToRemove) {
      elementToRemove.forEach((element) =>{
        for(let i = originArray.length; i > 0; i--)
        {
        if(originArray[i-1] === element)
        {
            originArray.splice(i-1, 1);
        }
    }
});
    console.log(originArray);
    return originArray;
};
console.log(removeFromArray([1, 2, 3, 4, 3, 3], 3, 2, 4));
// Do not edit below this line
module.exports = removeFromArray;