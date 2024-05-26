let plusIconFirst = document.getElementById('image-first');
let plusIconSecond = document.getElementById('image-second');
let plusIconThird = document.getElementById('image-third');
let plusIconFourth = document.getElementById('image-fourth');

let firstDiv = document.getElementById('first-answer');
let secondDiv = document.getElementById('second-answer');
let thirdDiv = document.getElementById('third-answer');
let fourthDiv = document.getElementById('fourth-answer');

let firstQuestion = document.getElementById('first');
let secondQuestion = document.getElementById('second');
let thirdQuestion = document.getElementById('third');
let fourthQuestion = document.getElementById('fourth');

firstQuestion.addEventListener('click', () => {
    if (plusIconFirst.src.match('icon-plus')) {
        plusIconFirst.src = './resources/images/icon-minus.svg';
        firstDiv.style.display = 'block';
    } else {
        plusIconFirst.src = './resources/images/icon-plus.svg';
        firstDiv.style.display = 'none';
    }    
});

secondQuestion.addEventListener('click', () => {
    if (plusIconSecond.src.match('icon-plus')) {
        plusIconSecond.src = './resources/images/icon-minus.svg';
        secondDiv.style.display = 'block';
    } else {
        plusIconSecond.src = './resources/images/icon-plus.svg';
        secondDiv.style.display = 'none';
    }    
});

thirdQuestion.addEventListener('click', () => {
    if (plusIconThird.src.match('icon-plus')) {
        plusIconThird.src = './resources/images/icon-minus.svg';
        thirdDiv.style.display = 'block';
    } else {
        plusIconThird.src = './resources/images/icon-plus.svg';
        thirdDiv.style.display = 'none';
    }    
});

fourthQuestion.addEventListener('click', () => {
    if (plusIconFourth.src.match('icon-plus')) {
        plusIconFourth.src = './resources/images/icon-minus.svg';
        fourthDiv.style.display = 'block';
    } else {
        plusIconFourth.src = './resources/images/icon-plus.svg';
        fourthDiv.style.display = 'none';
    }    
});