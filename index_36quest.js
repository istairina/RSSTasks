import './styles/index.scss';
import errSound from './audio/error.mp3';
import rigSound from './audio/right_answer.mp3';
import congrSound from './audio/congratulation.mp3';
import { birdsData } from './birds-data.js';






let helpMode = false;
const helpME = document.querySelector(".helpme");

helpME.addEventListener('click', () => {
    helpME.classList.toggle("help");
    if (helpMode) {
        helpMode = false;
        for (let i = 0; i < 6; i++) {
            textAnswers[i].classList.remove("help");
        }
    } else {
        helpMode = true;
        for (let i = 0; i < 6; i++) {
            if (textAnswers[i].innerHTML == currentBird['name']) {
                textAnswers[i].classList.add("help");
            }
        }
    }
})

function helpMeClean () {
    if (helpMode) {
        for (let i = 0; i < 6; i++) {
            //console.log(currentBird['name']);
            if (textAnswers[i].innerHTML == currentBird['name']) {
                textAnswers[i].classList.add("help");
            } else {
                textAnswers[i].classList.remove("help");
            }
        }
    }
}


const birdsPic = document.querySelector('.bird__pic');
const birdsPicInfo = document.querySelector('.bird__pic-info');
const birdsDesc = document.querySelector('.bird__description-info');
const birdsName = document.querySelector('.bird__name');
const birdsNameInfo = document.querySelector('.bird__name-info');
const levelsMenu = document.querySelector('.levels__menu');
const textAnswers = document.querySelectorAll('.answers__item');
const textAnswersBlock = document.querySelector('.answers__list');
const scoreField = document.querySelector('.score');
let btnNextAll = document.querySelectorAll(".btn-next");
//const btnNext = document.querySelector(".btn-next");
const gameInfo = document.querySelector(".game-info");
const birdTextInfo = document.querySelector(".bird__text-info");
const resultOut = document.querySelector(".congratulation__result");
const mainBlock = document.querySelector("main");
const congratBlock = document.querySelector("congratulation");
const btnCongratulate = document.querySelector(".congratulation__btn");
const birdPlay = document.querySelector(".bird__playback");
const birdPlayInfo = document.querySelector(".bird__playback-info");
const currDuration = document.querySelector(".timeline__curr-duration");
const totalDuration = document.querySelector(".timeline__duration");
const currDurationI = document.querySelector(".timeline__curr-duration-info");
const totalDurationI = document.querySelector(".timeline__duration-info");
const volumeSliderQ = document.querySelector(".player__range");
const volumeSliderI = document.querySelector(".player__range-info");
const volumeQ = document.querySelector(".volumeQ");
const volumeI = document.querySelector(".volumeI");
const startNewGame = document.querySelector(".to-start-new");
const contGame = document.querySelector(".to-continue");
const welcomeBlock = document.querySelector(".welcome");
const mainBtn = document.querySelector(".menu-main");
const gameBtn = document.querySelector(".menu-game");



startNewGame.addEventListener("click", ()=> {
    //let newURL = document.location.href
    document.location.assign(`${document.location.href}?newgame`);
});

if (window.location.search == '?newgame') {
    welcomeBlock.style = "display: none";
    mainBlock.style = "display: block";
    mainBtn.classList.remove("active");
    gameBtn.classList.add("active");
    history.pushState(null, '', 'index.html');
};

contGame.addEventListener("click", () => {
    welcomeBlock.style = "display: none";
    mainBlock.style = "display: block";
    mainBtn.classList.remove("active");
    gameBtn.classList.add("active");
});

mainBtn.addEventListener("click", () => {
    welcomeBlock.style = "display: flex";
    mainBlock.style = "display: none";
    mainBtn.classList.add("active");
    gameBtn.classList.remove("active");
    mainBlock.style = "display: none";
});

gameBtn.addEventListener("click", () => {
    gameBtn.classList.add("active");
    mainBtn.classList.remove("active");
    mainBlock.style = "display: block";
    welcomeBlock.style = "display: none";
});





//console.log(btnNextAll[0]);

//let num = 0;
let btnNext;

function findNextBtn () {
    /*btnNextAll = document.querySelectorAll(".btn-next");
    btnNextAll.forEach((elem) => {
        let k = window.getComputedStyle(elem).display;
        if (k == 'flex') {
           btnNext = btnNextAll[num];
           num = 0;
        } else {
            num++;
        }
    });*/

    if (document.documentElement.clientWidth <=700) {
        btnNext = btnNextAll[0];
    } else {
        btnNext = btnNextAll[1];
    }
}

findNextBtn();

window.addEventListener("resize", () => {

    findNextBtn();


})

let errorSound = new Audio(errSound);
let rightSound = new Audio(rigSound);
let congratSound = new Audio(congrSound);
const audioQ = new Audio();
const audioI = new Audio();
let isPlayQ = false;
let isPlayI = false;
let saveVolumeI;
let saveVolumeQ;


function playAudio(audio, pic, QI) {
    if (QI == 'I') {
        stopAllSounds();
        if (isPlayI) {
            isPlayI = false;
        } else {
            audio.play();
            pic.innerHTML = '<i class="material-icons">pause_circle_outline</i>';
            isPlayI = true;
            isPlayQ = false;
        }
    }

    if (QI == 'Q') {
        stopAllSounds();
        if (isPlayQ) {
            isPlayQ = false;
        } else {
            audio.play();
            pic.innerHTML = '<i class="material-icons">pause_circle_outline</i>';
            isPlayQ = true;
            isPlayI = false;
        }
    }

  }

  const timeline = document.querySelector(".timeline");
  const timelineInfo = document.querySelector(".timeline-info");

  timeline.addEventListener("click", e => {

    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audioQ.duration;
    audioQ.currentTime = timeToSeek;
  }, false);

  timelineInfo.addEventListener("click", e => {

    const timelineWidth = window.getComputedStyle(timelineInfo).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audioI.duration;
    audioI.currentTime = timeToSeek;
  }, false);

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    //if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(minutes).padStart(2, 0)}:${String(seconds % 60).padStart(2, 0)}`;
  }


  setInterval(() => {
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = audioQ.currentTime / audioQ.duration * 100 + "%";
    currDuration.innerHTML = getTimeCodeFromNum(audioQ.currentTime);
    //audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    //  audioQ.currentTime
    //);
  }, 500);

  setInterval(() => {
    const progressBarInfo = document.querySelector(".progress-info");
    progressBarInfo.style.width = audioI.currentTime / audioI.duration * 100 + "%";
    currDurationI.innerHTML = getTimeCodeFromNum(audioI.currentTime);
    //audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    //  audioQ.currentTime
    //);
  }, 500);

  audioQ.addEventListener(
    "loadeddata",
    () => {
      totalDuration.textContent = getTimeCodeFromNum(
        audioQ.duration
      );
      audioQ.volume = .5;
    },
    false
  );

  audioI.addEventListener(
    "loadeddata",
    () => {
        //console.log(audioI.duration);
      totalDurationI.textContent = getTimeCodeFromNum(
         audioI.duration
      );
      audioI.volume = .5;
    },
    false
  );

audioQ.addEventListener("ended", () => {
    audioQ.currentTime = 0;
    birdPlay.innerHTML = '<i class="material-icons">play_circle_outline</i>';
    isPlayQ = false;
});

audioI.addEventListener("ended", () => {
    audioI.currentTime = 0;
    birdPlayInfo.innerHTML = '<i class="material-icons">play_circle_outline</i>';
    isPlayI = false;
});

volumeSliderQ.addEventListener("input", function(){
    if (this.value == 0) {
        volumeQ.innerHTML = "volume_off_outline";
    } else {
        volumeQ.innerHTML = "volume_up_outline";
    }
    let valueQ = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #00bc8c 0%, #00bc8c ' + valueQ + '%, #fff ' + valueQ + '%, white 100%)';
     audioQ.volume = volumeSliderQ.value;
});

volumeSliderI.addEventListener("input", function(){
    if (this.value == 0) {
        volumeI.innerHTML = "volume_off_outline";
    } else {
        volumeI.innerHTML = "volume_up_outline";
    }
    let valueI = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #00bc8c 0%, #00bc8c ' + valueI + '%, #fff ' + valueI + '%, white 100%)';
    audioI.volume = volumeSliderI.value;
});

volumeQ.addEventListener("click", () => {

    if (volumeQ.innerHTML == 'volume_off_outline') {
        volumeQ.innerHTML = "volume_up_outline";
        volumeSliderQ.value = saveVolumeQ;
        audioQ.volume = saveVolumeQ;
        let valueQ = (volumeSliderQ.value - volumeSliderQ.min) / (volumeSliderQ.max - volumeSliderQ.min) * 100;
        volumeSliderQ.style.background = 'linear-gradient(to right, #00bc8c 0%, #00bc8c ' + valueQ + '%, #fff ' + valueQ + '%, white 100%)';
    } else {
        saveVolumeQ = volumeSliderQ.value;
        volumeQ.innerHTML = "volume_off_outline";
        volumeSliderQ.value = 0;
        audioQ.volume = 0;
        volumeSliderQ.style.background = 'white';
    }
})


volumeI.addEventListener("click", () => {

    if (volumeI.innerHTML == 'volume_off_outline') {
        volumeI.innerHTML = "volume_up_outline";
        volumeSliderI.value = saveVolumeI;
        audioI.volume = saveVolumeI;
        let valueI = (volumeSliderI.value - volumeSliderI.min) / (volumeSliderI.max - volumeSliderI.min) * 100;
        volumeSliderI.style.background = 'linear-gradient(to right, #00bc8c 0%, #00bc8c ' + valueI + '%, #fff ' + valueI + '%, white 100%)';
    } else {
        saveVolumeI = volumeSliderI.value;
        volumeI.innerHTML = "volume_off_outline";
        volumeSliderI.value = 0;
        audioI.volume = 0;
        volumeSliderI.style.background = 'white';
    }
})





  birdPlay.addEventListener('click', () => {
    playAudio(audioQ, birdPlay, "Q");
   // console.log("booleanQ  " + isPlayQ + " " + isPlayI);
  })

  birdPlayInfo.addEventListener('click', () => {
    playAudio(audioI, birdPlayInfo, "I");
    //console.log("booleanI  " + isPlayQ + " " + isPlayI);
  })



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
    //birdsPic.innerHTML = `<img src="${currentBird['image']}" alt="">`;
    birdsPic.innerHTML = "<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXRYIHJ9d1g7RHYEynt1ZSoWwkbP6np4mbA&usqp=CAU' class='imgQ' alt='unknown'>";
    //birdsName.innerHTML = `${currentBird['name']}`;
    birdsName.innerHTML = "***";
    audioQ.src = currentBird['audio'];
    audioQ.pause();
    audioQ.currentTime = 0;
    isPlayQ = false;
    btnNext.classList.add("inactive");
    btnNext.classList.remove("btn");
    //birdsDesc.innerHTML = `${currentBird['description']}`;
    //console.log(birdsDataAnswers[currentLevelId][0]);
    for (let i = 0; i < 6; i++) {
        //console.log(birdsDataAnswers[currentLevelId][i]);
        textAnswers[i].innerHTML = birdsDataAnswers[currentLevelId][i];
        if (textAnswers[i].innerHTML == currentBird['name'] && helpMode == true) {
            textAnswers[i].classList.add("help");
        }
        textAnswers[i].classList.remove("wrong");
        textAnswers[i].classList.remove("right");
    }
    finishRound = false;

    gameInfo.style = "display: block";
    birdTextInfo.style = "display: none";
    birdsPicInfo.style = "display: none";
    birdsNameInfo.style = "display: none";
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
    //birdsPicInfo.style = "display: flex";
    //birdTextInfo.style = "display: flex";
    birdsPicInfo.innerHTML = `<img src="${currentBirdInfo['image']}" class="img-info" alt="">`;
    birdsNameInfo.innerHTML = `${currentBirdInfo['name']} | ${currentBirdInfo['species']}`;
    birdsDesc.innerHTML = `${currentBirdInfo['description']}`;
    gameInfo.style = "display: none";
    birdTextInfo.style = "display: flex";
    birdsPicInfo.style = "display: flex";
    birdsNameInfo.style = "display: block";
    audioI.src = currentBirdInfo['audio'];
    audioI.pause();
    audioI.currentTime = 0;
    isPlayI = false;
    birdPlayInfo.innerHTML = '<i class="material-icons">play_circle_outline</i>';
}

//drawInfo('Козодой');



levelsMenu.addEventListener('click', (elem) => {

    if (!elem.target.classList.contains("inactive")) {
        gameInfo.style = "display: block";
        birdTextInfo.style = "display: none";
        birdsPicInfo.style = "display: none";
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
                helpMeClean();
            }
        }

        elem['path'][0].classList.add("active");
        //console.log(elem.target);
    }
});

function stopAllSounds () {
    let pausePic = '<i class="material-icons">play_circle_outline</i>'
    errorSound.pause();
    errorSound.currentTime = 0;
    rightSound.pause();
    rightSound.currentTime = 0;
    audioQ.pause();
    birdPlay.innerHTML = pausePic;
    audioI.pause();
    birdPlayInfo.innerHTML = pausePic;
}


textAnswersBlock.addEventListener('click', (elem) => {
    //console.log(elem.target.innerHTML);
    gameInfo.style = "display: none";
    contGame.style = "display: flex";
    drawInfo(elem.target.innerHTML);
    if (!(elem.target.classList.contains("right") || elem.target.classList.contains("wrong")) && finishRound == false) {
        if (elem.target.innerHTML == currentBird['name']) {
            stopAllSounds();
            elem.target.classList.remove("help");
            rightSound.play();
            birdsPic.innerHTML = `<img src="${currentBird['image']}" class="imgQ" alt="">`;
            elem.target.classList.add("right");
            if (resultBoolean[currentBlock][currentStage] != true) {
                score += scorePlus;
                scorePlus = 5;
            }
            resultBoolean[currentBlock][currentStage] = true;
            //console.log(resultBoolean);
            //birdsDesc.style = "display: block";
            birdsName.innerHTML = `${currentBird['name']}`;
            //birdsName.classList.remove("blur");
            //birdsPic.classList.remove("blur");
            finishRound = true;
            btnNext.classList.remove("inactive");
            btnNext.classList.add("btn");
            if (currentStage == 5) {
                if (currentBlock == 5) {
                    btnNext.innerHTML = "Завершить игру";
                    scoreField.innerHTML = score;
                } else {
                    btnNext.innerHTML = "Следующий блок";
                    levelsMenu.children[currentBlock + 1].classList.remove("inactive");
                    btnNext.classList.add("btn");
                }



            }

            //console.log(finishRound);
        } else {
            elem.target.classList.add("wrong");
            //errorSound.src = errSound;
            stopAllSounds();
            if (isPlayQ) {
                audioQ.play();
            }
            errorSound.play();
            if (resultBoolean[currentBlock][currentStage] != true) {
                scorePlus--;
            }
        }

    }
    scoreField.innerHTML = score;
})



function btnNextFunc () {
    if (finishRound == true) {
        if (currentStage == 5) {
            levelsMenu.children[currentBlock].classList.remove("active");
            //console.log((currentBlock == 5));
            if (currentBlock == 5) {
                mainBlock.style = "display: none";
                congratBlock.style = "display: block";
                if (score < 180) {
                    resultOut.innerHTML = `Вы прошли викторину и набрали ${score} из 180 возможных баллов`;

                } else {
                   // console.log("finish score " + score);
                    resultOut.innerHTML = `Вы прошли викторину и набрали максимальное число баллов.<br>Вы наверное орнитолог?`;
                    btnCongratulate.style = "display: none";
                    congratSound.play();

                }
            } else {
                currentBlock++;
            }

            //console.log(currentBlock);
            levelsMenu.children[currentBlock].classList.add("active");
            currentLevel = birdsData[currentBlock];
            currentLevelId = currentBlock;
            currentStage = 0;
            currentBird = currentLevel[currentStage];
            btnNext.innerHTML = "Следующее задание";
        } else {
            currentStage++;

        }
        drawStage();

    } else {
        alert("Для перехода к следующему заданию необходимо завершить текущее");
    }
}


btnNextAll[0].addEventListener("click", () => {
    btnNextFunc();
})

btnNextAll[1].addEventListener("click", () => {
    btnNextFunc();
})

btnCongratulate.addEventListener("click", () => {
    location.reload();
})


//console.log(birdsData[0][0]['name']);

console.log('Самооценка: 255 баллов.\nВыполенны все пункты кроме Extra scopе (нет локализации и нет галереи всех птиц).\n+5 баллов добавила за кнопку Help в футере - подсвечивает правильные ответы.');
