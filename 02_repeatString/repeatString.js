const repeatString = function(strToRepeat, numOfReps) {
    let outputString = "";
    if(numOfReps < 0){
        return 'ERROR';
    }
    for(let i = 0; i < numOfReps; i++){
        outputString += strToRepeat;
    }
    return outputString;
};
// Do not edit below this line
module.exports = repeatString;
