function greaterWord(wordArray){
    let greaterWordIndex = 0;
    let currentWordLength = 0;
    for(let index = 0; index < wordArray.length; index += 1){
        if(wordArray[index].length > currentWordLength){
            currentWordLength = wordArray[index].length;
            greaterWordIndex = index;
        }
    };

    return wordArray[greaterWordIndex];
};

console.log(greaterWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));