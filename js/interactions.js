$(document).ready(function(event){ 
/*
-----------------------------------------------------------------------------
LANDING
-----------------------------------------------------------------------------
*/

        /* BLUR */
        $(".sign-up").click(function(){
            $(".blur-container").addClass("blur-screen");
            $("body").css({"overflow":"hidden"});
        });
                             
        $(".close").click(function(){
            $(".blur-container").removeClass("blur-screen");            
            $("body").css({"overflow":"auto"});
        });
        
        
        /* LIGHTBOX SIGN IN BOX */
        $(".sign-up").click(function(){
            $("#signup-popup").fadeIn(400);
        });
        
        $(".close").click(function(){
            $("#signup-popup").fadeOut(300);
        });



/*
-----------------------------------------------------------------------------
EXPLORA
-----------------------------------------------------------------------------
*/

        /* HOVER ON BOXES */
        $('.project-box-explore').on('mouseover', function(event){
            $(this).find('.box-hover').stop().fadeIn(200);
        });

        $('.project-box-explore').on('mouseout', function(event){
            $(this).find('.box-hover').stop().fadeOut(300);
        });
        
        /* BLUR */
        $(".box-hover, .search-box, .more-lovers").click(function(){
            $(".main-container").addClass("blur-screen");
            $("body").css({"overflow":"hidden"});
        });
                             
        $(".close").click(function(){
            $(".project-box-explore-preview").removeClass("fadeInUp");  
            $("body").css({"overflow":"auto"});
        });
        
        /* LIGHTBOX PROJECT PREVIEW */
        $(".box-hover").click(function(){
            $("#popup").fadeIn(400);
            $(".project-box-explore-preview").addClass("fadeInUp");
        });
        
        $(".close").click(function(){
            $("#popup").fadeOut(300);
            $(".main-container").removeClass("blur-screen");
        });

        /* BUTTON LOVE */
        $("#button-love").click(function(){
            $(".love").addClass("pulse");
        });

        document.getElementById("button-love").addEventListener("click", function (e) {
         var target = e.target;

            target.classList.toggle("love");
            target.classList.toggle("plus1");
        }, false);

        
        /* COLECCIONAR PROJECT */

        

        $("#button-addproject").click(function(){
            $(".add-project").addClass("pulse");
        });

        document.getElementById("button-addproject").addEventListener("click", function (e) {
         var target = e.target;

            target.classList.toggle("add-project");
            target.classList.toggle("add-options");
        }, false);

        


        
        /* LIGHTBOX SEARCH */
        
        $(".search-box").click(function(){ 
            $("#search-popup").fadeIn(400);
        });
        
        $(".close").click(function(){
            $("#search-popup").fadeOut(300);
        });
        
        /* FILTERS AND RECENTS OPEN/CLOSE*/
        
        $(".filters").click(function(){
            $(".filters-explore").toggle();
            $(".filters-explore").addClass("bounceInLeft");
        });
        
        $(".latest-search").click(function(){
            $(".recents-explore").toggle();
            $(".recents-explore").addClass("bounceInLeft");
        });
        
        /* APPLIED FILTERS */
        
        $(".filters-explore form input").click(function(){
            $(".applied-filters").fadeIn(400);
            $(".applied-filters ul").append("<li>nuevo filtro</li>");
            
        }); 
        
         $(".filters-explore .btn-gray-orange").click(function(){
            $(".applied-filters").fadeOut(400);
            $(".applied-filters ul").hide("<li>nuevo filtro</li>");
        });
        
         $(".filters-explore .btn-green").click(function(){
            $(".filters-explore").fadeOut(400);
            $(".filters-explore").addClass("bounceOutLeft"); 
        });         
        
    });
        
    /* ACCORDION */    
    $(function() {
        var icons = {
          header: "icon-open-accordion",
          activeHeader: "icon-close-accordion"
        };
        $( "#accordion, #accordion-2" ).accordion({
            icons: icons,
            collapsible: true,
            heightStyle: "content",
            animate: {duration: 300, easing: "swing"}
        });
        $( "#toggle" ).button().click(function() {
          if ( $( "#accordion, #accordion-2" ).accordion( "option", "icons" ) ) {
            $( "#accordion, #accordion-2" ).accordion( "option", "icons", null );
          } else {
            $( "#accordion, #accordion-2" ).accordion( "option", "icons", icons );
          }
        });


/*
-----------------------------------------------------------------------------
POST
-----------------------------------------------------------------------------
*/

        /* BLUR */
        $(".more-lovers").click(function(){
            $(".main-container").addClass("blur-screen");
            $("body").css({"overflow":"hidden"});
        });
                             
        $(".close").click(function(){
            $(".project-box-explore-preview").removeClass("fadeInUp");
            $(".main-container").removeClass("blur-screen");            
            $("body").css({"overflow":"auto"});
        });
        
        
        /* LIGHTBOX PROJECT PREVIEW */
        $(".more-lovers").click(function(){
            $("#popup-lovers").fadeIn(400);
            $(".list-lovers").addClass("fadeInUp");
        });
        
        $(".close").click(function(){
            $("#popup-lovers").fadeOut(300);
            $(".list-lovers").removeClass("blur-screen"); 
        });
        
        /* FIXED SIDEBAR MENU */
        $.lockfixed(".post-sidebar-menu",{offset: {top: 20, bottom: 150}});

        /* FIXED 45 LOGO AND TOP BAR */
        var windw = this;

        $.fn.followTo = function ( pos ) {
            var $this = this,
                $window = $(windw);

            $window.scroll(function(e){
                if ($window.scrollTop() > pos) {
                    $this.css({
                        position: 'absolute',
                        top: pos
                    });
                } else {
                    $this.css({
                        position: 'fixed',
                        top: 0
                    });
                }
            });
        };

        $('#logo-post, #content-color').followTo(340);
        
        
        /* MAIN IMAGE PARALLAX */
        
        /* detect touch */
        if("ontouchstart" in window){
            document.documentElement.className = document.documentElement.className + " touch";
        }
        if(!$("html").hasClass("touch")){
            /* background fix */
            $(".parallax").css("background-attachment", "fixed");
        }

        /* fix vertical when not overflow
        call fullscreenFix() if .fullscreen content changes */
        function fullscreenFix(){
            var h = $('body').height();
            // set .fullscreen height
            $(".content-b").each(function(i){
                if($(this).innerHeight() <= h){
                    $(this).closest(".fullscreen").addClass("not-overflow");
                }
            });
        }
        $(window).resize(fullscreenFix);
        fullscreenFix();

        /* resize background images */
        function backgroundResize(){
            var windowH = $(window).height();
            $(".background").each(function(i){
                var path = $(this);
                // variables
                var contW = path.width();
                var contH = path.height();
                var imgW = path.attr("data-img-width");
                var imgH = path.attr("data-img-height");
                var ratio = imgW / imgH;
                // overflowing difference
                var diff = parseFloat(path.attr("data-diff"));
                diff = diff ? diff : 0;
                // remaining height to have fullscreen image only on parallax
                var remainingH = 0;
                if(path.hasClass("parallax") && !$("html").hasClass("touch")){
                    var maxH = contH > windowH ? contH : windowH;
                    remainingH = windowH - contH;
                }
                // set img values depending on cont
                imgH = contH + remainingH + diff;
                imgW = imgH * ratio;
                // fix when too large
                if(contW > imgW){
                    imgW = contW;
                    imgH = imgW / ratio;
                }
                //
                path.data("resized-imgW", imgW);
                path.data("resized-imgH", imgH);
                path.css("background-size", imgW + "px " + imgH + "px");
            });
        }
        $(window).resize(backgroundResize);
        $(window).focus(backgroundResize);
        backgroundResize();

        /* set parallax background-position */
        function parallaxPosition(e){
            var heightWindow = $(window).height();
            var topWindow = $(window).scrollTop();
            var bottomWindow = topWindow + heightWindow;
            var currentWindow = (topWindow + bottomWindow) / 3;
            $(".parallax").each(function(i){
                var path = $(this);
                var height = path.height();
                var top = path.offset().top;
                var bottom = top + height;
                // only when in range
                if(bottomWindow > top && topWindow < bottom){
                    var imgW = path.data("resized-imgW");
                    var imgH = path.data("resized-imgH");
                    // min when image touch top of window
                    var min = 0;
                    // max when image touch bottom of window
                    var max = - imgH + heightWindow;
                    // overflow changes parallax
                    var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
                    top = top - overflowH;
                    bottom = bottom + overflowH;
                    // value with linear interpolation
                    var value = min + (max - min) * (currentWindow - top) / (bottom - top);
                    // set background-position
                    var orizontalPosition = path.attr("data-oriz-pos");
                    orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                    $(this).css("background-position", orizontalPosition + " " + value + "px");
                }
            });
        }
        if(!$("html").hasClass("touch")){
            $(window).resize(parallaxPosition);
            //$(window).focus(parallaxPosition);
            $(window).scroll(parallaxPosition);
            parallaxPosition();
        }
        
         /* LOCATION INFO */
        
        $("#ver-mas").click(function(){
        $('.location-open-container').addClass("bounceInRight");
        $('.location-open-container').fadeIn(200);
        $('.location-close-container').fadeOut(200);
        });
        
        $("#ver-menos").click(function(){
        $('.location-open-container').removeClass("bounceInRight");
        $('.location-open-container').addClass("bounceOutRight");
        $('.location-open-container').fadeOut(200);
        $('.location-close-container').fadeIn(200);
        
        });
        
        /* ANCHOR */
        
        $('.comments').click(function(){
            $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
            }, 300);
        return false;
        });
        
        $('.location').click(function(){
            $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
            }, 300);
        return false;
        });
        
        $('.similar-posts').click(function(){
            $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
            }, 300);
        return false;
        });

        
/*
-----------------------------------------------------------------------------
SECTION
-----------------------------------------------------------------------------
*/
        
        
        
        
});







