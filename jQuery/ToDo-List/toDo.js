$('ul').on("click", "li", function(){
        $(this).toggleClass("comp")
})

$('ul').on("click", "span", function(e){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();
    });
    e.stopPropagation();
})
$('input').on("keypress", function(e){
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append(`<li><span><i class="far fa-trash-alt"></i></span> ${todoText}</li>`);
    }
})

$('.fa-plus').click(function(){
    $('input').fadeToggle(400)
})