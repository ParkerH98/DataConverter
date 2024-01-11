// Get the navbar
var navbar = document.getElementById("naver");
var position = navbar.getBoundingClientRect();
var navTop = position.top;

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var wrapper = document.getElementById("wrapper");

// the function executes when the page is scrolled
window.onscroll = function () {

    //keeping for debug
    var navbar = document.getElementById("naver");
    var position = navbar.getBoundingClientRect();
    var navTop = position.top;

    // If the window has been resized while the navbar was at the top of the screen AND
    // the navbar is no longer at the top bc the user is scrolling, this will execute.
    // this fixes the issue of the 'sticky' value being set to zero when the when the window
    // is resized while the navabr is at the very top of the page
    if (navTop != 0 && topResize == true) {
        console.log("EXECUTING")
        sticky = navbar.offsetTop;
    }

    //console.log("sticky: " + sticky)
    console.log("NavbarTop: " + navTop);
    console.log("window: " + window.pageYOffset);
    console.log("IF TRUE: " + window.pageYOffset + " >= " + sticky)

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        wrapper.classList.add("nav-wrapper");
    } else {
        navbar.classList.remove("sticky");
        wrapper.classList.remove("nav-wrapper");
    }
}

var topResize = false;

// executes when the window is resized.
// I needed this function because the value of 'sticky' changes
// everytime the screen is resized. This updates the 'sticky'
// value so the sticky nav works after resizing the screen
window.onresize = function () {

    var navbar = document.getElementById("naver");
    var position = navbar.getBoundingClientRect();
    var navTop = position.top;

    if (navTop == 0) {
        console.log("POOOOOOPPPP");
        topResize = true;
        return;

    } else {

        console.log("onresize")
        console.log("sticky: " + sticky)

        sticky = navbar.offsetTop;
        hitTop = false;
    }
}


// executes on window reload
window.onload = function () {

    var navbar = document.getElementById("naver");
    var position = navbar.getBoundingClientRect();
    var navTop = position.top;

    // this forces the sticky value to change onload...
    // needed bc of tiny navbar jump to top only on first load

    // the check for zero is needed because if the navbar is 
    // at the top of the screen while the function is called then
    // the navbar will be stuck at the top of the screen because.
    // the value of 'sticky' is updated. Therefore, just return if top
    // of navbar is at very top of window
    if (navTop == 0) {
        return;
    } else {
        console.log("onload")
        sticky = navbar.offsetTop;
    }
}