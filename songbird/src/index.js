import './styles/index.scss';
import { birdsData } from './birds-data.js';

const birdsPic = document.querySelector('.bird__pic');
const birdsDesc = document.querySelector('.bird__description');
const birdsName = document.querySelector('.bird__name');
const levelsMenu = document.querySelector('.levels__menu');
const textAnswers = document.querySelectorAll('.answers__item');
const textAnswersBlock = document.querySelector('.answers__list');
const scoreField = document.querySelector('.score');


let birdsDataAnswers = [[],[],[],[],[],[]];
let score = 0;
let scorePlus = 10;
let scoreMinus = 2;

for (let i = 0; i < 6; i++) {
    for (let k = 0; k < 6; k++) {

        birdsDataAnswers[i].push(birdsData[i][k]['name']);
    }
}

//console.log(textAnswers[0]);



//console.log(allLevelsItems);

function shuffle (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

for (let i = 0; i < 6; i++) {
    shuffle(birdsData[i]);
    shuffle(birdsDataAnswers[i]);
}

let currentLevel = birdsData[0];
let currentLevelId = 0;
let currentBird = currentLevel[0];


function drawStage () {
    //shuffle(currentLevel);
    currentBird = currentLevel[0];
    birdsPic.innerHTML = `<img src="${currentBird['image']}" alt="">`;
    birdsName.innerHTML = `${currentBird['name']} | ${currentBird['species']}`;
    birdsDesc.innerHTML = `${currentBird['description']}`;
    for (let i = 0; i < 6; i++) {
        textAnswers[i].innerHTML = birdsDataAnswers[currentLevelId][i];
        textAnswers[i].classList.remove("wrong");
        textAnswers[i].classList.remove("right");
    }
}

function scoreLevels () {
    console.log("test " + currentLevelId);
    switch (currentLevelId) {
        case 0: scorePlus = 10; scoreMinus = 2; break;
        case 1: scorePlus = 20; scoreMinus = 6; break;
        case 2: scorePlus = 30; scoreMinus = 10; break;
        case 3: scorePlus = 40; scoreMinus = 15; break;
        case 4: scorePlus = 50; scoreMinus = 20; break;
        case 5: scorePlus = 60; scoreMinus = 30; break;
    }
    console.log("scorePlus " + scorePlus);
}


drawStage();


levelsMenu.addEventListener('click', (elem) => {
    //console.log(allLevelsItems.children[0]);
    for (let i = 0; i < levelsMenu.childElementCount; i++) {
        levelsMenu.children[i].classList.remove("active");
        if (levelsMenu.children[i] == elem.target) {
            currentLevel = birdsData[i];
            currentLevelId = i;
            scoreLevels();
            drawStage();
        }
    }

    elem['path'][0].classList.add("active");
    console.log(elem.target);
});


textAnswersBlock.addEventListener('click', (elem) => {
    //console.log(elem.target.innerHTML);
    if (!(elem.target.classList.contains("right") || elem.target.classList.contains("wrong"))) {
        if (elem.target.innerHTML == currentBird['name']) {
            //console.log("yes!");
            elem.target.classList.add("right");
            score += scorePlus;
            birdsDesc.style = "display: block";
            birdsName.innerHTML = `${currentBird['name']} | ${currentBird['species']}`;
        } else {
            elem.target.classList.add("wrong");
            score -= scoreMinus;
        }
        scoreField.innerHTML = score;
    }
})


//console.log(birdsData[0][0]['name']);


