let salarioBruto = 3000;

let discontoInss = salarioBruto - ((salarioBruto * 11) / 100);
let discontoIr = ((discontoInss * 7.5) / 100) - 142.80;

let salarioLiquido = discontoInss - discontoIr;

console.log(salarioLiquido)
