
var customScripts = {
        profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'easeOutQuart',
                        queue: false
                    }
                });
                return false;
            });
            $(window).smartresize(function () {
                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {

        $('#mainNav').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
            },
            end: function () {
                //I get fired when the animation is ending
            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    owlSlider: function () {
        var owl = $("#owl-demo");
        owl.owlCarousel();
        // Custom Navigation Events
        $(".next").click(function () {
            owl.trigger('owl.next');
        })
        $(".prev").click(function () {
            owl.trigger('owl.prev');
        })
    },
    bannerHeight: function () {
        var bHeight = $(".banner-container").height();
        $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
        customScripts.owlSlider();
        customScripts.bannerHeight();
    }
}


function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
    return false;
  }
  else {
return true;
  }
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}

var validname=document.getElementById("name").addEventListener("blur", function(){
  var name = document.getElementById('name').value;

  if(name.length == 0) {

    document.getElementById("errorname").innerHTML="Please enter valid name";
    return false;

  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*\s*$/)) {

    document.getElementById("errorname").innerHTML="Please enter valid name";
    return false;

  }

  document.getElementById("errorname").innerHTML="";
  return true;
}, false);


var validphone=document.getElementById("phone").addEventListener("blur", function(){

  var phone = document.getElementById('phone').value;
  if(phone.length == 0) {
      document.getElementById("errorphone").innerHTML="Please enter valid mobile number";
      validphone=true;
      return false;
    }

   if(!phone.match(/^[0-9]{10}$/)) {
      document.getElementById("errorphone").innerHTML="Please enter valid mobile number";
      return false;
    }
   

    document.getElementById("errorphone").innerHTML="";
    validphone=true;
    return true;

  
}, false);

var validemail=document.getElementById("email").addEventListener("blur", function(){

  var email = document.getElementById('email').value;
  if(email.length == 0) {

    document.getElementById("erroremail").innerHTML="Please enter valid email ID";
    return false;

  }

  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    document.getElementById("erroremail").innerHTML="Please enter valid email ID.";
    return false;

  }

  document.getElementById("erroremail").innerHTML="";
  return true;

  
}, false);

var validmessage= document.getElementById("message").addEventListener("blur", function(){

  var email = document.getElementById('message').value;
  if(email.length <20) {

    document.getElementById("errormessage").innerHTML="Please enter atleast 20 characters";
    return false;

  }

  document.getElementById("errormessage").innerHTML="";
  return true;

  
}, false);


document.getElementById("contact").onsubmit=function(){
    var ok=0;
    if(document.getElementById("name").value==""){
      document.getElementById("errorname").innerHTML="Please enter valid name";
      ok=false;
      
    }
    else{
      document.getElementById("errorname").innerHTML="";
      ok++;
    }

    if(document.getElementById("phone").value==""){
      document.getElementById("errorphone").innerHTML="Please enter valid address";
      ok=false;
      
    }
    else{
      document.getElementById("errorphone").innerHTML="";
      ok++;
    }

    if(document.getElementById("email").value==""){
      document.getElementById("erroremail").innerHTML="Please enter valid email";
      ok=false;
      
    }
    else{
      document.getElementById("erroremail").innerHTML="";
      ok++
    }

    if(document.getElementById("message").value==""){
      document.getElementById("errormessage").innerHTML="Please enter valid contact no";
      ok=false;
      
    }
    else{
      document.getElementById("errormessage").innerHTML="";
      ok++;
    }

    if(ok==4)
      return true;
    return false;
  
    

  };


$('document').ready(function () {
    customScripts.init();
});