function resize_fondo(){
  var altura = window.innerHeight;
  var intro_altura = document.getElementById('intro')
  intro_altura.style.height = altura + 'px';
}

(function() {
    var controller = new ScrollMagic.Controller();
    var var_1, var_2, var_3,
        scene_1, scene_2, scene_3,
        lineLeft = $(".first-line-left"),
        lineRight = $(".first-line-right"),
        tl;

    var_1 = TweenLite.from('.first', 2, {opacity:0, xPercent:"-150px"});
    var_2 = TweenLite.from('.second', 3, {opacity:0, xPercent:"150px"});
    var_3 = TweenLite.from('.three', 2, {opacity:0, xPercent:"-150px"});

    scene_1= new ScrollMagic.Scene({
        triggerElement: '.first',
       triggerHook: .1
    })
    .setTween(var_1)
    .addTo(controller);

    scene_2= new ScrollMagic.Scene({
        triggerElement: '.second',
       triggerHook: .8
    })
    .setTween(var_2)
    .addTo(controller);

    scene_3= new ScrollMagic.Scene({
        triggerElement: '.three',
       triggerHook: .9
    })
    .setTween(var_3)
    .addTo(controller);

    scene_1.addIndicators({name: "primer parrafo"})
    scene_2.addIndicators({name: "segundo parrafo"})
    scene_3.addIndicators({name: "tercer parrafo"})
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
