function additionUntilN(n){
    let result = 0;
    for (let index = 0; index < n; index += 1){
        result += (index +1);
    };

    return result;
};

console.log(additionUntilN(5));