//js style web-app
$(document).ready(function () {
    $('#btn-menu').click(function () { 
       $('.icon-nav').toggleClass('bi-x-lg');
    });   
    $('#dark-mood').click(function () { 
        $('body').toggleClass('dark-mood-them');
        $('.bi-brightness-high').toggleClass('bi-moon-stars');
    }); 
});

