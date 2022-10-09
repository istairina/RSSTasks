const BTN_LEFT = document.querySelector('#btn-left');
const BTN_RIGHT = document.querySelector('#btn-right');

const CAROUSEL = document.querySelector('#carousel');

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);

BTN_RIGHT.addEventListener("click", moveRight);

let Items1 = document.querySelector("#carousel > div:nth-child(1)").innerHTML;
let Items2 = document.querySelector("#carousel > div:nth-child(2)").innerHTML;
let Items3 = document.querySelector("#carousel > div:nth-child(3)").innerHTML;
let Items4 = document.querySelector("#carousel > div:nth-child(4)").innerHTML;
let Items5 = document.querySelector("#carousel > div:nth-child(5)").innerHTML;
let Items6 = document.querySelector("#carousel > div:nth-child(6)").innerHTML;
let Items7 = document.querySelector("#carousel > div:nth-child(7)").innerHTML;
let Items8 = document.querySelector("#carousel > div:nth-child(8)").innerHTML;
let Items9 = document.querySelector("#carousel > div:nth-child(9)").innerHTML;
let Items10 = document.querySelector("#carousel > div:nth-child(10)").innerHTML;

let arrItems = [Items1, Items2, Items3, Items4, Items5, Items6, Items7, Items8, Items9, Items10];
let arrNumbersForRandom = [0, 4, 5, 9];
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;


CAROUSEL.addEventListener("animationstart", () => {

    index1 = Math.round(Math.random() * 3);
        do {
            index2 = Math.round(Math.random() * 3)
        } while (index1 == index2);
        
        do {
            index3 = Math.round(Math.random() * 3)
            } while (index3 == index2 || index3 == index1);

        do {
            index4 = Math.round(Math.random() * 3)
        } while (index4 == index1 || index4 == index2 || index4 == index3);

        /*alert(index1 + " " + index2 + " " + index3 + " " + index4);*/
        

        document.querySelector("#carousel > div:nth-child(1)").innerHTML = arrItems[arrNumbersForRandom[index1]];
        document.querySelector("#carousel > div:nth-child(6)").innerHTML = arrItems[arrNumbersForRandom[index2]];
        document.querySelector("#carousel > div:nth-child(5)").innerHTML = arrItems[arrNumbersForRandom[index3]];
        document.querySelector("#carousel > div:nth-child(10)").innerHTML = arrItems[arrNumbersForRandom[index4]];

        arrItems[0] = document.querySelector("#carousel > div:nth-child(1)").innerHTML;
       
        arrItems[4] = document.querySelector("#carousel > div:nth-child(5)").innerHTML;
        arrItems[5] = document.querySelector("#carousel > div:nth-child(6)").innerHTML;
       
        arrItems[9] = document.querySelector("#carousel > div:nth-child(10)").innerHTML;
        /*alert(document.querySelector("#carousel > div:nth-child(5)").innerHTML);*/

})


CAROUSEL.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
        
        CAROUSEL.classList.remove("transition-left");

        document.querySelector("#carousel > div:nth-child(2)").innerHTML = arrItems[2];
        document.querySelector("#carousel > div:nth-child(3)").innerHTML = arrItems[3];
        document.querySelector("#carousel > div:nth-child(4)").innerHTML = arrItems[4];
        document.querySelector("#carousel > div:nth-child(7)").innerHTML = arrItems[7];
        document.querySelector("#carousel > div:nth-child(8)").innerHTML = arrItems[8];
        document.querySelector("#carousel > div:nth-child(9)").innerHTML = arrItems[9];
        document.querySelector("#carousel > div:nth-child(1)").innerHTML = arrItems[1];
        document.querySelector("#carousel > div:nth-child(6)").innerHTML = arrItems[6];
        document.querySelector("#carousel > div:nth-child(5)").innerHTML = arrItems[0];
        document.querySelector("#carousel > div:nth-child(10)").innerHTML = arrItems[5];

        

        arrItems[0] = document.querySelector("#carousel > div:nth-child(1)").innerHTML;
        arrItems[1] = document.querySelector("#carousel > div:nth-child(2)").innerHTML;
        arrItems[2] = document.querySelector("#carousel > div:nth-child(3)").innerHTML;
        arrItems[3] = document.querySelector("#carousel > div:nth-child(4)").innerHTML;
        arrItems[4] = document.querySelector("#carousel > div:nth-child(5)").innerHTML;
        arrItems[5] = document.querySelector("#carousel > div:nth-child(6)").innerHTML;
        arrItems[6] = document.querySelector("#carousel > div:nth-child(7)").innerHTML;
        arrItems[7] = document.querySelector("#carousel > div:nth-child(8)").innerHTML;
        arrItems[8] = document.querySelector("#carousel > div:nth-child(9)").innerHTML;
        arrItems[9] = document.querySelector("#carousel > div:nth-child(10)").innerHTML;


    } else {    
        CAROUSEL.classList.remove("transition-right");

        document.querySelector("#carousel > div:nth-child(2)").innerHTML = arrItems[0];
        document.querySelector("#carousel > div:nth-child(3)").innerHTML = arrItems[1];
        document.querySelector("#carousel > div:nth-child(4)").innerHTML = arrItems[2];
        document.querySelector("#carousel > div:nth-child(7)").innerHTML = arrItems[5];
        document.querySelector("#carousel > div:nth-child(8)").innerHTML = arrItems[6];
        document.querySelector("#carousel > div:nth-child(9)").innerHTML = arrItems[7];
        document.querySelector("#carousel > div:nth-child(1)").innerHTML = arrItems[8];
        document.querySelector("#carousel > div:nth-child(6)").innerHTML = arrItems[4];
        document.querySelector("#carousel > div:nth-child(5)").innerHTML = arrItems[9];
        document.querySelector("#carousel > div:nth-child(10)").innerHTML = arrItems[3];

        

        arrItems[0] = document.querySelector("#carousel > div:nth-child(1)").innerHTML;
        arrItems[1] = document.querySelector("#carousel > div:nth-child(2)").innerHTML;
        arrItems[2] = document.querySelector("#carousel > div:nth-child(3)").innerHTML;
        arrItems[3] = document.querySelector("#carousel > div:nth-child(4)").innerHTML;
        arrItems[4] = document.querySelector("#carousel > div:nth-child(5)").innerHTML;
        arrItems[5] = document.querySelector("#carousel > div:nth-child(6)").innerHTML;
        arrItems[6] = document.querySelector("#carousel > div:nth-child(7)").innerHTML;
        arrItems[7] = document.querySelector("#carousel > div:nth-child(8)").innerHTML;
        arrItems[8] = document.querySelector("#carousel > div:nth-child(9)").innerHTML;
        arrItems[9] = document.querySelector("#carousel > div:nth-child(10)").innerHTML;
    }
    
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})


