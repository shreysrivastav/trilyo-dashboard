(function ($) {
    "use strict";

    $(function() {  
        $(".cmn-scroll-wrap").niceScroll();
    });

    $(document).ready(function(){
        $('#search').on('click', function(e){
            e.preventDefault();
            if(e.target.className == 'sc') {
                $('#msg-dropdown').css('display','none');
                $('#search-inbox').css('display','block');
                e.target.className = 'tm';
            } else if(e.target.className == 'tm') {
                $('#msg-dropdown').css('display','block');
                $('#search-inbox').css('display','none');
                e.target.className = 'sc';

            }
            
        })

        $('#m-search').on('click', function(e){
            e.preventDefault();
            
            if(e.target.className == 'sc') {
                $('.mobile-search').css('display','block');
                console.log('sc-clicked')
                e.target.className = 'tm';
            } else if(e.target.className == 'tm') {
                $('.mobile-search').css('display','none');
                console.log('tm-clicked')
                e.target.className = 'sc';

            }
            
        })


        // Script for offcanvas menu 
        $('.mobile-menu').on('click', function(){
            $('.offcanvas-menu').addClass('show');
        })
        $('.close-canvas-menu').on('click', function(){
            $('.offcanvas-menu').removeClass('show');
        })



        // script for conversation field
        $('.inbox-rw').on('click', function(){
            $('#conversation-part').addClass('show');
        })

        $('#back-to-inbox').on('click', function(){
            $('#conversation-part').removeClass('show');
        })

        $('#user-pf').on('click', function(){
            $('#profile-part').addClass('show');
        })

        $('#back-to-conv').on('click', function(){
            $('#profile-part').removeClass('show');
        })




        $('.dot-menu > li > a.ss').on('click', function(e){
            e.preventDefault();
            $('.dot-menu > li > ul.submenu').toggleClass('sw');
        })
        $('.assign-to').on('click', function(e){
            e.preventDefault();
            $('.dot-menu li ul.submenu li.second-step').addClass('show');
        })


        

    })












})(jQuery);	 // End line