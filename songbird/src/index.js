import './styles/index.scss';
import { birdsData } from './birds-data.js';

const birdsPic = document.querySelector('.bird__pic');
const birdsPicInfo = document.querySelector('.bird__pic-info');
const birdsDesc = document.querySelector('.bird__description-info');
const birdsName = document.querySelector('.bird__name');
const birdsNameInfo = document.querySelector('.bird__name-info');
const levelsMenu = document.querySelector('.levels__menu');
const textAnswers = document.querySelectorAll('.answers__item');
const textAnswersBlock = document.querySelector('.answers__list');
const scoreField = document.querySelector('.score');
const btnNext = document.querySelector(".btn-next");
const gameInfo = document.querySelector(".game-info");

let wrongSound = new Audio("../src/audio/wrong_answer.mp3");


let birdsDataAnswers = [[],[],[],[],[],[]];
let score = 0;
let scorePlus = 5;
let finishRound = false;
let resultBoolean = [];

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

for (let i = 0; i < 6; i++) {
    resultBoolean.push([]);
    for (let k = 0; k < 6; k++) {
        resultBoolean[i].push(false);
    }
}

//console.log(resultBoolean);


let currentBlock = 0;
let currentLevel = birdsData[currentBlock];
let currentLevelId = 0;
let currentStage = 0;
let currentBird = currentLevel[currentStage];


function drawStage () {
    //shuffle(currentLevel);
    currentBird = currentLevel[currentStage];
    birdsPic.innerHTML = `<img src="${currentBird['image']}" alt="">`;
    birdsName.innerHTML = `${currentBird['name']} | ${currentBird['species']}`;
    btnNext.classList.add("inactive");
    //birdsDesc.innerHTML = `${currentBird['description']}`;
    //console.log(birdsDataAnswers[currentLevelId][0]);
    for (let i = 0; i < 6; i++) {
        //console.log(birdsDataAnswers[currentLevelId][i]);
        textAnswers[i].innerHTML = birdsDataAnswers[currentLevelId][i];
        textAnswers[i].classList.remove("wrong");
        textAnswers[i].classList.remove("right");
    }
    finishRound = false;
    birdsName.classList.add("blur");
    birdsPic.classList.add("blur");
}

drawStage();

//console.log("test " + currentLevel[0]['name']);

function drawInfo (nameBird) {
    let currentBirdInfo;
    for (let i = 0; i < 6; i++) {
        if (currentLevel[i]['name'] == nameBird) {
            currentBirdInfo = currentLevel[i];
        }
    }

    birdsPicInfo.innerHTML = `<img src="${currentBirdInfo['image']}" alt="">`;
    birdsNameInfo.innerHTML = `${currentBirdInfo['name']} | ${currentBirdInfo['species']}`;
    birdsDesc.innerHTML = `${currentBirdInfo['description']}`;
}

//drawInfo('Козодой');



levelsMenu.addEventListener('click', (elem) => {
    //console.log(allLevelsItems.children[0]);
    for (let i = 0; i < levelsMenu.childElementCount; i++) {
        levelsMenu.children[i].classList.remove("active");
        if (levelsMenu.children[i] == elem.target) {
            currentLevel = birdsData[i];
            currentLevelId = i;
            currentBlock = i;
            currentStage = 0;
            //scoreLevels();
            drawStage();
        }
    }

    elem['path'][0].classList.add("active");
    console.log(elem.target);
});


textAnswersBlock.addEventListener('click', (elem) => {
    //console.log(elem.target.innerHTML);
    gameInfo.style = "display: none";
    drawInfo(elem.target.innerHTML);
    if (!(elem.target.classList.contains("right") || elem.target.classList.contains("wrong")) && finishRound == false) {
        if (elem.target.innerHTML == currentBird['name']) {

            elem.target.classList.add("right");
            if (resultBoolean[currentBlock][currentStage] != true) {
                score += scorePlus;
                scorePlus = 5;
            }
            resultBoolean[currentBlock][currentStage] = true;
            console.log(resultBoolean);
            //birdsDesc.style = "display: block";
            birdsName.innerHTML = `${currentBird['name']} | ${currentBird['species']}`;
            birdsName.classList.remove("blur");
            birdsPic.classList.remove("blur");
            finishRound = true;
            btnNext.classList.remove("inactive");
            if (currentStage == 5) {
                btnNext.innerHTML = "Next Block";
            }
            //console.log(finishRound);
        } else {
            elem.target.classList.add("wrong");
            wrongSound.play();
            if (resultBoolean[currentBlock][currentStage] != true) {
                scorePlus--;
            }
        }
        scoreField.innerHTML = score;
    }
})

btnNext.addEventListener("click", () => {
    if (finishRound == true) {
        if (currentStage == 5) {
            levelsMenu.children[currentBlock].classList.remove("active");
            console.log((currentBlock == 5));
            if (currentBlock == 5) {
                currentBlock = 0;
            } else {
                currentBlock++;
            }

            console.log(currentBlock);
            levelsMenu.children[currentBlock].classList.add("active");
            currentLevel = birdsData[currentBlock];
            currentLevelId = currentBlock;
            currentStage = 0;
            currentBird = currentLevel[currentStage];
            btnNext.innerHTML = "Next Level";
        } else {
            currentStage++;

        }
        drawStage();

    } else {
        alert("Для перехода к следующему раунду необходимо завершить текущий");
    }
})


//console.log(birdsData[0][0]['name']);


