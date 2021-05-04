let n = 5;
let char = "";

for (let linha = 1; linha < (n +1); linha += 1){
    char = "";
    for(let indexLinha = 0; indexLinha < linha; indexLinha += 1){
        char += "*";
    };
    console.log(char);
};
