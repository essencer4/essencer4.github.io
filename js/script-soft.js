jQuery(function(f){

    var element = f('#blfix');

    f(window).scroll(function(){

        element['fade'+ (f(this).scrollTop() > 3800 ? 'Out': 'In')](500);          

    });

});