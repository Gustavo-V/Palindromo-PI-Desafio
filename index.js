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
//         this.pi;
//         this.rangeOfPalindromeInPi = 9;
//         this.piArr;
//         this.fullArr;
//         this.decreasingValuesArr;
//         this.firstNineValues;
//         this.arrFinal = new Array();
//     }

//     formatedPI(pi) {
//         let piFormated = pi.toString();
//         if (piFormated.includes(".") === true) {
//             piFormated = piFormated.replace(".", ",");
//         }
//         piFormated = piFormated.slice(piFormated.lastIndexOf(",") + 1, piFormated.length);
//         this.pi = piFormated;
//         this.piArr = piFormated.split('');
//         return piFormated;
//     }

//     firstNineValuesOfArr() {
//         let str = '';
//         for (let i = 0; i < 9; i++) {
//             str += this.piArr[i];
//         }
//         return str;
//     }

//     createArrIteratingOneMoreValue() {
//         const arr = new Array();
//         for (let i = 0; i < this.piArr.length; i++) {
//             for (let j = i; j < this.piArr.length; j++) {
//                 arr.push({ value: this.piArr[j + 1], positionI: i, positionJ: j + 1});
//             }
//         }
//         return arr;
//     }

//     createArrWithValuesDecreasing() {
//         let Obj = { str: '', arr: new Array() };
//         for (let i = 0; i < this.fullArr.length; i++) {
//             for (let j = 0; j < this.piArr.length; j++) {
//                 if (j == this.fullArr[i].positionJ - 1) {
//                     if (this.fullArr[i].positionJ - this.fullArr[i].positionI == 1) {
//                         Obj.str += ' ';
//                     }
//                     Obj.str += this.fullArr[i].value;
//                 }
//             }
//         }

//         Obj.arr = Obj.str.split(' ');
//         Obj.arr.shift();

//         return Obj.arr;
//     }

//     sliceToNineValuesInArr() {
//         let arr = new Array();
//         this.decreasingValuesArr.forEach(element => {
//             arr.push(element.slice(0, this.rangeOfPalindromeInPi));
//         });
//         return arr;
//     }

//     get getFirstPalindrome() {
//         let arr = new Array();
//         let reverseValues = new Array();
//         this.arrFinal.unshift(this.firstNineValues);
//         for (let i = 0; i < this.arrFinal.length; i++) {
//             reverseValues.push([].map.call(this.arrFinal[i], function (target) { return target; }).reverse().join(''));
//             if (reverseValues[i] === this.arrFinal[i]) {
//                     arr.push(
//                         {
//                             value: this.arrFinal[i], isPalindrome: true, isPrime: this.setIsPrime(this.arrFinal[i])
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
// }

// const palindrome = new PalindromePI();
// palindrome.formatedPI("3,26753892195119117836587662528083690053249004597410947068772912328214304635337283519953648274325833119144459017809607782883583730111857543659958982724531925310588115026307542571493943024453931870179923608166611305426253995833897942971602070338767815033010280120095997252222280801423571094760351925544434929986767817891045559063015953809761875920358937341978962358931125983902598310267193304189215109689156225069659119828323455503059081730735195503721665870288053992138576037035377105178021280129566841984140362872725623214428754302210909472721073474134975514190737043318276626177275996888826027225247133683353452816692779591328861381766349857728936900965749562287103024362590772412219094300871755692625758065709912016659622436080242870024547362036394841255954881727272473653467783647201918303998717627037515724649922289467932322693619177641614618795613956699567783068290316589699430767333508234990790624100202506134057344300695745474682175690441651540636584680463692621274211075399042188716127617787014258864825775223889184599523376292377915585744549477361295525952226578636462118377598473700347971408206994145580719080213590732269233100831759510659019121294795408603640757358750205890208704579670007055262505811420663907459215273309406823649441590891009220296680523325266198911311842016291631076894084723564366808182168657219688268358402785500782804043453710183651096951782335743030504852653738073531074185917705610397395062640355442275156101107261779370634723804990666922161971194259120445084641746383589938239946517395509000859479990136026674261494290066467115067175422177038774507673563742154782905911012619157555870238957001405117822646989944917908301795475876760168094100135837613578591356924455647764464178667115391951357696104864922490083446715486383054477914330097680486878348184672733758436892724310447406807685278625585165092088263813233623148733336714764520450876627614950389949504809560460989604329123358348859990294526400284994280878624039811814884767301216754161106629995553668193123287425702063738352020086863691311733469731741219153633246745325630871347302792174956227014687325867891734558379964351358800959350877556356248810493852999007675135513527792412429277488565888566513247302514710210575352516511814850902750476845518252096331899068527614435138213662152368890578786699432288816028377482035506016029894009119713850179871683633744139275973644017007014763706655703504338121113576415018451821413619823495159601064752712575935185304332875537783057509567425442684712219618709178560783936144511383335649103256405733898667178123972237519316430617013859539474367843392670986712452211189690840236327411496601243483098929941738030588417166613073040067588380432111555379440605497721705942821514886165672771240903387727745629097110134885184374118695655449745736845218066982911045058004299887953899027804383596282409421860556287788428802127553884803728640019441614257499904272009595204654170598104989967504511936471172772220436102614079750809686975176600237187748348016120310234680567112644766123747627852190241202569943534716226660893675219833111813511146503854895025120655772636145473604426859498074396932331297127377157347099713952291182653485155587137336629120242714302503763269501350911612952993785864681307226486008270881333538193703682598867893321238327053297625857382790097826460545598555131836688844628265133798491667839409761353766251798258249663458771950124384040359140849209733754642474488176184070023569580177410177696925077814893386672557898564589851056891960924398841569280696983352240225634570497312245269354193837004843183357196516626721575524193401933099018319309196582920969656247667683659647019595754739345514337413708761517323677204227385674279170698204549953095918872434939524094441678998846319845504852393662972079777452814399418256789457795712552426826089940863317371538896262889629402112108884427376568624527612130371017300785135715404533041507959447776143597437803742436646973247138410492124314138903579092416036406314038149831481905251720937103964026808994832572297954564042701757722904173234796073618787889913318305843069394825961318713816423467218730845133877219086975104942843769325024981656673816260615941768252509993741672883951744066932549653403101452225316189009235376486378482881344209870048096227171226407489571939002918573307460104360729190945767994614929290427981687729426487729952858434647775386906950148984133924540394144680263625402118614317031251117577642829914644533408920976961699098372652361768745605894704968170136974909523072082682887890730190018253425805343421705928713931737993142410852647390948284596418093614138475831136130576108462366837237695913492615824516221552134879244145041756848064120636520170386330129532777699023118648020067556905682295016354931992305914246396217025329747573114094220180199368035026495636955866425906762685687372110339156793839895765565193177883000241613539562437777840801748819373095020699900890899328088397430367736595524891300156633294077907139615464534088791510300651321934486673248275907946807879819425019582622320395");
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