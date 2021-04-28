let numbers = [];

for (let index = 1; index <= 25; index += 1){
    numbers.push(index);
}

for (let index = 0; index < numbers.length; index += 1){
    let divisao = numbers[index] / 2;
    console.log(`Resultado da divisão de ${numbers[index]} por 2: ${divisao}`);
}