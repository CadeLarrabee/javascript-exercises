const sumAll = function(numInputOne, numInputTwo) {
    let sumOfAllNums = 0;
    let largerNum;
    let smallerNum;

    if(numInputOne < 0 || numInputTwo < 0){
        return "ERROR";
    }
    if(!Number.isInteger(numInputOne) || !Number.isInteger(numInputTwo)){
        return "ERROR";
    }

    if(numInputOne < numInputTwo){
        largerNum = numInputTwo;
        smallerNum = numInputOne;
    }
    else{
        largerNum = numInputOne;
        smallerNum = numInputTwo;
    }
    
    for(i = smallerNum; i <= largerNum;i++){
        sumOfAllNums += i;
    }
    console.log(sumOfAllNums);
    return sumOfAllNums;
};
sumAll(123,1);
// Do not edit below this line
module.exports = sumAll;
