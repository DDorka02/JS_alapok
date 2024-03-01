window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyvezerles1();
});

function elemekElerese1() {
    const ELEM =document.querySelector("#f1")
    console.log(ELEM)
}
function elemekElerese2() {
    const ELEM2=document.querySelector("#ide")
    ELEM2.innerHTML="<p>Jó reggelt!</p>"
}
function elemekElerese3() {
    const ELEM3=document.querySelector(".ide")
    ELEM3.innerHTML="<p>Jó reggelt!</p>"
}
function elemekElerese4() {
    const ELEM4=document.querySelector(".lista")
    let txt="<ul>";
    for (let index = 0; index < 5; index++) {
        a = Math.floor(Math.random()*21+10);
        txt+=`<li> ${a} </li>`;  
    }
    txt += "</ul>";
    ELEM4.innerHTML=txt;
}
function elemekFormazasa1() {
    const ELEM5=document.querySelector(".lista")
    ELEM5.classList.add("formazott")
}
function esemenyvezerles1() {
    const ELEM6=document.querySelector(".lista")
    ELEM6.addEventListener("click", kattintasutan)
    
}
function kattintas(){
    const ELEM7=document.querySelector(".lista")
    ELEM7=addEventListener("click", kattintasutan)
    function kattintasutan(){
       kattintas.document.querySelector(".lista")= ELEM7.innerHTML
    }
}
f

