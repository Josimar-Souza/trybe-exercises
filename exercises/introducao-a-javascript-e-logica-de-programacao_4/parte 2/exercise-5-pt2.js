function numberWithMoreRepetition(numberArray){
    let numberOfRepetition = 0;
    let numberOfRepetitionIndex = 0;

    for(let numberIndex = 0; numberIndex < numberArray.length; numberIndex += 1){
        let currentRepetition = 0;
        for(let verificationIndex = 0; verificationIndex < numberArray.length; verificationIndex += 1){
            if(numberArray[numberIndex] === numberArray[verificationIndex]){
                currentRepetition += 1;                 
            };
        };
        if(currentRepetition > numberOfRepetition){
            numberOfRepetition = currentRepetition;
            numberOfRepetitionIndex = numberIndex;
        };
    };

    return `O número ${numberArray[numberOfRepetitionIndex]} se repetiu ${numberOfRepetition} vezes.`;
};

console.log(numberWithMoreRepetition([2, 3, 2, 5, 8, 2, 3]));