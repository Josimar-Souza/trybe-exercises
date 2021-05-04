let n = 5;
let char = "";

if(n > 1){
    for (let linha = 0; linha < n; linha += 1){
        char = "";
        for (let indexLinha = 0; indexLinha < n; indexLinha += 1){
            char += "*";
        };
        console.log(char);
    };
};