(function() {
    // var controller = new ScrollMagic.Controller();
    var var_1, var_2, var_3,
        scene_1, scene_2, scene_3,
        lineLeft = $(".first-line-left"),
        lineRight = $(".first-line-right"),
        tl;

    var_1 = TweenLite.from('.title', 2, {opacity:0, xPercent:"-150px"});
    var_2 = TweenLite.from('.sub-title', 3, {opacity:0, xPercent:"150px"});

    tl = new TimelineMax();

    /* Whole tomato - move left side and leaves together */
    tl.set([lineLeft], {xPercent: 23.6});
    tl.set([lineRight], {xPercent: 41});

    // scene_1= new ScrollMagic.Scene({
    //     triggerElement: '.title',
    // })
    // .setTween(var_1)
    // .addTo(controller);

    // scene_1.addIndicators({name: "titular pagina"})
})();

// window.onload = function(){
//  TweenLite.from(".title", 10, {left:600});
// }