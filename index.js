const pi = "999999999123141441777777777222222222141414141";

const arr = pi.split('');
let ranges = [];
let rangesFinal = [];
let aux = 0;
let arrFinal = {
    arr: ""
};

for(let i = 0; i < arr.length; i++){
    for(c = i + 1; c < arr.length; c++){
        ranges.push({value: arr[c], positionI: i, positionC: c});
    }

}

// console.log("value: " + ranges[i].value + " - positionI: " + ranges[i].positionI + " - positionC: " + ranges[i].positionC + " - Valor de I: " + i);

for(let i = 0; i < ranges.length; i++){
    console.log(ranges[i]);
    if(ranges[i].positionC % 9 == 0){
        
        
    }

    if(ranges[i].positionC % 9 == 0){
        //console.log("value: " + ranges[i].value + " - positionI: " + ranges[i].positionI + " - positionC: " + ranges[i].positionC + " - Valor de I: " + i);
    }

}

console.log(arrFinal.arr);


// const num = "999999999123141441777777777222222222141414141";

// const numList = num.split('');
// const numListReverse = numList.slice(0).reverse();
// let teste = []
// let firstRange = [];
// let locales = [];

// for(let i = 0; i < 28; i++){
//     if(i < 9){
//         firstRange.push({value: numList[i], position: i});
//     }
//     for(let c = i + 1; c < numList.length; c++){
//         teste.push({valor: numList[c], positionC: c, positionI: i});
        
//         //Agora a regra é:
//         // verificar os primeiros 9 números mediante ao positionI
//         // De preferência usar outro for(em cima do que puxei para os novos vetores) que da certo
//         /*
//             9 primeiros números - positionI == 0;
//             9 primeiros números - positionI == 1;
//             9 primeitos números - positionI == 2;
//             9 primeiros números - positionI == 3;
//             ... até o 44(por meio de um loop é claro);
//         */
//     }
// }

// firstRange.forEach(el =>{
//     console.log(el);
// })


// teste.forEach(el =>{
//     console.log(el);
// })