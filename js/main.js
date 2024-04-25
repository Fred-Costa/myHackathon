import router from "./../js/router.js";

console.log("STARTED!");

$(document).ready(() => {
    router.start();

    console.log("document ready");

    $("#musicScene").click(() => {
        var audio = document.getElementById("shipSound");
        if (audio) {
            audio.play().then(() => {
                console.log("Audio started playing");
            }).catch((error) => {
                console.error("Play failed:", error);
            });
        } else {
            console.error("Audio element not found");
        }
    });
});

