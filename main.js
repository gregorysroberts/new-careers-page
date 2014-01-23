$(function() {

        $('.department').on('click', function (){
                $('.department li').css('display', 'none');
                $(this).find('li').css('display', 'block');
        });

        $('#open-positions p').on('click', function (){
                $('.department li').css('display', 'block');
        });

});