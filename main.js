


let AM = [{"src":"https://d2w9rnfcy7mm78.cloudfront.net/21557105/original_599f11a168c54351eeb13132553c5c3e.png?1682485483?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557106/original_3ba10bd0dea3e51ba2a088e24c0bf89d.png?1682485485?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557107/original_96c51c3ef22576718436291d84de34f6.png?1682485486?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557122/original_b70c73b2c0cf6caee9b4cfd3c9216f18.png?1682485625?bc=0"}];
let PM = [{"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557112/original_833c9d3cc2adbb2b6340813cbc33a286.png?1682485517?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557114/original_a9745e1933dac2b69644b8e51b8c8a52.png?1682485518?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557070/original_8cd2b8e43551fcffa582f0afc10e6f36.png?1682485063?bc=0"},
    {"src": "https://d2w9rnfcy7mm78.cloudfront.net/21557071/original_2bc4316eabd216f5f345053403215385.png?1682485065?bc=0"},];
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

let slideButton = document.querySelector('.slide-button');
if (slideButton) {
  slideButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
    slideButton.classList.toggle('active');
  });
}