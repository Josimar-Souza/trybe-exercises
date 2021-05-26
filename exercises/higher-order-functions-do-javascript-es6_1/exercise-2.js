const raffle = (bet, callback) => {
  if (bet.length !== 5 || typeof(bet) !== 'object') {
    console.log('Por favor utilize uma array com 5 números de 1 a 5!');
    return
  }

  let raffleNumbers = [];

  for (let index = 1; index <= 5; index += 1) {
    raffleNumbers.push(Math.ceil(Math.random() * 5));
  }

  if (callback(bet, raffleNumbers)) {
    console.log(`Sua aposta: ${bet}, números sorteados: ${raffleNumbers}`);
    console.log('Parabéns você ganhou');
  } else {
    console.log(`Sua aposta: ${bet}, números sorteados: ${raffleNumbers}`);
    console.log('Tente novamente');
  }
}

const raffleCheck = (bet, raffleNumbers) => {
  let result = 0;
  for (let index = 0; index < raffleNumbers.length; index += 1) {
    if (bet[index] === raffleNumbers[index]) {
      result += 1;
    }
  }

  if (result == raffleNumbers.length) {
    return true;
  } else {
    return false;
  }
}

raffle([5, 4, 1, 3, 2], raffleCheck);