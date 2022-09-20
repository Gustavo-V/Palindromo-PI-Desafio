class PalindromePI {
    constructor() {
        this.pi;
        this.rangeOfPalindromeInPi = 9;
        this.piArr;
        this.fullArr;
        this.decreasingValuesArr;
        this.firstNineValues;
        this.arrFinal = new Array();
    }

    formatedPI(pi) {
        let piFormated = pi.toString();
        if (piFormated.includes(".") === true) {
            piFormated = piFormated.replace(".", ",");
        }
        piFormated = piFormated.slice(piFormated.lastIndexOf(",") + 1, piFormated.length);
        this.pi = piFormated;
        this.piArr = piFormated.split('');
        return piFormated;
    }

    firstNineValuesOfArr() {
        let str = '';
        for (let i = 0; i < 9; i++) {
            str += this.piArr[i];
        }
        return str;
    }

    createArrIteratingOneMoreValue() {
        const arr = new Array();
        for (let i = 0; i < this.piArr.length; i++) {
            for (let j = i; j < this.piArr.length; j++) {
                arr.push({ value: this.piArr[j + 1], positionI: i, positionJ: j + 1});
            }
        }
        return arr;
    }

    createArrWithValuesDecreasing() {
        let Obj = { str: '', arr: new Array() };
        for (let i = 0; i < this.fullArr.length; i++) {
            for (let j = 0; j < this.piArr.length; j++) {
                if (j == this.fullArr[i].positionJ - 1) {
                    if (this.fullArr[i].positionJ - this.fullArr[i].positionI == 1) {
                        Obj.str += ' ';
                    }
                    Obj.str += this.fullArr[i].value;
                }
            }
        }

        Obj.arr = Obj.str.split(' ');
        Obj.arr.shift();

        return Obj.arr;
    }

    sliceToNineValuesInArr() {
        let arr = new Array();
        this.decreasingValuesArr.forEach(element => {
            arr.push(element.slice(0, this.rangeOfPalindromeInPi));
        });
        return arr;
    }

    get getFirstPalindrome() {
        let arr = new Array();
        let reverseValues = new Array();
        this.arrFinal.unshift(this.firstNineValues);
        for (let i = 0; i < this.arrFinal.length; i++) {
            reverseValues.push([].map.call(this.arrFinal[i], function (target) { return target; }).reverse().join(''));
            if (reverseValues[i] === this.arrFinal[i]) {
                    arr.push(
                        {
                            value: this.arrFinal[i], isPalindrome: true, isPrime: this.setIsPrime(this.arrFinal[i])
                        }
                    );
            }
        }
        return arr;
    }

    setIsPrime(num){
        for(let i = 2; i < num; i++){
            if(num % i === 0) {
                return false;
            }
        }
        return num > 1;
    } 
}

let start = 1;

const palindrome = new PalindromePI();

async function setStart(){
    const data = await getPiAPI("https://api.pi.delivery/v1/pi?start="+start+"&numberOfDigits=1000");
    if(data.content){
        palindrome.formatedPI(data.content.toString());
        palindrome.firstNineValues = palindrome.firstNineValuesOfArr();
        palindrome.fullArr = palindrome.createArrIteratingOneMoreValue();
        palindrome.decreasingValuesArr = palindrome.createArrWithValuesDecreasing();
        palindrome.arrFinal = palindrome.sliceToNineValuesInArr();

        if(palindrome.getFirstPalindrome.length != 0){
            if(palindrome.getFirstPalindrome[0].isPrime === true){
                console.log(palindrome.getFirstPalindrome[0]);
                console.error("Achou!");
            }else{
                console.log(palindrome.getFirstPalindrome[0]);
            }
        }else{
            console.log("Nenhum Palindromo");
        }
    }

    start += 1000;
    setStart(start);
}

async function getPiAPI(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

setStart();










































// class PalindromePI {
//     constructor() {
//         this.rangeOfPalindromeInPi = 9;
//         this.piArr;
//         this.fullArr;
//         this.decreasingValuesArr;
//         this.firstNineValues;
//         this.dataFromApiPi;
//         this.arrFinal = new Array();
//         this.startOfPi = 1;
//     }

//     async splitPiInArr() {
//         this.dataFromApiPi = await this.dataFromApiPi.content.toString();
//         this.piArr = await this.dataFromApiPi.split('');
//         return this.piArr;
//     }

//     async firstNineValuesOfArr() {
//         let str = '';
//         for (let i = 0; i < 9; i++) {
//             str += await this.piArr[i];
//         }
//         return str;
//     }

//     async createArrIteratingOneMoreValue() {
//         const arr = new Array();
//         for (let i = 0; i < await this.piArr.length; i++) {
//             for (let j = i; j < await this.piArr.length; j++) {
//                 arr.push({ value: await this.piArr[j + 1], positionI: i, positionJ: j + 1});
//             }
//         }
//         return arr;
//     }

//     async createArrWithValuesDecreasing() {
//         let Obj = { str: '', arr: new Array() };
//         for (let i = 0; i < await this.fullArr.length; i++) {
//             for (let j = 0; j < await this.piArr.length; j++) {
//                 if (j == await this.fullArr[i].positionJ - 1) {
//                     if (await this.fullArr[i].positionJ - await this.fullArr[i].positionI == 1) {
//                         Obj.str += ' ';
//                     }
//                     Obj.str += await this.fullArr[i].value;
//                 }
//             }
//         }

//         Obj.arr = Obj.str.split(' ');
//         Obj.arr.shift();

//         return Obj.arr;
//     }

//     async sliceToNineValuesInArr() {
//         let arr = new Array();
//         await this.decreasingValuesArr.forEach(element => {
//             arr.push(element.slice(0, this.rangeOfPalindromeInPi));
//         });
//         return arr;
//     }

//     async getFirstPalindrome() {
//         let arr = new Array();
//         let reverseValues = new Array();
//         this.arrFinal.unshift(this.firstNineValues);
//         for (let i = 0; i < this.arrFinal.length; i++) {
//             reverseValues.push([].map.call(await this.arrFinal[i], function (target) { return target; }).reverse().join(''));
//             if (await reverseValues[i] === await this.arrFinal[i]) {
//                     arr.push(
//                         {
//                             value: await this.arrFinal[i], isPalindrome: true, isPrime: this.setIsPrime(this.arrFinal[i])
//                         }
//                     );
//             }
//         }
//         return arr;
//     }

//     setIsPrime(num){
//         for(let i = 2; i < num; i++){
//             if(num % i === 0) {
//                 return false;
//             }
//         }
//         return num > 1;
//     } 

//     async getDataPiAPI(url){
//         const response = await fetch(url);
//         const data = await response.json();
//         this.dataFromApiPi = data;
//         return data;
//     }

//     async handlerDataPiAPI(){
//         const data = await this.getDataPiAPI("https://api.pi.delivery/v1/pi?start="+this.startOfPi+"&numberOfDigits=1000");
//         if(data){
//             this.dataFromApiPi = await data;
//         }
    
//         this.startOfPi += 1000;
//         this.handlerDataPiAPI();

//         return data;

//     }
// }

// const palindrome = new PalindromePI();

// async function handlerDataPiAPI(){
//     const piApi = await palindrome.handlerDataPiAPI();

//     if(piApi){
//         const splitPi = await palindrome.splitPiInArr();
//         if(splitPi){
//             palindrome.firstNineValues = palindrome.firstNineValuesOfArr();
//             palindrome.fullArr = palindrome.createArrIteratingOneMoreValue();
//             palindrome.decreasingValuesArr = palindrome.createArrWithValuesDecreasing();
//             palindrome.arrFinal = palindrome.sliceToNineValuesInArr();

//             if(palindrome.getFirstPalindrome().length != 0){
//                 console.log(palindrome.getFirstPalindrome()[0]);
//                 handlerDataPiAPI();
//             }else{
//                 console.log("Nenhum Palindromo");
//                 handlerDataPiAPI();
//             }
//         }
//     }
// }
// handlerDataPiAPI();


// palindrome.splitPiInArr();
// palindrome.firstNineValues = palindrome.firstNineValuesOfArr();
// palindrome.fullArr = palindrome.createArrIteratingOneMoreValue();
// palindrome.decreasingValuesArr = palindrome.createArrWithValuesDecreasing();
// palindrome.arrFinal = palindrome.sliceToNineValuesInArr();

// if(palindrome.getFirstPalindrome.length != 0){
//     console.log(palindrome.getFirstPalindrome);
// }else{
//     console.log("Nenhum Palindromo");
// }

// 100 mil

// 398989893
// 020141020
// 365949563
// 559555955
// 469797964
// 131838131
// 023181320
// 166717661
// 769646967
// 037101730
// 068363860
// 972464279
// 314151413
// 636888636

/*
    Regra - de 5 mil em 5 mil(mais que isso ele cracha), e pegar os últimos 9 --> no total são 5009 nums
    Link do site para encontrar o PI: https://conversor-de-medidas.com/valor-de-pi/10000
*/



// let start = 1;

// async function setStart(){
//     const data = await getPiAPI("https://api.pi.delivery/v1/pi?start="+start+"&numberOfDigits=1000");
//     if(data.content){
//         const divAppend = document.getElementById("append");
//         const p = document.createElement('p');
//         const span = document.createElement('span');
//         span.innerHTML = 'Contador: '+ start;
//         p.innerHTML = 'Número de PI:' + data.content;
//         p.style.fontSize = 25;
//         divAppend.append(span);
//         divAppend.append(p);
//     }

//     start += 1000;
//     setStart(start);
// }

// async function getPiAPI(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// setStart();


// https://api.pi.delivery/v1/pi?start=100000&numberOfDigits=100&radix=10