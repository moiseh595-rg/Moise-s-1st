/* ==========================================
   FLOATING HEARTS
========================================== */

const heartContainer=document.body;

function createHeart(){

    const heart=document.createElement("span");

    heart.innerHTML="❤";

    heart.classList.add("floating-heart");

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=

    5+Math.random()*5+"s";

    heart.style.fontSize=

    12+Math.random()*24+"px";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,500);

/* ==========================================
   PARALLAX
========================================== */

window.addEventListener("mousemove",e=>{

    document.body.style.backgroundPosition=

    `${e.clientX/40}px ${e.clientY/40}px`;

});

/* ==========================================
   MUSIC BUTTON
========================================== */

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick=()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="⏸";

    }

    else{

        music.pause();

        musicBtn.innerHTML="▶";

    }

};

}