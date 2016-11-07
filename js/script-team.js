jQuery(function(f){

    var element = f('#blfix');

    f(window).scroll(function(){

        element['fade'+ (f(this).scrollTop() > 1350 ? 'Out': 'In')](500);          

    });

});