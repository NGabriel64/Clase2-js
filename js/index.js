//Clase 2 JS

let n1 = 15
let n2 = 20

if (n1*2 == 35){
    console.log(`Resultado 1`)
}

else if (n1>n2 || n1!=15 ){
    console.log(`Resultado 2`)
}

else{
    console.log(`Ultima opcion`)
}


//Ternario

n1===`15`? console.log(`se cumple`): console.log(`no se cumple`)


//Array

const numeros= [1,2,3,4,5,6,7,8,9,10]
//console.log(numeros[0])

//Estructura for

for(let i=0;i <=5 ; i++){
    console.log(i);
}

const nombres = [`Nestor`, `Nathaniel`, `Tomas`, `Nahuel`]

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
}

/* for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]*2)
} */
/* 
for(let i=0; i<numeros.length; i++){
    if(numeros[i]%2==1){
        console.log(numeros[i])
    }
} */


//Ternario condición ? ejecuta en true ejecuta en false

//Crear un for que muestre solo los números pares con un ternario

/*for(let i =0; i<numeros.length; i++){
    numeros[i]%2 == 0 ? console.log(numeros[i]): null;
}*/

for(let i=0; i<numeros.length; i++){
    if(numeros[i]%2 ==0){
        console.log(numeros[i])
    }
    else{
        continue;
    };
}




for(let i=0; i<numeros.length; i++){
    if(numeros [i]==7){
        break
    }

    console.log(numeros[i])
}



let indice = 1;

while(indice<=10){
    console.log(`Iteracion ${indice}`)
    indice++;
}



do{
    console.log(`Hola`)
}
while(indice>100)

do{
    console.log(`Hola`)
    indice++;
}
while(indice<=20)



for(i of numeros){
    console.log(i)
}



const helados=[`menta`, `cho con nuez`, `limon`, `cho con ddl`, `mascarpone`, `frutos rojos`]

console.log(helados[3].includes(`cho`));

//Tarea: crear un bucle que muestre solo los gustos con chocolate.

for(let i=0; i<helados.length; i++){
    if(helados[i].includes(`cho`)){
        console.log(helados[i])
    }
}
