class PalindromePI{
    constructor(){
        this.pi;
        this.rangeOfPalindromeInPi = 9;
        this.piArr;
        this.fullArr;
        this.decreasingValuesArr;
        this.firstNineValues;
    }

    formatedPI(pi){
        let piFormated = pi.toString();
        if(piFormated.includes(".") === true){
            piFormated = piFormated.replace(".",",");
        }
        piFormated = piFormated.slice(piFormated.lastIndexOf(",") + 1 , piFormated.length);
        this.pi = piFormated;
        this.piArr = piFormated.split('');
        return piFormated;
    }

    firstNineValuesOfArr(){
        let str = '';
        for(let i = 0; i < 9; i++){
            str += this.piArr[i];
        }

        this.firstNineValues = str;
        return str;
    }

    createArrIteratingOneMoreValue(){
        const arr = [];
        for(let i = 0; i < this.piArr.length; i++){
            if(i >= 8){
                for(let j = i + 1; j < this.piArr.length; j++){
                    arr.push({value: this.piArr[j], positionI: i, positionJ: j});
                }
            }
        }
        this.fullArr = arr;
        return arr;
    }

    createArrWithValuesDecreasing(){
        let Obj = {str: '', arr: [] };
        for(let i = 0; i < this.fullArr.length; i++){
            for(let j = 0; j < this.piArr.length; j++){
                if(j == this.fullArr[i].positionJ - 1){
                    if(this.fullArr[i].positionJ - this.fullArr[i].positionI == 1){
                        Obj.str += ' ';
                    }
                    Obj.str += this.fullArr[i].value;
                }
            }
        }   

        Obj.arr = Obj.str.split(' ');
        Obj.arr.shift();

        this.decreasingValuesArr = Obj.arr;
        return Obj.arr;
    }
}

const palindrome = new PalindromePI();
palindrome.formatedPI("3,8888888888888888888888888888888888888888888889999999999999000000000000000");
palindrome.firstNineValuesOfArr();
palindrome.createArrIteratingOneMoreValue();
palindrome.createArrWithValuesDecreasing();

palindrome.decreasingValuesArr.forEach(el =>{
    console.log(el);
});

console.log(palindrome.firstNineValues);