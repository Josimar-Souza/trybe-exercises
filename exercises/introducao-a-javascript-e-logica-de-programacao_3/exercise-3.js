let n = 10;
let char = "";
let spaceIndex = n;

for (let linha = 1; linha < (n + 1); linha += 1){
    char = "";    
    for (let indexEspace = 0; indexEspace < (spaceIndex - 1); indexEspace += 1){
        char += " ";        
    };
    for (let indexLinha = 0; indexLinha < linha; indexLinha += 1){
        char += "*";
    };
    spaceIndex -= 1;
    console.log(char);    
};