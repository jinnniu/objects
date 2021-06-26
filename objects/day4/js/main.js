$(".battery").on('click', function(){
    $(".wake").css({
        'z-index': 1,
        'opacity': 1
    });

    $(".battery").css({
        'z-index': -1,
        'opacity': 0
    });

    $(".starting").css({
        'opacity': 0
    });

    $(".text").css({
        'z-index': -1,
        'opacity': 0
    });

    $(".next").css({
        'opacity': 1
    });

    $(".wake").children().trigger('play');
})

$("#cloth").on('click', function(){
    $(".wear").css({
        'opacity': 1,
        'z-index': 30
    });
    $(".eat").css({
        'opacity': 0,
        'z-index': 10
    });

    $(".wear").children().trigger('play');
})

$("#eating").on('click', function(){
    $(".eat").css({
        'opacity': 1,
        'z-index': 30
    });
    $(".wear").css({
        'opacity': 0,
        'z-index': 10
    });

    $(".eat").children().trigger('play');
})

$("#tomorrow").on('click', function(){
   alert('The battery is flat!');

   $(".battery").css({
    'z-index': 1,
    'opacity': 1
   });

    $(".next").css({
        'opacity': 0
    });

    $(".starting").css({
        'opacity': 1,
        'z-index': 30
    });

    $(".wake").css({
        'opacity': 1,
        'z-index': 20
    });

    $(".text").css({
        'opacity': 1,
        'z-index': 30
    });

    $(".eat").css({
        'opacity': 0,
        'z-index': -1
    });
    $(".wear").css({
        'opacity': 0,
        'z-index': -1
    });

})