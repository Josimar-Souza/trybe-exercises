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

  const longestWord = phrase => {
      const wordArray = phrase.split(' ');
      let wordLength = 0;
      let word = '';
      for (let index = 0; index < wordArray.length; index += 1) {
        if (wordArray[index].length > wordLength) {
            wordLength = wordArray[index].length;
            word = wordArray[index];
        }
      }

      return word;
  }

  console.log(longestWord(`Antônio foi no banheiro e não sabemos o que aconteceu`));