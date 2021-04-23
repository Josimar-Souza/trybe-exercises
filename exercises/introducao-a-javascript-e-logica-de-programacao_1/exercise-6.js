let peca = "bispo";

switch(peca.toLowerCase()){
    case "rei":
        console.log(peca + " se move uma casa em todas as direções!");
        break;
    case "dama":
        console.log(peca + " se move quantas casas quiser em todas as direções!")
        break;
    case "torre":
        console.log(peca + " se move em linha reta na horizontal e vertical quantas casas quiser!");
        break;
    case "bispo":
        console.log(peca + " se move nas diagonais quantas casas quiser!");
        break;
    case "cavalo":
        console.log(peca + " pode passar por cima de outras peças e se move em l");
        break;
    case "peão":
        console.log(peca + " se move sempre uma casa para frente, exeto no primeito movimento onde pode se mover duas casas!");
        break;
    default:
        console.log(peca + " não é uma peça de xadrez válida!");
}