


let AM = [{"src":"https://d2w9rnfcy7mm78.cloudfront.net/21412961/original_41f862831e75c45903843ae5550a1ac8.png?1681665424?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21456987/original_7cb1d0f01dce23f005d142632a1e32fb.png?1681871645?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21456986/original_c4788a933a4dd64ae844085417279d4a.png?1681871642?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21456985/original_aa3cbecac75661c2c4d39fea238f0ccf.png?1681871640?bc=0"}];
let PM = [{"src": "https://d2w9rnfcy7mm78.cloudfront.net/21457035/original_6fc89ff7238de2297d7896f9ba9e0e2f.png?1681871913?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21457140/original_e03cdcc18d391d689162af4f6a833bb2.png?1681872445?bc=0"},];
// 0 off 1 on
let state = 0;
// ampm, 0am 1pm
let time = 0;


setTimeout(function () {

    document.querySelector('#overlay p:nth-of-type(1)').style.display = 'none';
    document.querySelector('#overlay p:nth-of-type(2)').style.display = 'block';
}, 2000);

setTimeout(function () {
    document.getElementById('overlay').classList.add('hidden');
}, 4000);

let container = document.querySelector('.container');
if (container) {

    container.addEventListener('click', function (event) {
        event.preventDefault();
        let pointer = document.querySelector('.pointer');
     
        if (pointer.style.animation) {
            return;
        }
        // on or off
        if (state === 0) {
            return;
        }
        pointer.style.animation = 'rotate 1s forwards';
        // no signal
        let noSignal = document.querySelector('.no-signal');
        noSignal.style.display = 'none';
        // signal
        let hasSignal = document.querySelector('.has-signal');
        hasSignal.style.display = 'block';
        
        random();
        
        setTimeout(function () {
            pointer.style.animation = '';
        }, 1000);
    });
}

let powerButton = document.querySelector('.power-button');
if (powerButton) {
    powerButton.addEventListener('click', function (event) {
        event.preventDefault();

        let screen = document.querySelector('.power-switch');
        if (screen.classList.contains('power-on')) {
            
            state = 0;
            screen.classList.remove('power-on');
            screen.classList.add('power-off');
        } else {
            state = 1;
            screen.classList.remove('power-off');
            screen.classList.add('power-on');
        }
    });
}

let sliderImg = document.getElementById("slider-img");
let currentImageIndex = 0;

function random() {
    let images = time === 0 ? AM : PM;
    // not repeat
    do {
        currentImageIndexTemp = Math.floor(Math.random() * images.length);
    } while (currentImageIndexTemp === currentImageIndex);
    currentImageIndex = currentImageIndexTemp;
    sliderImg.src = images[currentImageIndex].src;
    sliderImg.style.animation = "none";
    sliderImg.offsetHeight; 
    sliderImg.src = images[currentImageIndex].src;
    sliderImg.style.animation = "power-on 0.5s ease-in-out";
}


let knobOne = document.querySelector('.knob.one');
let knobTwo = document.querySelector('.knob.two');

knobOne.addEventListener('click', function () {
    knobOne.classList.add('active');
    knobTwo.classList.remove('active');
    time = 0;
});

knobTwo.addEventListener('click', function () {
    knobTwo.classList.add('active');
    knobOne.classList.remove('active');
    time = 1;
});