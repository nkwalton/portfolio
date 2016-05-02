
//parallax functionality
$(document).ready(function () {


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
    
    
    
    //waypoints coming soon animation
    var $backgroundImage = $('.coming-soon-waypoint');
    
    $backgroundImage.waypoint(function () {
        $backgroundImage.addClass('js-coming-soon');
    }, { offset: '37%' });
    
    
    //about waypoint
    var waypointId = new Waypoint({
        element: $('#about-container'),
        handler: function(direction) {
//          var aboutContainer = $("#about-container");
//          console.log('about container waypoint: ', aboutContainer);
            $("#about-item").addClass("highlight");
            $("#projects-item").removeClass("highlight");
            $("#contact-item").removeClass("highlight");
        },
        //offset: '-1%'
    })
    
    //projects waypoint
    var waypointId = new Waypoint({
        element: $('#projects-container'),
        handler: function(direction) {
//          var projectsContainer = $('#projects-container');
//          console.log('projects container waypoint: ', projectsContainer);
            $("#projects-item").addClass("highlight");
            $("#about-item").removeClass("highlight");
            $("#contact-item").removeClass("highlight");
        },
        offset: '45%'
    })
    
    //contact waypoint
    var waypointId = new Waypoint({
        element: $('#contact-container'),
        handler: function(direction) {
//          var contactContainer = $('#contact-container');
//          console.log('contact container waypoint: ', contactContainer);
            $("#contact-item").addClass("highlight");
            $("#about-item").removeClass("highlight");
            $("#projects-item").removeClass("highlight");
        },
        offset: '90%'
    })

// the javascript way to select an element:
// document.getElementById('contact-container'),

// the jQuery equivalent:
// $('#contact-container);

$(document).on('ready', function() {  
  var winHeight = $(window).height(), 
      docHeight = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* Set the max scrollable area */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });
});
    
});
