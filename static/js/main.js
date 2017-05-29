function resize_fondo(){
  var altura = window.innerHeight;
  var intro_altura = document.getElementById('intro')
  intro_altura.style.height = altura + 'px';
}

(function() {
    var controller = new ScrollMagic.Controller();
    var var_1, var_2, var_3, var_4,
        scene_1, scene_2, scene_3, scene_4, scene_5, scene_6, scene_7, scene_8, scene_9,
        lineLeft = $(".first-line-left"),
        lineRight = $(".first-line-right"),
        tl;

    var_1 = TweenLite.from('.first', 2, {opacity:0, xPercent:"-150px"});
    var_2 = TweenLite.from('.second', 2, {opacity:0, xPercent:"150px"});
    var_3 = TweenLite.from('.third', 2, {opacity:0, xPercent:"-150px"});
    var_4 = TweenLite.from('.fourth', 2, {opacity:0, xPercent:"150px"});
    var_5 = TweenLite.from('.fifth', 2, {opacity:0, xPercent:"-150px"});
    var_6 = TweenLite.from('.sixth', 2, {opacity:0, xPercent:"150px"});
    var_7 = TweenLite.from('.seventh', 2, {opacity:0, xPercent:"-150px"});
    var_8 = TweenLite.from('.eighth', 2, {opacity:0, xPercent:"150px"});
    var_9 = TweenLite.from('.ninth', 2, {opacity:0, xPercent:"-150px"});

    scene_1= new ScrollMagic.Scene({
        triggerElement: '.first',
       triggerHook: 0.6
    })
    .setTween(var_1)
    // .offset(100)
    .addTo(controller);

    scene_2= new ScrollMagic.Scene({
        triggerElement: '.second',
       triggerHook: 0.6
    })
    .setTween(var_2)
    // .offset(200)
    .addTo(controller);

    scene_3= new ScrollMagic.Scene({
        triggerElement: '.third',
       triggerHook: 0.6
    })
    .setTween(var_3)
    // .offset(300)
    .addTo(controller);

    scene_4= new ScrollMagic.Scene({
        triggerElement: '.fourth',
       triggerHook: 0.6
    })
    .setTween(var_4)
    // .offset(400)
    .addTo(controller);

    scene_5= new ScrollMagic.Scene({
        triggerElement: '.fifth',
       triggerHook: 0.6
    })
    .setTween(var_5)
    // .offset(500)
    .addTo(controller);

    scene_6= new ScrollMagic.Scene({
        triggerElement: '.sixth',
       triggerHook: 0.6
    })
    .setTween(var_6)
    // .offset(600)
    .addTo(controller);

    scene_7= new ScrollMagic.Scene({
        triggerElement: '.seventh',
       triggerHook: 0.6
    })
    .setTween(var_7)
    // .offset(700)
    .addTo(controller);

    scene_8= new ScrollMagic.Scene({
        triggerElement: '.eighth',
       triggerHook: 0.6
    })
    .setTween(var_8)
    // .offset(800)
    .addTo(controller);

    scene_9= new ScrollMagic.Scene({
        triggerElement: '.ninth',
       triggerHook: 0.6
    })
    .setTween(var_9)
    // .offset(900)
    .addTo(controller);

    scene_1.addIndicators({name: "primer parrafo"})
    scene_2.addIndicators({name: "segundo parrafo"})
    scene_3.addIndicators({name: "tercer parrafo"})
    scene_4.addIndicators({name: "cuarto parrafo"})
    scene_5.addIndicators({name: "quinto parrafo"})
    scene_6.addIndicators({name: "sexto parrafo"})
    scene_7.addIndicators({name: "septimo parrafo"})
    scene_8.addIndicators({name: "octavo parrafo"})
    scene_9.addIndicators({name: "noveno parrafo"})
})();

$(document).ready(function() {
  resize_fondo()
  $(window).on('scroll resize', function() {
            resize_fondo()
  });

})


// window.onload = function(){
//  TweenLite.from(".title", 10, {left:600});
// }
