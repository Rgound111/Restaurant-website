const burger=document.querySelector(".burger")
const navbar=document.querySelector(".navbar")
const navitems=document.querySelector(".nav-items")
const logo=document.querySelector(".logo")

burger.addEventListener("click",run=>{
    navbar.classList.toggle("h-nav-resp")
    navitems.classList.toggle("v-nav-resp")
    logo.classList.toggle("v-nav-resp")
})


// carousal javascript

let slideindex=1;
showslide(slideindex);

function imageslide(n){
    showslide(slideindex += n);
}

function currentslide(n){
    showslide(slideindex = n);
}

function showslide(n){
    let i;
    let slides=document.getElementsByClassName("myslides");
    let dots=document.getElementsByClassName("dot");
    if(n>slides.length){slideindex=1};
    if(n<-1){slideindex=slides.length};
    
    for(i=0 ; i<slides.length ;i++){
        slides[i].style.display="none"
    }
    for(i=0 ; i<dots.length ;i++){
        dots[i].className=dots[i].className.replace("active","")
    }

    slides[slideindex-1].style.display ="block";
    dots[slideindex-1].className += active;
}

