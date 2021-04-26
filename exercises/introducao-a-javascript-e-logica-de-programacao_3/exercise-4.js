let n = 25;
let char = "";
let charCount = 0;
let space = Math.floor(n / 2);

for (let linha = 1; linha < n; linha += 1){
    char = "";    

    if ((linha + charCount) > n){
        break;
    };

    for (let spaceIndex = space; spaceIndex > 0; spaceIndex -= 1){
        char += " ";
    };

    for (let charIndex = 0; charIndex < (linha + charCount); charIndex += 1){
        char += "*";
    };    

    space -=1;
    charCount += 1;
    console.log(char);
};