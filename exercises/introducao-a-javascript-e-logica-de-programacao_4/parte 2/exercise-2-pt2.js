function greaterIndex(array){    
    let indexNumber = 0;
    let indexValue = 0;

    for (let index = 0; index < array.length; index += 1){
        if(array[index] > indexValue){
            indexValue = array[index];
            indexNumber = index;
        };
    };

    return indexNumber;
};

console.log(greaterIndex([2, 3, 6, 7, 10, 1]))