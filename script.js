$(".ship").click(function() {
    $(".ship").hide();
});

$(".ship").click(function() {
    $(".map").show();
});

$(".map").hide();

$(".ship").click(function() {
    $("p").show();
});

$("p").hide();

$(".ship").click(function() {
    $("h1").hide();
});

$(".map").click(function() {
    $(".island").show();
    $("p").hide();
    $(".map").hide();
    $("h2").show();
});   
    
$(".island").hide();
$("h2").hide();

$(".island").hover(function() {
    $(".treasure").show();
    $(".island").hide();
    $("h2").hide();
});
$(".treasure").hide();


