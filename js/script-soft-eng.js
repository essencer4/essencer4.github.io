jQuery(function(f){

    var element = f('#blfix');

    f(window).scroll(function(){

        element['fade'+ (f(this).scrollTop() > 3500 ? 'Out': 'In')](500);          

    });

});