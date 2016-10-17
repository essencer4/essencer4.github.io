jQuery(function(f){

    var element = f('#blfix');

    f(window).scroll(function(){

        element['fade'+ (f(this).scrollTop() > 1750 ? 'Out': 'In')](500);          

    });

});