let valorCusto = 1500;
let valorDeVenda = 2000;
let lucro;

if(valorCusto < 0 || valorDeVenda < 0){
    console.log("não pode haver valores menores que 0!");
    return;
}

valorCusto = valorCusto + ((valorCusto * 20) / 100);
lucro = valorDeVenda - valorCusto;

console.log("Lucro de: " + lucro);
