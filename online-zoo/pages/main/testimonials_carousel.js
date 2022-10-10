const slider = document.querySelector(".slidebar");
const target = document.querySelector("body > section.testimonials > div > div.testimonials__main > div.layout-4-column > div:nth-child(1)");
const mainLayer = document.querySelector(".layout-4-column");
let allTextblocks = document.querySelectorAll(".testimonials__textblock");

let arrLinkAvatar = ["Arturo.jpg", "Berlin.jpg", "Enriquearce.jpg", "Esther.jpg",
"Itziar.jpg", "Jaime.jpg", "Miguel.jpg", "Najwa.jpg", "Professor.jpg",
"Raquel_Murillo.jpg", "Tokyo.jpg"];

let arrNames = ["Darrell Silva", "Kaya Hardin", "Carleigh Wallace", "Nigel Mayo", 
"Justice Crosby", "Marlon Anthony", "Keyla Ayala", "Malik Bryan", "Jairo Ali", 
"Mohammed Nicholson", "Angelica Rogers"];

let arrTowns = ["Wimborne (UK)", "Ware (UK)", "Colne (UK)", "Deal (UK)", "Stratford-upon-Avon (UK)", 
"St Just-in-Penwith (UK)", "Gosport (UK)", "Ferryhill (UK)", "Scar (UK)", "Grange-over-Sands (UK)",
"Oswestry (UK)"];

let arrTexts = ["Online zoo is one of the ways to instill a love for animals. The best online zoo I've met. My son delighted very much loves to watch gorillas. Viewing the gorillas was as fun as the VSM Festival in Thailand. It was a great view of the gorillas and it was filled with information. I was amazed when I saw how clear their eyes are. One of the gorillas got very excited and started to clean the area, cleaning the leaves that fell down. The speed with which the gorillas performed their task was amazing. The noise they make while doing so is very heart warming. Gorillas used to live in the rainforests in the past. They are extremely sensitive to trees and branches falling on them. So, even though they were tree climbers they do climb",
"It's the best place to watch animals online. The best part is that it is fully automated and easy to use. I've been impressed with a number of other webcams of various species over the years. There are a lot of them out there. It's funny to see the deer playing with the Christmas decorations on the deck.",
"Watching wild animals online is the best way to chiil out. Does anybody remember this? It aired in the 70's and was the precursor to Discovery Channel. Not a bad show, especially if you haven't seen it in a while. There's an add - on that you can get with this DVD - Wild in Waco. Both look like fun. It's some of the same animals, only this time with different tricks. Mama tiger and her cub made the world famous hat trick.", 
"Panda and crocodile are my favorite animals to watch. Camera in a zoo's working 24/7! The crocodile was swimming and yawning loudly. There were a few visitors who were clapping and yelling, and wanted to take selfies with him. The crocodile's jaws were mostly shut, which made it hard for me to take photos from the front. So, I used my telephoto to take pictures of the crocodile's head from the front. You may call me a poseur, but I love posing with my food.",
"Camera in a zoo's working 24/7! Watch your favourite animal online at ISDN's ZooCam from your desk Or you can take it to school, and record events ZooCam is a small, camera-equipped computer that clips onto your clothes. You can use it to log the location of the animal you want to watch on a real time map, you can write or draw notes about the animals and upload them online.",
"Watch your favourite animals online with Neutrino Zoos. The cute animals will soon be able to live the life of a proud pet owner through the app, which will allow users to visit their favourite animals in the natural habitats of the animal lovers. The need to go out to interact with wild animals and view them in the safe and natural surroundings, is unique",
"Watch your favourite animals online at Animal Stories. Explore Tasmania's natural heritage. Tasmanian Tasmania is a great place to live, work and play. To share and enjoy Tasmania's unique beauty is to contribute to the vitality of the community. Negative Out of Towners To many Tasmanians the port city of Launceston can feel like a cross between a town",
"Watch your favourite animals online at Online Zoo. The best way to watch wildlife online is to log on to Online Zoo, where you can watch fish, birds, reptiles, and amphibians in real time. It is an initiative by the conservation organisation Wildlife SOS, which aims to bring to the fore the plight of these animals in its natural habitat. Exclusive content",
"Watch your favourite animals online at Online Zoo. We use latest technology to create animal feature for the visitors. Click here. Bonus. Use our below mentioned Tools to share the holiday images. With this tool you can share your holiday picture or festival related snap of any festival in twitter or Facebook by simply upload it and then click share button.",
"Watch your favourite animals online at Online Zoo. Enjoy a round of fun and educational animal games that are fun to play, educational to learn about, and so easy for your kid's entertainment.",
"Watch your favourite animals online at Online Zoo. Insider Tip: Because of the inbuilt commenting feature, Online Zoo makes it easy to discuss your favourite or most interesting online content. Join in the conversation at Online Zoo's Facebook group or Twitter (@OnlineZoo), and connect with the Wildlife Conservation Society, New York State Department of Environmental"]

let addPath = linkItem => "../../assets/images/testimonials/" + linkItem;

let arrFullPathAvatar = arrLinkAvatar.map(addPath);

function generateTestimonials () {
    for (let i = 0; i < allTextblocks.length; i++) {
        
        let newImageItem = document.createElement("img");
        newImageItem.src = arrFullPathAvatar[i];
        newImageItem.classList.add("testimonials__avatar");
        mainLayer.children[i].appendChild(newImageItem);

        let newSpanItem1 = document.createElement("span");
        newSpanItem1.innerText = arrNames[i];
        newSpanItem1.classList.add("testimonials__name");
        mainLayer.children[i].appendChild(newSpanItem1);

        let newSpanItem2 = document.createElement("span");
        newSpanItem2.innerText = arrTowns[i];
        newSpanItem2.classList.add("testimonials__town");
        mainLayer.children[i].appendChild(newSpanItem2);

        let newSpanItem3 = document.createElement("span");
        newSpanItem3.innerText = arrTexts[i];
        newSpanItem3.classList.add("testimonials__text");
        mainLayer.children[i].appendChild(newSpanItem3);

    }
}

generateTestimonials ();

var rangeValue = function() {
    if (window.innerWidth > 1000) {bias = 298;
        slider.max = "8";}
    else {bias = 321;
        slider.max = "9";
    }
    

    mainLayer.style.left = 0 - (bias * (slider.value - 1)) + "px";
   
}


let bias;
if (window.innerWidth > 1000) {bias = 298;
    slider.max = "8";
    slider.addEventListener("input", rangeValue);}
else if (window.innerWidth > 640) {
    bias = 321;
    slider.max = "9";
    slider.addEventListener("input", rangeValue);
} 










