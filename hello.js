var currentPos = 0;
var intervalHandle;

function beginAnimate() {
	document.getElementById("join").style.position = "absolute";
	document.getElementById("join").style.left = "0px";
    document.getElementById("join").style.top = "110px";
    document.getElementById("join").style.display = "block";
    // cause the animateBox function to be called
    intervalHandle = setInterval(animateBox,40);
}

function animateBox() {
    // set new position
    currentPos+=3;
    document.getElementById("join").style.left = currentPos + "px";
    // 
    if ( currentPos > 720) {
        // clear interval
        clearInterval(intervalHandle);
        // reset custom inline styles
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";
        document.getElementById("join").style.display = "none";
    }
}

window.onload =  function() {
	setTimeout(beginAnimate,3000);
};

