import { answerService } from "../service/service.js";

export let thirdView = {
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
            if (answerService.third_step(answer)) {
                alert("! CORRECT ANSWSER !");
                window.location.hash = "fourthstep";
            } else {
                alert("Try Again!");
            }
        })
        
        $("#hint").on('click', () => {
            $('#inner').text("You need to filter something")
        })
        $("#home").on('click', () => {
            window.location.hash = "home";
        })
        $("#back").on('click', () => {
            window.location.hash = "secondstep";
        })

        $('#inner-content').text('Next stop: a remote island where Alex resides, an experienced and brave systems engineer. To convince him to join her cause, Lina faces a second challenge: solving a complex algorithm optimization problem in JavaScript. ' +
        'Alex agrees to help her if she can first help him.'+
        'Alex wants to build a raft.'+
        'Which of the items would be the best for such? '+
        'let arr = [metal, plank, rock, paper] Why not use arrow functions while you`re at it? ');
    }
}