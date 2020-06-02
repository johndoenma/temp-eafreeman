// NAV
const mysitenav = document.querySelector('.site-header .site-nav');
const mymenubutton = document.querySelector('.menu-button');
mymenubutton.onclick = function () {
    mysitenav.classList.toggle('active');
}

const swup = new Swup();

// swup.on('animationOutDone', function () {
//     console.log("leave is done");
// });