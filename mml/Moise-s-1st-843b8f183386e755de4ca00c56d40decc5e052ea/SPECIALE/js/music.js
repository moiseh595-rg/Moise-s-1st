/* ==========================================
   MUSIC SYSTEM
========================================== */


const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


let musicPlaying = false;



if(music && musicBtn){


    music.volume = 0.35;



    musicBtn.addEventListener("click",()=>{


        if(musicPlaying){


            music.pause();

            musicBtn.innerHTML="▶";

            musicPlaying=false;


        }

        else{


            music.play();

            musicBtn.innerHTML="⏸";

            musicPlaying=true;


        }


    });



}