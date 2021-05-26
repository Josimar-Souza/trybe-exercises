const checkAnswers = (studentAnswers, rightAnswers, callback) => callback(studentAnswers, rightAnswers);

const sumOfNotes = (studentAnswers, rightAnswers) => {
    let sum = 0;
    for (let index = 0; index < rightAnswers.length; index += 1) {
        if (studentAnswers[index] === rightAnswers[index]) {
            sum += 1;
        } else if (studentAnswers[index] === 'N.A') {
            sum = sum;
        } else {
            sum -= 0.5;
        }
    }
    return sum;
}

console.log(checkAnswers(['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], sumOfNotes));