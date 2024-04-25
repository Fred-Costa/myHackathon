import {homeController} from "./../js/controller/homeController.js";
import {controller_first} from "./../js/controller/controller.js";
import {controller_second} from "./../js/controller/controller.js";
import {controller_third} from "./../js/controller/controller.js"; 
import {controller_fourth} from "./../js/controller/controller.js"; 
import {controller_five} from "./../js/controller/controller.js"; 
import {controller_sixth} from "./../js/controller/controller.js"; 
import {controller_seventh} from "./../js/controller/controller.js"; 
import {controller_eighth} from "./../js/controller/controller.js"; 
import {controller_nineth} from "./../js/controller/controller.js"; 
import {controller_tenth} from "./../js/controller/controller.js"; 

let router;

router = {

    routes: {

        home: {
            hash: "#home",
            controller: homeController,
        },

        first_step: {
            hash: "#firststep",
            controller: controller_first,
        },

        second: {
            hash: "#secondstep",
            controller: controller_second,
        },
        
        third: {
            hash: "#thirdstep",
            controller: controller_third,
        },

        fourth: {
            hash: "#fourthstep",
            controller: controller_fourth,
        },

        five: {
            hash: "#fivestep",
            controller: controller_five,
        },

        sixth: {
            hash: "#sixthstep",
            controller: controller_sixth,
        },

        seventh: {
            hash: "#seventhstep",
            controller: controller_seventh,
        },

        eighth: {
            hash: "#eighthstep",
            controller: controller_eighth,
        },

        nineth: {
            hash: "#ninethstep",
            controller: controller_nineth,
        },

        tenth: {
            hash: "#tenthstep",
            controller: controller_tenth,
        },
        
    },

    start: () => {
        router.routes.home.controller.init();
        $(window).on('hashchange', () => {
            try{
                router.getRoute(router.routes);
            }
            catch (err) {
                window.location.hash = 'home';
                router.routes.home.controller.init();
            }
        })
    },

    getRoute: (routes) => {
        var obj = Object.values(routes).find((route) => route.hash === window.location.hash);

        obj.controller.init();
    }
}

export default router;