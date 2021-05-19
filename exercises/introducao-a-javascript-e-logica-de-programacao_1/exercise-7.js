let porcentagem = 55;

if (porcentagem < 0 || porcentagem > 100){
    console.log("Porcentagem não pode ser maior que 100 ou menor que 0!");
    return;
}

if (porcentagem >= 90){
    console.log("Nota A!");    
}else if (porcentagem >= 80 && porcentagem < 90){
    console.log("Nota B!");
}else if (porcentagem >= 70 && porcentagem < 80){
    console.log("Nota C!");
}else if (porcentagem >= 60 && porcentagem < 70){
    console.log("Nota D!");
}else if (porcentagem >= 50 && porcentagem < 60){
    console.log("Nota E!");
}else{
    console.log("Nota F!");
}