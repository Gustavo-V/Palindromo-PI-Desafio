const pi = "999999999123141441777777777222222222141414141";
const arr = pi.split('');
let ranges = [];
let rangesFinal = [];
let arrFinal = {
    str: '',
    arr: []
};
let aux = 0;

for(let i = 0; i < arr.length; i++){
    for(c = i; c < arr.length; c++){
        ranges.push({value: arr[c], positionI: i, positionC: c + 1});
    }

}

for(let i = 0; i < ranges.length; i++){
    // console.log("value: " + ranges[i].value + " - positionI: " + ranges[i].positionI + " - positionC: " + ranges[i].positionC + " - Valor de I: " + i);

    for(let j = 0; j < arr.length; j++){
        if(j == ranges[i].positionC - 1){
            // console.log("value: " + ranges[i].value + " - positionI: " + ranges[i].positionI + " - positionC: " + ranges[i].positionC + " - Valor de I: " + i + " j: " + j);

            if(ranges[i].positionC - ranges[i].positionI == 1){
                arrFinal.str += ' ';
            }
            arrFinal.str += ranges[i].value;
            
            // if(j % 43 == 0){
            //     arrFinal.str += ' ';
            // }
            // if(j % 43 == 0){
            //     arrFinal.str += ' ';
            // }
        }
    }
}

arrFinal.arr = arrFinal.str.split(' ');
arrFinal.arr.pop();
arrFinal.arr.shift();


console.log(arrFinal.arr);

