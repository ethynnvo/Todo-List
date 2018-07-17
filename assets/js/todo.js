// Mark todos as completed by clicking on them
$("ul").on("click", "li", (function(){
    $(this).toggleClass("completed");
}));

// delete todos using the delete button
$("ul").on("click", "span", (function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
}));

// add todos from input box
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo form input
       let todoText = $(this).val();
       $(this).val("");
       // create new todo from stored value
       $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

// fade add todo bar in and out
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});