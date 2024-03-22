window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyvezerles1();
});

function elemekElerese1() {
    //const ELEM =document.querySelector("#f1")
    //console.log(ELEM)
    const ELEM =$("#f1")
    console.log(ELEM)
}
function elemekElerese2() {
    //const ELEM2=document.querySelector("#ide")
    //ELEM2.innerHTML="<p>Jó reggelt!</p>"
    const ELEM2=$("#ide")
    ELEM2.html("Jó reggelt!")
}
function elemekElerese3() {
    //const ELEM3=document.querySelector(".ide")
    //ELEM3.innerHTML="<p>Jó reggelt!</p>"
    const ELEM2=$(".ide")
    ELEM2.html("Jó reggelt!")
}
function elemekElerese4() {
    /*const ELEM4=document.querySelector(".lista")
    let txt="<ul>";
    for (let index = 0; index < 5; index++) {
        a = Math.floor(Math.random()*21+10);
        txt+=`<li> ${a} </li>`;  
    }
    txt += "</ul>";
    ELEM4.innerHTML=txt;*/
    const ELEM4=$(".lista")
    let txt="<ul>";
    for (let index = 0; index < 5; index++) {
        a = Math.floor(Math.random()*21+10);
        txt+=`<li> ${a} </li>`;  
    }
    txt += "</ul>";
    ELEM4.html(txt);

}
function elemekFormazasa1() {
    //const ELEM5=document.querySelector(".lista")
    //ELEM5.classList.add("formazott")
    const ELEM5=$(".lista")
    ELEM5.addClass("formazott")
}
function esemenyvezerles1() {
    //const ELEM6=document.querySelector(".lista")
    //ELEM6.addEventListener("click", kattintasutan)
    const ELEM6 = $(".lista")
    ELEM6.on("click", kattintas);
    
}
function kattintas(){
    /*const ELEM7=document.querySelector(".lista")
    ELEM7=addEventListener("click", kattintasutan)
    function kattintasutan(){
       kattintas.document.querySelector(".lista")= ELEM7.innerHTML
    }*/
    const ELEM7=$(".lista")
    ELEM7.on("click", kattintasutan);
    function kattintasutan(){
        kattintas=$(".lista")= ELEM7.innerHTML
     }
}


