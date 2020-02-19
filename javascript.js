// Navagations animation

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "white";
        document.getElementById("logo").style.fontSize = "30px";
    } else {

        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("logo").style.fontSize = "40px";
    }
}

//