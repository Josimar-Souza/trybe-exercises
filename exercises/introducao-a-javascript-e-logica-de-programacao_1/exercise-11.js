let salarioBruto = 3000;
let discontoInss;
let discontoIr;
let salarioLiquido;

if(salarioBruto <= 1556.94){
    discontoInss = salarioBruto - (0.08 * salarioBruto);
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    discontoInss = salarioBruto - (0.09 * salarioBruto);
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    discontoInss = salarioBruto - (0.11 * salarioBruto);
}else{
    discontoInss = salarioBruto - 570.88;
}

if(discontoInss <= 1903.98){
    discontoIr = 0;
}else if(discontoInss >= 1903.99 && discontoInss <= 2826.65){
    discontoIr = ((discontoInss * 7.5) / 100) - 142.80
}else if(discontoInss >= 2826.66 && discontoInss <= 3751.05){
    discontoIr = ((discontoInss * 15) / 100) - 354.80
}else if(discontoInss >= 3751.06 && discontoInss <= 4664.68){
    discontoIr = ((discontoInss * 22.5) / 100) - 636.13
}else if(discontoInss > 4664.68){
    discontoIr = ((discontoInss * 27.5) / 100) - 869.36
}

salarioLiquido = discontoInss - discontoIr;

console.log(salarioLiquido);
