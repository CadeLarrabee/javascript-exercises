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
    return originArray;
};
// Do not edit below this line
module.exports = removeFromArray;