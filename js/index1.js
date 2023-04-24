// Tiêu đề 
const currentTitle = document.title;

window.addEventListener("blur",  () => {
    document.title = "Love you babe";
});
window.addEventListener("focus",  () => {
    document.title = currentTitle;
});

//Background Music
window.onload = function() {
  var audio = document.getElementById("myAudio");
  audio.autoplay = true;
  audio.load();
}

//paralax effect
window.addEventListener('scroll', function(){
  let offset = window.pageYOffset;
  this.document.querySelector('.background').style.backgroundPositionY = offset * 0.5 + 'px'
})

//paralax effect
window.addEventListener('scroll', function(){
  let offset = window.pageYOffset;
  this.document.querySelector('.layer').style.backgroundPositionY = offset * 0.7 + 'px'
})

// June
const slideshowJune = document.querySelector('.slideshow-June');
const slidesJune = slideshowJune.querySelector('.slides');
const prevBtnJune = slideshowJune.querySelector('.prev');
const nextBtnJune = slideshowJune.querySelector('.next');
const slideWidthJune = 550;
let slideIndexJune = 0;

prevBtnJune.addEventListener('click', () => {
  slideIndexJune--;
  if (slideIndexJune < 0) {
    slideIndexJune = 4;
  }
  slidesJune.style.transform = `translateX(-${slideWidthJune * slideIndexJune}px)`;
});

nextBtnJune.addEventListener('click', () => {
  slideIndexJune++;
  if (slideIndexJune > 4) {
    slideIndexJune= 0;
  }
  slidesJune.style.transform = `translateX(-${slideWidthJune * slideIndexJune}px)`;
});

//July
const slideshowJuly = document.querySelector('.slideshow-July');
const slidesJuly = slideshowJuly.querySelector('.slides');
const prevBtnJuly = slideshowJuly.querySelector('.prev');
const nextBtnJuly = slideshowJuly.querySelector('.next');
const slideWidthJuly = 550;
let slideIndexJuly = 0;

prevBtnJuly.addEventListener('click', () => {
  slideIndexJuly--;
  if (slideIndexJuly < 0) {
    slideIndexJuly = 4;
  }
  slidesJuly.style.transform = `translateX(-${slideWidthJuly * slideIndexJuly}px)`;
});

nextBtnJuly.addEventListener('click', () => {
  slideIndexJuly++;
  if (slideIndexJuly > 4) {
    slideIndexJuly = 0;
  }
  slidesJuly.style.transform = `translateX(-${slideWidthJuly * slideIndexJuly}px)`;
});

//August
const slideshowAug = document.querySelector('.slideshow-Aug');
const slidesAug = slideshowAug.querySelector('.slides');
const prevBtnAug = slideshowAug.querySelector('.prev');
const nextBtnAug = slideshowAug.querySelector('.next');
const slideWidthAug = 550;
let slideIndexAug = 0;

prevBtnAug.addEventListener('click', () => {
  slideIndexAug--;
  if (slideIndexAug < 0) {
    slideIndexAug = 4;
  }
  slidesAug.style.transform = `translateX(-${slideWidthAug * slideIndexAug}px)`;
});

nextBtnAug.addEventListener('click', () => {
  slideIndexAug++;
  if (slideIndexAug > 4) {
    slideIndexAug = 0;
  }
  slidesAug.style.transform = `translateX(-${slideWidthAug * slideIndexAug}px)`;
});

//September
const slideshowSep = document.querySelector('.slideshow-Sep');
const slidesSep = slideshowSep.querySelector('.slides');
const prevBtnSep = slideshowSep.querySelector('.prev');
const nextBtnSep = slideshowSep.querySelector('.next');
const slideWidthSep = 550;
let slideIndexSep = 0;

prevBtnSep.addEventListener('click', () => {
  slideIndexSep--;
  if (slideIndexSep < 0) {
    slideIndexSep = 4;
  }
  slidesSep.style.transform = `translateX(-${slideWidthSep * slideIndexSep}px)`;
});

nextBtnSep.addEventListener('click', () => {
  slideIndexSep++;
  if (slideIndexSep > 4) {
    slideIndexSep = 0;
  }
  slidesSep.style.transform = `translateX(-${slideWidthSep * slideIndexSep}px)`;
});

//October
const slideshowOct = document.querySelector('.slideshow-Oct');
const slidesOct = slideshowOct.querySelector('.slides');
const prevBtnOct = slideshowOct.querySelector('.prev');
const nextBtnOct = slideshowOct.querySelector('.next');
const slideWidthOct = 550;
let slideIndexOct = 0;

prevBtnOct.addEventListener('click', () => {
  slideIndexOct--;
  if (slideIndexOct < 0) {
    slideIndexOct = 4;
  }
  slidesOct.style.transform = `translateX(-${slideWidthOct * slideIndexOct}px)`;
});

nextBtnOct.addEventListener('click', () => {
  slideIndexOct++;
  if (slideIndexOct > 4) {
    slideIndexOct = 0;
  }
  slidesOct.style.transform = `translateX(-${slideWidthOct * slideIndexOct}px)`;
});

//November
const slideshowNov = document.querySelector('.slideshow-Nov');
const slidesNov = slideshowNov.querySelector('.slides');
const prevBtnNov = slideshowNov.querySelector('.prev');
const nextBtnNov = slideshowNov.querySelector('.next');
const slideWidthNov = 550;
let slideIndexNov = 0;

prevBtnNov.addEventListener('click', () => {
  slideIndexNov--;
  if (slideIndexNov < 0) {
    slideIndexNov = 4;
  }
  slidesNov.style.transform = `translateX(-${slideWidthNov * slideIndexNov}px)`;
});

nextBtnNov.addEventListener('click', () => {
  slideIndexNov++;
  if (slideIndexNov > 4) {
    slideIndexNov = 0;
  }
  slidesNov.style.transform = `translateX(-${slideWidthNov * slideIndexNov}px)`;
});

//December
const slideshowDec = document.querySelector('.slideshow-Dec');
const slidesDec = slideshowDec.querySelector('.slides');
const prevBtnDec = slideshowDec.querySelector('.prev');
const nextBtnDec = slideshowDec.querySelector('.next');
const slideWidthDec = 550;
let slideIndexDec = 0;

prevBtnDec.addEventListener('click', () => {
  slideIndexDec--;
  if (slideIndexDec < 0) {
    slideIndexDec = 4;
  }
  slidesDec.style.transform = `translateX(-${slideWidthDec * slideIndexDec}px)`;
});

nextBtnDec.addEventListener('click', () => {
  slideIndexDec++;
  if (slideIndexDec > 4) {
    slideIndexDec = 0;
  }
  slidesDec.style.transform = `translateX(-${slideWidthDec * slideIndexDec}px)`;
});

//January
const slideshowJan = document.querySelector('.slideshow-Jan');
const slidesJan = slideshowJan.querySelector('.slides');
const prevBtnJan = slideshowJan.querySelector('.prev');
const nextBtnJan = slideshowJan.querySelector('.next');
const slideWidthJan = 550;
let slideIndexJan = 0;

prevBtnJan.addEventListener('click', () => {
  slideIndexJan--;
  if (slideIndexJan < 0) {
    slideIndexJan = 4;
  }
  slidesJan.style.transform = `translateX(-${slideWidthJan * slideIndexJan}px)`;
});

nextBtnJan.addEventListener('click', () => {
  slideIndexJan++;
  if (slideIndexJan > 4) {
    slideIndexJan = 0;
  }
  slidesJan.style.transform = `translateX(-${slideWidthJan * slideIndexJan}px)`;
});

//February
const slideshowFeb = document.querySelector('.slideshow-Feb');
const slidesFeb = slideshowFeb.querySelector('.slides');
const prevBtnFeb = slideshowFeb.querySelector('.prev');
const nextBtnFeb = slideshowFeb.querySelector('.next');
const slideWidthFeb = 550;
let slideIndexFeb = 0;

prevBtnFeb.addEventListener('click', () => {
  slideIndexFeb--;
  if (slideIndexFeb < 0) {
    slideIndexFeb = 4;
  }
  slidesFeb.style.transform = `translateX(-${slideWidthFeb * slideIndexFeb}px)`;
});

nextBtnFeb.addEventListener('click', () => {
  slideIndexFeb++;
  if (slideIndexFeb > 4) {
    slideIndexFeb = 0;
  }
  slidesFeb.style.transform = `translateX(-${slideWidthFeb * slideIndexFeb}px)`;
});

//March
const slideshowMar = document.querySelector('.slideshow-Mar');
const slidesMar = slideshowMar.querySelector('.slides');
const prevBtnMar = slideshowMar.querySelector('.prev');
const nextBtnMar = slideshowMar.querySelector('.next');
const slideWidthMar = 550;
let slideIndexMar = 0;

prevBtnMar.addEventListener('click', () => {
  slideIndexMar--;
  if (slideIndexMar < 0) {
    slideIndexMar = 4;
  }
  slidesMar.style.transform = `translateX(-${slideWidthMar * slideIndexMar}px)`;
});

nextBtnMar.addEventListener('click', () => {
  slideIndexMar++;
  if (slideIndexMar > 4) {
    slideIndexMar = 0;
  }
  slidesMar.style.transform = `translateX(-${slideWidthMar * slideIndexMar}px)`;
});

//April
const slideshowApr = document.querySelector('.slideshow-Apr');
const slidesApr = slideshowApr.querySelector('.slides');
const prevBtnApr = slideshowApr.querySelector('.prev');
const nextBtnApr = slideshowApr.querySelector('.next');
const slideWidthApr = 550;
let slideIndexApr = 0;

prevBtnApr.addEventListener('click', () => {
  slideIndexApr--;
  if (slideIndexApr < 0) {
    slideIndexApr = 4;
  }
  slidesApr.style.transform = `translateX(-${slideWidthApr * slideIndexApr}px)`;
});

nextBtnApr.addEventListener('click', () => {
  slideIndexApr++;
  if (slideIndexApr > 4) {
    slideIndexApr = 0;
  }
  slidesApr.style.transform = `translateX(-${slideWidthApr * slideIndexApr}px)`;
});

//May
const slideshowMay = document.querySelector('.slideshow-May');
const slidesMay = slideshowMay.querySelector('.slides');
const prevBtnMay = slideshowMay.querySelector('.prev');
const nextBtnMay = slideshowMay.querySelector('.next');
const slideWidthMay = 550;
let slideIndexMay = 0;

prevBtnMay.addEventListener('click', () => {
  slideIndexMay--;
  if (slideIndexMay < 0) {
    slideIndexMay = 4;
  }
  slidesMay.style.transform = `translateX(-${slideWidthMay * slideIndexMay}px)`;
});

nextBtnMay.addEventListener('click', () => {
  slideIndexMay++;
  if (slideIndexMay > 4) {
    slideIndexMay = 0;
  }
  slidesMay.style.transform = `translateX(-${slideWidthMay * slideIndexMay}px)`;
});

//June 2023
const slideshowJune23 = document.querySelector('.slideshow-June23');
const slidesJune23 = slideshowJune23.querySelector('.slides');
const prevBtnJune23 = slideshowJune23.querySelector('.prev');
const nextBtnJune23 = slideshowJune23.querySelector('.next');
const slideWidthJune23 = 550;
let slideIndexJune23 = 0;

prevBtnJune23.addEventListener('click', () => {
  slideIndexJune23--;
  if (slideIndexJune23 < 0) {
    slideIndexJune23 = 4;
  }
  slidesJune23.style.transform = `translateX(-${slideWidthJune23 * slideIndexJune23}px)`;
});

nextBtnJune23.addEventListener('click', () => {
  slideIndexJune23++;
  if (slideIndexJune23 > 4) {
    slideIndexJune23 = 0;
  }
  slidesJune23.style.transform = `translateX(-${slideWidthJune23 * slideIndexJune23}px)`;
});
