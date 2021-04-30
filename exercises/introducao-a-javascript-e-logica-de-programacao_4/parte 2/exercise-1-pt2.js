function isPalindrome(word){
    let originalWord = word;
    let invertedWord = "";    

    for(let index = (word.length - 1); index >= 0; index -= 1){        
        invertedWord += originalWord[index];
    };

    if(originalWord === invertedWord){
        return `palavra original: ${originalWord}, palavra invertida: ${invertedWord}, true`;
    }else{
        return `palavra original: ${originalWord}, palavra invertida: ${invertedWord}, false`;
    };
    
};

console.log(isPalindrome("arara"));