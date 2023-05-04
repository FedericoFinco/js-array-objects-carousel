console.log("prova")
const sliderElement = document.getElementById("slider");
const side = document.getElementById("side");
const btnBack = document.getElementById("btnBack");
const btnNext = document.getElementById("btnNext");
const btnAS = document.getElementById("startAS");
const btnReverseAS = document.getElementById("reverseAS");
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

let slideElements=[]
let sideImgs=[]

images.forEach((element, position, array) => {
    let x = document.createElement("div");
    let y = document.createElement("img")
    y.src =`./${element.image}`
    y.className = "greenBorder";
    x.className = "slide";
    let contentHtml=`<img src="./${element.image}" alt="${element.title}" />`
    contentHtml+=`<h2 class="imgTitle">${element.title}</h2>`
    contentHtml+=`<figcaption>${element.text}</figcaption>`
    x.innerHTML=contentHtml
    console.log(position)
    if (position!=0){
        x.classList.add("hidden")
        y.classList.add("opacity05")
        y.classList.remove("greenBorder")
    }
    sliderElement.append(x);
    slideElements.push(x)
    side.append(y)
    sideImgs.push(y)
});
const elementscount=slideElements.length // per debuggare che non mi legge .lenght dentro alla funzione slideup
console.log(slideElements)

let switched=false

let switchedSide=false

btnNext.addEventListener("click",()=>{
    slideElements.forEach(slideUp)
    sideImgs.forEach(slideUpSide)
    switched=false
    switchedSide=false
})
btnBack.addEventListener("click",()=>{
    slideElements.forEach(slideDown)
    sideImgs.forEach(slideDownSide)
    switched=false
    switchedSide=false
})

for (let i = 0; i < sideImgs.length; i++) {
    sideImgs[i].addEventListener("click",function(){
        console.log(sideImgs.indexOf(this))
        sideImgs.forEach(clearSide)
        slideElements.forEach(clearMain)
        this.classList.add("greenBorder")
        this.classList.remove("opacity05")
        slideElements[sideImgs.indexOf(this)].classList.remove("hidden")

    })
    
}
let ASclicked=false
let autoscroll
let reverseAutoscroll
let reverseASCliked=false

btnAS.addEventListener('click', function(){
    if(ASclicked == false && reverseASCliked == false){
        ASclicked = true;
        btnAS.classList.add("onGoing")
        autoscroll=setInterval(function(){
            slideElements.forEach(slideUp)
            sideImgs.forEach(slideUpSide)
            switched=false
            switchedSide=false
        }, 1*3000)
    }else{
        ASclicked = false;
        clearInterval(autoscroll);
        btnAS.classList.remove("onGoing")
    }

})


btnReverseAS.addEventListener('click', function(){
    if(ASclicked == false && reverseASCliked == false){
        reverseASCliked = true
        btnReverseAS.classList.add("onGoing")
        reverseAutoscroll=setInterval(function(){
            slideElements.forEach(slideDown)
            sideImgs.forEach(slideDownSide)
            switched=false
            switchedSide=false
        }, 1*3000)
    }else{
        reverseASCliked = false;
        clearInterval(reverseAutoscroll);
        btnReverseAS.classList.remove("onGoing")
    }
    console.log(ASclicked);

})
// let autoscroll=setInterval(function(){
//     console.log("funziona")
// }, 1*3000)


function clearSide(element,position,array) {
    element.classList.add("opacity05")
    element.classList.remove("greenBorder")
}

function clearMain(element,position,array) {
    element.classList.add("hidden")
}


function slideUp(element, posizione, array) {
    if (!element.classList.contains("hidden")&& !switched){
        let indexToSwitch=posizione+1 //==elementscount-1 ? 0 :posizione+1
        if (posizione==elementscount-1){
            indexToSwitch=0
            // element.classList.add("hidden")
            // console.log("cacca")
            // array[0].classList.remove("hidden")
            // switched=true //sotto c'era un else e mancava index to switch
        } 
            element.classList.add("hidden")
        
            array[indexToSwitch].classList.remove("hidden")
            switched=true
    }
}

function slideUpSide(element, posizione, array) {
    if (!element.classList.contains("opacity05")&& !switchedSide){
        let indexToSwitch=posizione+1 //==elementscount-1 ? 0 :posizione+1
        if (posizione==elementscount-1){
            indexToSwitch=0
            // element.classList.add("hidden")
            // console.log("cacca")
            // array[0].classList.remove("hidden")
            // switched=true //sotto c'era un else e mancava index to switch
        } 
            element.classList.add("opacity05")
        
            array[indexToSwitch].classList.remove("opacity05")
            array[indexToSwitch].classList.add("greenBorder")
            switchedSide=true
        
    }
}

function slideDown(element, posizione, array) {
    if (!element.classList.contains("hidden")&& !switched){
        let indexToSwitch=posizione-1 //==elementscount-1 ? 0 :posizione+1
        if (posizione==0){
            indexToSwitch=elementscount-1
            // element.classList.add("hidden")
            // console.log("cacca")
            // array[0].classList.remove("hidden")
            // switched=true //sotto c'era un else e mancava index to switch
        } 
            element.classList.add("hidden")
        
            array[indexToSwitch].classList.remove("hidden")
            switched=true
    }
}

function slideDownSide(element, posizione, array) {
    if (!element.classList.contains("opacity05")&& !switchedSide){
        let indexToSwitch=posizione-1 //==elementscount-1 ? 0 :posizione+1
        if (posizione==0){
            indexToSwitch=elementscount-1
            // element.classList.add("hidden")
            // console.log("cacca")
            // array[0].classList.remove("hidden")
            // switched=true //sotto c'era un else e mancava index to switch
        } 
            element.classList.add("opacity05")
        
            array[indexToSwitch].classList.remove("opacity05")
            array[indexToSwitch].classList.add("greenBorder")
            switchedSide=true
    }
}
// function slideUp(element, posizione, array) {
// if (!element.classList.contains("hidden")&& !switched){
//         element.classList.add("hidden")    
//         array[posizione+1].classList.remove("hidden")
//         switched=true
//         console.log(posizione,elementscount)
//     }
// }
