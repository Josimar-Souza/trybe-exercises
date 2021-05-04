function verifyEndWord(word, endWord){
    if (endWord.length < 4){
        return "o parâmetro endWord precisa ter precisamente as 4 ultimas letras";
    }

    let numberOfHits = 0;
    let endWordIndex = 0;
    for (let index = (word.length - 3); index < word.length; index += 1){
        if(word[index - 1] === endWord[endWordIndex]){
            numberOfHits += 1;
            endWordIndex += 1;
        };
    };

    if (numberOfHits === 3){
        return true;
    }else{
        return false;
    }
};

console.log(verifyEndWord("trybe", "rybe"));