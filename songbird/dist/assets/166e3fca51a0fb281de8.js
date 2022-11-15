import"./styles/index.scss";import{birdsData}from"./birds-data.js";const birdsPic=document.querySelector(".bird__pic"),birdsDesc=document.querySelector(".bird__description"),birdsName=document.querySelector(".bird__name"),levelsMenu=document.querySelector(".levels__menu"),textAnswers=document.querySelectorAll(".answers__item"),textAnswersBlock=document.querySelector(".answers__list"),scoreField=document.querySelector(".score");let birdsDataAnswers=[[],[],[],[],[],[]],score=0,scorePlus=10,scoreMinus=2;for(let e=0;e<6;e++)for(let r=0;r<6;r++)birdsDataAnswers[e].push(birdsData[e][r].name);function shuffle(e){for(let r=e.length-1;r>0;r--){let s=Math.floor(Math.random()*(r+1));[e[r],e[s]]=[e[s],e[r]]}}for(let e=0;e<6;e++)shuffle(birdsData[e]),shuffle(birdsDataAnswers[e]);let currentLevel=birdsData[0],currentLevelId=0,currentBird=currentLevel[0];function drawStage(){currentBird=currentLevel[0],birdsPic.innerHTML=`<img src="${currentBird.image}" alt="">`,birdsName.innerHTML=`${currentBird.name} | ${currentBird.species}`,birdsDesc.innerHTML=`${currentBird.description}`;for(let e=0;e<6;e++)textAnswers[e].innerHTML=birdsDataAnswers[currentLevelId][e],textAnswers[e].classList.remove("wrong"),textAnswers[e].classList.remove("right")}function scoreLevels(){switch(console.log("test "+currentLevelId),currentLevelId){case 0:scorePlus=10,scoreMinus=2;break;case 1:scorePlus=20,scoreMinus=6;break;case 2:scorePlus=30,scoreMinus=10;break;case 3:scorePlus=40,scoreMinus=15;break;case 4:scorePlus=50,scoreMinus=20;break;case 5:scorePlus=60,scoreMinus=30}console.log("scorePlus "+scorePlus)}drawStage(),levelsMenu.addEventListener("click",(e=>{for(let r=0;r<levelsMenu.childElementCount;r++)levelsMenu.children[r].classList.remove("active"),levelsMenu.children[r]==e.target&&(currentLevel=birdsData[r],currentLevelId=r,scoreLevels(),drawStage());e.path[0].classList.add("active"),console.log(e.target)})),textAnswersBlock.addEventListener("click",(e=>{e.target.classList.contains("right")||e.target.classList.contains("wrong")||(e.target.innerHTML==currentBird.name?(e.target.classList.add("right"),score+=scorePlus,birdsDesc.style="display: block",birdsName.innerHTML=`${currentBird.name} | ${currentBird.species}`):(e.target.classList.add("wrong"),score-=scoreMinus),scoreField.innerHTML=score)}));