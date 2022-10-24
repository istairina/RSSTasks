    function getRandomBool() {
        if (Math.floor(Math.random() * 2) === 0) {
          return true;
        }
      }
      
    function generateMatrix (size) {
      let last = [];
      let count = 1;
      //alert("size " + size);
      for (let i = 0; i < size; i++) {
        last[i] = [];
        for (let j = 0; j < size; j++) {
          last[i].push(count);
          count++;
        }
      }
      last[size-1][size-1] = 0;
      //console.log(last);
      //alert("matrix " + last);
      return last;
    }
    

    function Game(context, cellSize, mainState){
        
      this.state = mainState;
      //alert("matrix " + this.state);
      this.color = "#fbec5d";
    
      this.context = context;
      this.cellSize = cellSize;
    
      this.clicks = 0;
      this.tileSound = new Audio();
    }

    
    Game.prototype.getClicks = function() {
        return this.clicks;
    };
      
    Game.prototype.getSound = function() {
        return this.tileSound;
    }


    Game.prototype.cellView = function(x, y) {
      this.context.fillStyle = this.color;
      this.context.fillRect(
        x + 1, 
        y + 1, 
        this.cellSize - 2, 
        this.cellSize - 2
      );
    };
      
    Game.prototype.numView = function() {
      this.context.font = "bold " + (this.cellSize/2) + "px Roboto";
      this.context.textAlign = "center";
      this.context.textBaseline = "middle";
      this.context.fillStyle = "#003153";
    };
      
    Game.prototype.draw = function(size, thisState = this.state) {
      this.state = thisState;
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          if (thisState[i][j] > 0) {
            this.cellView(
              j * this.cellSize, 
              i * this.cellSize
            );
            this.numView();
            this.context.fillText(
              thisState[i][j], 
              j * this.cellSize + this.cellSize / 2,
              i * this.cellSize + this.cellSize / 2
            );
          }
        }
      } 
    };
      
    Game.prototype.getNullCell = function(matrixSize, thisState = this.state){
      console.log("NullCell " + thisState);
      for (let i = 0; i < matrixSize; i++){
        for (let j = 0; j < matrixSize; j++){
          if(thisState[j][i] == 0){
            console.log("ij " + i + " ", j);
            return {x: i, y: j};
          }
        }
      }
    };
      
    Game.prototype.move = function(x, y, matrixSize) {
      let nullCell = this.getNullCell(matrixSize);
      //alert("move " + matrixSize);
      let canMoveVertical = (x - 1 == nullCell.x || x + 1 == nullCell.x) && y == nullCell.y;
      let canMoveHorizontal = (y - 1 == nullCell.y || y + 1 == nullCell.y) && x == nullCell.x;
    
      if (canMoveVertical || canMoveHorizontal) {
        this.state[nullCell.y][nullCell.x] = this.state[y][x];
        this.state[y][x] = 0;
        this.clicks++;
        //console.log("move now");
        this.tileSound.pause(); 
        this.tileSound.currentTime = 0;
        this.tileSound.play(); 
        document.querySelector("#moves_textfield").innerHTML = this.clicks;
      }
      //console.log("state " + this.state);
    };
        
    Game.prototype.victory = function(matrix) {
      let combination = matrix;
      let res = true;
      for (let i = 0; i < combination.length; i++) {
        for (let j = 0; j < combination.length; j++) {
         if (combination[i][j] != this.state[i][j]) {
            res = false;
            break;
          }
        }
      }
      return res;
    };
      
    Game.prototype.mix = function(count, matrixSize) {
      let x, y;
      for (let i = 0; i < count; i++) {
        let nullCell = this.getNullCell(matrixSize);
    
        let verticalMove = getRandomBool();
        let upLeft = getRandomBool();
    
        if (verticalMove) {
          x = nullCell.x; 
          if (upLeft) {
            y = nullCell.y - 1;
          } else {
            y = nullCell.y + 1;
          }
        } else {
          y = nullCell.y; 
          if (upLeft) {
            x = nullCell.x - 1;
          } else {
            x = nullCell.x + 1;
          }
        }
    
        if (0 <= x && x < matrixSize && 0 <= y && y < matrixSize) {
          this.move(x, y, matrixSize);
        }

      }
      
    
      this.clicks = 0;
      document.querySelector("#moves_textfield").innerHTML = this.clicks;
    };
      
    Game.prototype.mixLoad = function(matrixSize, arrState) {

      let x, y;
      for (let i = 0; i < matrixSize; i++) {
        let nullCell = this.getNullCell(matrixSize, arrState);

        x = nullCell.x; 
        y = nullCell.y - 1;
        y = nullCell.y + 1;

        y = nullCell.y; 
        x = nullCell.x - 1;
        x = nullCell.x + 1;

        }
    
        /*if (0 <= x && x < matrixSize && 0 <= y && y < matrixSize) {
          this.move(x, y, matrixSize);
        }*/
    
      this.clicks = localStorage.getItem("saveClicks");
      document.querySelector("#moves_textfield").innerHTML = this.clicks;
    };



      let matrixSize = 4;

    Game.prototype.saveGame = function (seconds, minutes) {
      console.log("saved " + this.state[0]);
      //let saveData = this.state.join(",");
      let tempArr = this.state;
      let tempStr = tempArr.join(",");

      localStorage.setItem("savedGame", tempStr);
      localStorage.setItem("saveClicks", this.clicks);

      
    }

    Game.prototype.loadGame = function(context) {
      
      let stateString = localStorage.getItem("savedGame");
      let stateStringArr = stateString.split(",");
      let arrState = [];
      let m = 0;

      for (let u = 0; u < 4; u++) {
        arrState[u] = [];
        for (let k = 0; k < 4; k++) {
          arrState[u].push(stateStringArr[m]);
           m++;
        }
      }
          
      this.state = arrState;
      context.fillRect(0, 0, canvas.width, canvas.height);
      this.draw(4, arrState);
      onEvent(x, y);
    }

      /*function getLocalStorage() {
        if(localStorage.getItem('name')) {
          
        }
      }
      window.addEventListener('load', getLocalStorage);*/


      window.onload = function(){
        let canvas = document.getElementById("canvas");
        let canvasWidth = 310;
               
        canvas.width = canvasWidth;
        canvas.height = canvas.width;
      
        let context = canvas.getContext("2d");
        context.fillStyle = "#003153";
        context.fillRect(0, 0, canvas.width, canvas.height);

        const timerSec = document.querySelector(".seconds");
        const timerMin = document.querySelector(".minutes");
      
      let seconds = 01;
      let minutes = 00;

      function timer() {
        function checkZero (timeget) {
        if (timeget < 10) {
          return ("0" + timeget);
        } else {
          return timeget;
        }
      }
         
        if (seconds == 60) {
          seconds = 00;
          //console.log("test");
          timerMin.innerHTML = checkZero(minutes++);
         }
         timerSec.innerHTML = checkZero(seconds);
         seconds++;
      }

      if (minutes > 60) {
        timerMin.innerHTML = "XX";
      }
        
      let timeInter = setInterval(timer, 1000);
        
        const mtrx_btn_3 = document.querySelector(".size3");
        const mtrx_btn_4 = document.querySelector(".size4");
        const mtrx_btn_5 = document.querySelector(".size5");
        const mtrx_btn_6 = document.querySelector(".size6");
        const mtrx_btn_7 = document.querySelector(".size7");
        const mtrx_btn_8 = document.querySelector(".size8");
        const shuffle = document.querySelector(".shuffle");
        const currentFrame = document.querySelector(".currentFrameSize");
        const sounds = document.querySelector(".audio");
        const audioPic = document.querySelector(".audiopic");
        const btnSave = document.querySelector(".save");
        const btnLoad = document.querySelector(".load");
        
        let cellSize = canvas.width / matrixSize;

        mainMatrix = generateMatrix(matrixSize);

        let game = new Game(context, cellSize, mainMatrix);
        game.mix(300, matrixSize);
        game.draw(matrixSize);

        
        function newGame (matrixSize) {
          cellSize = canvas.width / matrixSize;
          mainMatrix = generateMatrix(matrixSize);
          game = new Game(context, cellSize, mainMatrix);
          game.mix(300, matrixSize);
            context.fillRect(0, 0, canvas.width, canvas.height);
            game.draw(matrixSize);
            onEvent(x, y);
            
        }

        

        function stopTimeClear () {
          clearInterval(timeInter);
            seconds = 01;
            minutes = 00;
            timerMin.innerHTML = '00';
            timerSec.innerHTML = '00';

          timeInter = setInterval(timer, 1000);
        }

        mtrx_btn_3.addEventListener('click', () => {
          matrixSize = mtrx_btn_3.value;
          currentFrame.innerHTML = '3 x 3';
          stopTimeClear();
          newGame(matrixSize);
          
        });

        mtrx_btn_4.addEventListener('click', () => {
          matrixSize = mtrx_btn_4.value;
          currentFrame.innerHTML = '4 x 4';
          stopTimeClear();
          newGame(matrixSize);
        });

        mtrx_btn_5.addEventListener('click', () => {
          matrixSize = mtrx_btn_5.value;
          currentFrame.innerHTML = '5 x 5';
          stopTimeClear();
          newGame(matrixSize);
        });

        mtrx_btn_6.addEventListener('click', () => {
          matrixSize = mtrx_btn_6.value;
          currentFrame.innerHTML = '6 x 6';
          stopTimeClear();
          newGame(matrixSize);
        });

        mtrx_btn_7.addEventListener('click', () => {
          matrixSize = mtrx_btn_7.value;
          currentFrame.innerHTML = '7 x 7';
          stopTimeClear();
          newGame(matrixSize);
        });

        mtrx_btn_8.addEventListener('click', () => {
          matrixSize = mtrx_btn_8.value;
          currentFrame.innerHTML = '8 x 8';
          stopTimeClear();
          newGame(matrixSize);
        });


        


        shuffle.addEventListener('click', () => {stopTimeClear(); newGame(matrixSize)});

        sounds.addEventListener('click', () => {
          
          let tempSound = game.getSound();
          //console.log(tempSound.src);
          if (audioPic.alt == "Mute") {
            tempSound.pause();
            tempSound.currentTime = 0;
            tempSound.src = "src/sound.wav";
            audioPic.src = "src/audio.png";
            audioPic.alt = "Sound On";
          } else {
            tempSound.src = "";
            audioPic.src = "src/mute.png";
            audioPic.alt = "Mute";
          }
          
        });
      
        
      
        canvas.onclick = function(e) {
          let x = (e.pageX - canvas.offsetLeft) / cellSize | 0;
          let y = (e.pageY - canvas.offsetTop)  / cellSize | 0;
          onEvent(x, y); 
        };
      
        canvas.ontouchend = function(e) {
          let x = (e.touches[0].pageX - canvas.offsetLeft) / cellSize | 0;
          let y = (e.touches[0].pageY - canvas.offsetTop)  / cellSize | 0;
      
          onEvent(x, y);
        };  
        
        

        function onEvent(x, y) { 
          
          game.move(x, y, matrixSize);
          context.fillRect(0, 0, canvas.width, canvas.height);
          game.draw(matrixSize);
          mainMatrix2 = generateMatrix(matrixSize);
         
          if (game.victory(mainMatrix2)) {
            game.move(x, y, matrixSize);
            
          context.fillRect(0, 0, canvas.width, canvas.height);
          game.draw(matrixSize);
          
            alert(`Hooray! You solved the puzzle in ${minutes}:${seconds} and ${game.getClicks()} moves!`); 
            //timerMin.innerHTML = minutes;
            timerSec.innerHTML = seconds;
            clearInterval(timeInter);

          }
        }

        btnSave.addEventListener('click', () => {
          game.saveGame(seconds, minutes);
          localStorage.setItem("savedSec", seconds);
          localStorage.setItem("savedMin", minutes);
        });



        function newGameLoad (matrixSize, arrState) {
          cellSize = canvas.width / matrixSize;
          mainMatrix = arrState;
          game.state = arrState;
          game = new Game(context, cellSize, mainMatrix);

          game.mixLoad(matrixSize);
            context.fillRect(0, 0, canvas.width, canvas.height);
            game.draw(matrixSize, arrState);
            onEvent(x, y);
            
        }

        btnLoad.addEventListener('click', () => {
          let stateString = localStorage.getItem("savedGame");
      let stateStringArr = stateString.split(",");
      let arrState = [];
      let m = 0;

      for (let u = 0; u < 4; u++) {
        arrState[u] = [];
        for (let k = 0; k < 4; k++) {
          console.log("push " + stateStringArr[m]);
          arrState[u].push(stateStringArr[m]);
           m++;
        }
      }
      this.state = arrState; 

      seconds = localStorage.getItem("savedSec");
      minutes = localStorage.getItem("savedMin");
      if (seconds < 10) {
        timerSec.innerHTML = '0' + seconds;
      } else timerSec.innerHTML = seconds;;
      if (minutes < 10) {
        timerMin.innerHTML = '0' + minutes;
      } else timerMin.innerHTML = minutes;
      


      cellSize = canvas.width / matrixSize;
          mainMatrix = arrState;
          game.state = arrState;
          game.mixLoad(matrixSize, arrState);
            context.fillRect(0, 0, canvas.width, canvas.height);
            game.draw(matrixSize, arrState);
            onEvent(x, y);
         }
        );

        
      }

      

      
      