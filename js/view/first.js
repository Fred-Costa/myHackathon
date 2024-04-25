import { answerService } from "../service/service.js";

export let firstView = {
    show: () => {
        let content = $("#contentBody");
        content.empty();
        content.html(
            '<div class="main-banner" id="top">' +
            '<div class="container-fluid" style="padding-left:30px;padding-right:0px">' +
            '<div class="row">' +
            '<div class="col-lg-6">' +
            '<div class="left-content">' +
            '<div class="thumb">' +
            '<div class="inner-content" id="inner-content" style="color:white;text-align:center; object-fit: cover;z-index: 4;padding-left: 10px; padding-right: 100px">' +
            '<h4>Our Pirate Tale</h4>' +
            '</div>' +
            '<img src="./assets/images/wood.jpg" alt="Tale" style="height: 800px; object-fit: cover; border:2px solid black; border-radius: 15px ">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-6">' +
            '<div class="right-content">' +
            '<div class="col">' +
            '<div class="col-lg-12">' +
            '<div class="right-first-image">' +
            '<div class="thumb">' +
            '<form id="rate"> <input id="input" type="text" placeholder="Your code here" style="height:386px; width:100%; text-align:center; background-color: orange; border:2px solid black; border-radius: 15px "></input></form>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-12">' +
            '<div class="right-first-image">' +
            '<div class="thumb">' +
            '<div class="inner-content" id="inner" style="color:white;text-align:center;font-size:20px">' +
            '</div>' +
            '<img src="assets/images/treasure.jpg" alt="Tale" style="height: 386px; object-fit: cover; border:2px solid black; border-radius: 15px ">' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
        );

        $("#rate").submit(function (event) {
            event.preventDefault();
            let answer = $("#input").val();
            if (answerService.first_step(answer)) {
                alert("! CORRECT ANSWSER !");
                window.location.hash = "secondstep";
            } else {
                alert("Try Again!");
            }
        })

        $("#hint").on('click', () => {
            $('#inner').text("Say Hello World to the console")
        })
            
        $("#home").on('click', () => {
            window.location.hash = "home";
        })

        $("#back").on('click', () => {
            window.location.hash = "home";
        })

        $('#inner-content').text('Upon landing in a coastal town, Lina hears of Rose, a brilliant and fearless hacker. To recruit her, Lina faces the first challenge: a coding challenge in JavaScript that tests her encryption and system infiltration skills. Rosé inquires Lina to show him  her first words in JavaScript.');

    }
}