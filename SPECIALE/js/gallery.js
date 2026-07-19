/* ==========================================
   PHOTO GALLERY
========================================== */

const photos = [
  {
    image: "images/photo1.webp",
    caption: "The smile that changed my world.",
  },

  {
    image: "images/photo2.webp",
    caption: "Every moment with you becomes a memory.",
  },

  {
    image: "images/photo3.webp",
    caption: "You make happiness look effortless.",
  },

  {
    image: "images/photo4.webp",
    caption: "Forever starts with moments like these.",
  },
];

const photoSection = document.getElementById("photos");

if (photoSection) {
  photoSection.innerHTML = `

<div class="page-content">

<h2 class="page-title">

Our Favorite Pictures

</h2>

<p class="page-subtitle">

Every picture tells a story...
my favorite story is us.

</p>

<div class="photo-wall">

${photos
  .map(
    (photo) => `

<a href="${photo.image}"

data-fancybox="gallery"

class="photo-card">

<img src="${photo.image}" alt="">

<p>${photo.caption}</p>

</a>

`,
  )
  .join("")}

</div>

</div>

`;

  if (window.Fancybox) {
    Fancybox.bind('[data-fancybox="gallery"]', {
      animated: true,

      dragToClose: true,

      Toolbar: {
        display: ["close"],
      },
    });
  }
}

/* ==========================================
   VIDEO GALLERY
========================================== */

const videos = [
  {
    src: "videos/video1.mp4",
    thumb: "images/video1-thumb.webp",
    title: "My woman",
  },

  {
    src: "videos/video2.mp4",
    thumb: "images/video2-thumb.webp",
    title: "My other half",
  },

  {
    src: "videos/video3.mp4",
    thumb: "images/video3-thumb.webp",
    title: "My everything",
  },

  {
    src: "videos/video4.mp4",
    thumb: "images/video4-thumb.webp",
    title: "My one and only",
  },

  {
    src: "videos/video5.mp4",
    thumb: "images/video5-thumb.webp",
    title: "The love of my life",
  },

  {
    src: "videos/video6.mp4",
    thumb: "images/video6-thumb.webp",
    title: "My ISRA",
  },
];

const videoSection = document.getElementById("videos");

if (videoSection) {
  videoSection.innerHTML = `

<div class="page-content">


<h2 class="page-title">

Little Memories

</h2>


<p class="page-subtitle">

Some moments deserve to be replayed forever.

</p>



<div class="video-wall">


${videos
  .map(
    (video) => `

<a

href="${video.src}"

data-fancybox="videos"

class="video-card"

data-type="html5video"

>


<img

src="${video.thumb}"

alt="${video.title}"

loading="lazy"


>


<div class="video-overlay">

▶

</div>



</a>



`,
  )
  .join("")}



</div>


</div>


`;

  if (window.Fancybox) {
    Fancybox.bind('[data-fancybox="videos"]', {
      animated: true,

      dragToClose: true,

      Toolbar: {
        display: ["close"],
      },

      Carousel: {
        infinite: true,
      },

      Html5video: {
        autoplay: true,
      },
    });
  }
}
