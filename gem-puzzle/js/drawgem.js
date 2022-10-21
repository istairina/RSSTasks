/*const BODY = document.body;
document.addEventListener("load", draw());

function draw() {
    
    let canvas = document.querySelector("#canvas");
        //if (canvas.getContext){
          let ctx = canvas.getContext('2d');
          ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 55, 50);

        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 55, 50);
        //}
    }
    */

    

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
        console.log(last);
        //alert("matrix " + last);
        return last;
      }

      //mainState = generateMatrix(4);

      function Game(context, cellSize, mainState){
        
        this.state = mainState;
        //alert("matrix " + this.state);
        this.color = "#fbec5d";
      
        this.context = context;
        this.cellSize = cellSize;
      
        this.clicks = 0;
      }

      Game.prototype.timer = function timer() {
        let timeout = setTimeout(timer, 1000);
        document.querySelector(".text-timer").innerHTML = timeout
      }
      
      
      Game.prototype.getClicks = function() {
        return this.clicks;
      };
      
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
      
      Game.prototype.draw = function(size) {
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            if (this.state[i][j] > 0) {
              this.cellView(
                j * this.cellSize, 
                i * this.cellSize
              );
              this.numView();
              this.context.fillText(
                this.state[i][j], 
                j * this.cellSize + this.cellSize / 2,
                i * this.cellSize + this.cellSize / 2
              );
            }
          }
        }
        //alert("after draw " + this.state);
      };
      
      Game.prototype.getNullCell = function(matrixSize){
        //alert("getNull " + matrixSize);
        for (let i = 0; i < matrixSize; i++){
          for (let j=0; j < matrixSize; j++){
            if(this.state[j][i] === 0){
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
          document.querySelector("#moves_textfield").innerHTML = this.clicks;
        }
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
      
      let matrixSize = 4;

      window.onload = function(){
        let canvas = document.getElementById("canvas");
        canvas.width  = 320;
        canvas.height = 320;
      
        let context = canvas.getContext("2d");
        context.fillStyle = "#003153";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        const mtrx_btn_3 = document.querySelector(".size3");
        const mtrx_btn_4 = document.querySelector(".size4");
        const mtrx_btn_5 = document.querySelector(".size5");
        const mtrx_btn_6 = document.querySelector(".size6");
        const mtrx_btn_7 = document.querySelector(".size7");
        const mtrx_btn_8 = document.querySelector(".size8");
        const shuffle = document.querySelector(".shuffle");

        
       // alert(matrixSize);
        let cellSize = canvas.width / matrixSize;

        mainMatrix = generateMatrix(matrixSize);

        let game = new Game(context, cellSize, mainMatrix);
        game.mix(300, matrixSize);
        game.draw(matrixSize);

        //game.timer();
        function newGame (matrixSize) {
          cellSize = canvas.width / matrixSize;
          mainMatrix = generateMatrix(matrixSize);
          //alert(matrixSize);
          game = new Game(context, cellSize, mainMatrix);
          game.mix(300, matrixSize);
            context.fillRect(0, 0, canvas.width, canvas.height);
            game.draw(matrixSize);
            onEvent(x, y);
        }

        //alert(mainSize);
        mtrx_btn_3.addEventListener('click', () => {
          matrixSize = mtrx_btn_3.value;
          newGame(matrixSize);
        });

        mtrx_btn_4.addEventListener('click', () => {
          matrixSize = mtrx_btn_4.value;
          newGame(matrixSize);
        });

        mtrx_btn_5.addEventListener('click', () => {
          matrixSize = mtrx_btn_5.value;
          newGame(matrixSize);
        });

        mtrx_btn_6.addEventListener('click', () => {
          matrixSize = mtrx_btn_6.value;
          newGame(matrixSize);
        });

        mtrx_btn_7.addEventListener('click', () => {
          matrixSize = mtrx_btn_7.value;
          newGame(matrixSize);
        });

        mtrx_btn_8.addEventListener('click', () => {
          matrixSize = mtrx_btn_8.value;
          newGame(matrixSize);
        });

        shuffle.addEventListener('click', () => {newGame(matrixSize)});
      
        
      
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
        //alert(matrixSize);
        function onEvent(x, y) { 
          game.move(x, y, matrixSize);
          context.fillRect(0, 0, canvas.width, canvas.height);
          game.draw(matrixSize);
          mainMatrix2 = generateMatrix(matrixSize);
          //alert("victory " + mainMatrix2);
          if (game.victory(mainMatrix2)) {
            game.move(x, y, matrixSize);
            
          context.fillRect(0, 0, canvas.width, canvas.height);
          game.draw(matrixSize);
            alert("Hooray! You solved the puzzle in ##:## and " + game.getClicks() + " moves!"); 
            //game.mix(300, matrixSize);
            //context.fillRect(0, 0, canvas.width, canvas.height);
            //game.draw(context, cellSize, matrixSize);
          }
        }

        
      }

      

      
      