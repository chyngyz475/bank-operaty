let btn = document.getElementById("show");
let btn2 = document.getElementById("show2");
let btnTimerStart = document.querySelector("#modal-btn");
let timerSec = document.querySelector(".timer-sec");
let timeSec = 5;
let timerMseck = document.querySelector("#timer-mSeck");
let time_millSeck = 59;
let telnumber = document.querySelector("#telNumber");

btn.addEventListener("click", function () {
    document.querySelector("#modal-box").style.display = "flex";
});
btn2.addEventListener("click", function () {
    document.querySelector("#modal-box").style.display = "none";
});

timerSec.innerText = timeSec;
timerMseck.innerText = time_millSeck;
let intervalIdseck;
let intervalIdMinSeck;

let timeBackSeck = () => {

    if (timeSec <= -1) {
        clearInterval(intervalIdseck)
    } else {
        timerSec.innerText = timeSec
    }
    ;
    timeSec--;
};
let timeBackMilSeck = () => {
    if (timeSec <= -1) {


        time_millSeck = 0;
        clearInterval(intervalIdMinSeck);
        console.log("lol")
    }
    if (time_millSeck <= -1) {
        time_millSeck = 59;
        intervalIdMinSeck = setInterval(timeBackMilSeck, 10)
    } else {
        timerMseck.innerText = time_millSeck
    }
    time_millSeck--;
};
let startTime = () => {
    if (telnumber.value === ''){
        alert("Запишите свой номер!")
    }else {
        intervalIdseck = setInterval(timeBackSeck, 1000);
        setInterval(timeBackMilSeck, 10);
    }

};


btnTimerStart.addEventListener("click", startTime);


//калькулятор
let input_summa = document.querySelector(".range-input1");
let value_summ = document.querySelector("#creditValue");
let input_srok = document.querySelector("#range-input2");
let value_srok = document.querySelector("#creditValue2");
let summa = 1000;
let srok = 1;
const stavka = 3;
let payment = platezh(summa, stavka, srok)
let vozvrat = document.querySelector("#all_sum");
let your_credit;
input_summa.oninput = function(){
    summa = this.value;
    value_summ.innerText = summa;
    payment = platezh(summa, stavka, srok);
     vozvrat.innerText = payment;
};

input_srok.oninput = function(){
    srok = this.value;
    value_srok.innerText =srok;
    payment = platezh(summa, stavka, srok);
    vozvrat.innerText = payment;
};

function platezh(summa, stavka = 3, srok){
    stavka /= 100;
    let a = Math.pow(1+stavka, srok);
    let b = summa * stavka * a / (a - 1);
    let result = parseFloat(b.toFixed(0)) * srok;
    return result;
}

// localStorage
document.querySelector("#button_1").onclick = function () {
    addStorage(summa,srok,payment);

}


function addStorage(summa,srok,payment){
    your_credit = {
        your_summa : summa,
        your_srok : srok,
        your_payment : payment
    };
    let serialObj = JSON.stringify(your_credit)
    localStorage.setItem("your_credit", serialObj)

    //принимает
    //сохраняет object
}


