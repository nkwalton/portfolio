//To get image over text use different z-index or image as a background image on a div

//parallax functionality
$(document).ready(function () {
//    $('.parallax-inner').localScroll();



//hover over project to display a description

    $('#blocJams').hover(function () {
       $('#text').fadeIn(500), function () {
            $('#text').fadeOut(500)
        }
    });
    

    
    //set timer to 7 seconds, after that, load the magic animation and repeat forever
setInterval(function(){ 
    $('.ion-headphone, .ion-model-s, .ion-android-boat, .ion-android-laptop, .ion-android-bicycle').toggleClass('magictime vanishIn');
}, 7000 );
    
    //waypoints fun
    var $backgroundImage = $('.background-image');
    
    $backgroundImage.waypoint(function () {
        console.log('waypoint fun testing!!!');
    });
    
    
});

