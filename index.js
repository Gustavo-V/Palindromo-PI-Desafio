class PalindromePI {
    constructor() {
        this.pi;
        this.rangeOfPalindromeInPi = 9;
        this.piArr;
        this.fullArr;
        this.decreasingValuesArr;
        this.firstValues;
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

    firstValuesOfArr() {
        let str = '';
        for (let i = 0; i < this.rangeOfPalindromeInPi; i++) {
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

    sliceValuesInArr() {
        let arr = new Array();
        this.decreasingValuesArr.forEach(element => {
            arr.push(element.slice(0, this.rangeOfPalindromeInPi));
        });
        return arr;
    }

    get getFirstPalindrome() {
        let arr = new Array();
        let reverseValues = new Array();
        this.arrFinal.unshift(this.firstValues);
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
let counter = 1000;

const palindrome = new PalindromePI();

function objectHandlerOfPalindromeClass(object, data){
    object.formatedPI(data.content.toString());
    object.firstValues = object.firstValuesOfArr();
    object.fullArr = object.createArrIteratingOneMoreValue();
    object.decreasingValuesArr = object.createArrWithValuesDecreasing();
    object.arrFinal = object.sliceValuesInArr();
}

function showResponseIfIsPrime(object){
    console.log(object.getFirstPalindrome[0]);
    console.log(counter);
    console.log("Achou!");
    const divAppend = document.getElementById("append-palindrome-prime");
    const p = document.createElement('p');
    p.innerHTML = `{value: ${object.getFirstPalindrome[0].value}, isPalindrome: ${object.getFirstPalindrome[0].isPalindrome}, isPrime: ${object.getFirstPalindrome[0].isPrime}`;
    divAppend.appendChild(p);
}

async function getDataOfPiAPI(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

let breakRecursion = false;

async function startVerification(){
    if(breakRecursion !== true){
        const data = await getDataOfPiAPI("https://api.pi.delivery/v1/pi?start="+start+"&numberOfDigits=1000");
        if(data.content){
            objectHandlerOfPalindromeClass(palindrome, data);
            if(palindrome.getFirstPalindrome.length != 0){
                if(palindrome.getFirstPalindrome[0].isPrime === true){
                    showResponseIfIsPrime(palindrome);
                    breakRecursion = true;
                }else{
                    console.log(palindrome.getFirstPalindrome[0]);
                    console.log(counter);
                }
            }else{
                console.log("Nenhum Palindromo");
            }

            // It´s just to be sure if don´t jump none number
            start += 1000 - (palindrome.rangeOfPalindromeInPi + 2);
            counter += 1000 - (palindrome.rangeOfPalindromeInPi + 2);
            startVerification(start);
        }
    }
}

startVerification();

/*
    Hello, I'm from Brazil and My name is Gustavo of company XD Software - follow me in my linkedin: https://www.linkedin.com/in/gustavo-henrique-valdo
    Nice to meet You!
*/

//  First palindrome prime range --> 129000 to 130000: 318272813