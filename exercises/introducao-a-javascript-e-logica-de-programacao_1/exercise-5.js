let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 < 0 || angle2 < 0 || angle3 < 0){
    console.log("não pode haver valores menores que 0!");
    return;
}

if((angle1 + angle2 + angle3) === 180){
    console.log("true, os ângulos representão um triângulo!")
}else{
    console.log("false, os ângulos não representão um triângulo!")
}