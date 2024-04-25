import { answerService } from "../service/service.js";

export let seventhView = {
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
            '<form id="rate"> <input id="input" type="text" placeholder="Enter your text here" style="height:386px; width:100%; text-align:center; background-color: orange; border:2px solid black; border-radius: 15px "></input></form>' +
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
            //event.preventDefault();
            let answer = $("#input").val();
            if (answerService.seventh_step(answer)) {
                alert("! CORRECT ANSWSER !");
                window.location.hash = "eighthstep";
            } else {
                alert("Try Again!");
            }
        })
        $("#hint").on('click', () => {
            $('#inner').text("How can I split an array?")
        })
        $("#home").on('click', () => {
            window.location.hash = "home";
        })
        $("#back").on('click', () => {
            window.location.hash = "sixthstep";
        })

        $('#inner-content').text('The final member to join the band is Bernardo, a skilled hacker and digital philosopher. To persuade him to embark on their crusade, Lina faces a final challenge: demonstrating her understanding of ethics in programming and her determination to use her skills for the common good. Now, she needs to split a str in some way.');
    }
}