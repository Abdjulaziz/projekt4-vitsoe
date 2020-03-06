//header
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.backgroundColor = "#f8f8f8";
        document.getElementById("logo").style.fontSize = "30px";

    } else {

        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("logo").style.fontSize = "40px";

    }
}

//scroll indicator
function scrollIndicator() {
    var elmnt = document.getElementById("naturen");
    elmnt.scrollIntoView(true);
}