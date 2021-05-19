const testingScope = escopo => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }    
  }

  testingScope(false);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortArray = array => {
    array.sort((a, b) => a - b);
    return `Os números ${array} se encontram ordenados de forma crescente`;
  }

  console.log(sortArray(oddsAndEvens));

  const calcFatorial = n => {
      let result = 1;
      for (let index = 1; index <= n; index += 1) {
        result *= index;
      }
    return result;      
  }

  console.log(calcFatorial(4));