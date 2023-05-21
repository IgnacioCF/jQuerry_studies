
$("button").css("background","lightgreen");
$("button").css("font-size","17px")

console.log($("button").css("font-size"))
$("h1").addClass("big-title")


// primero editamos el style en css , luego usamos jquerry para seleccionar el elemento y cambiarlo


$("#texto").addClass("big-title2 shadow")
// estamos aplicado dos classesa a "p" solo agregamos un espacio

// $("P").text("ha cambiado!")
// para cambiar text

console.log($("img").attr("src"))
//changig attribute
$("img").attr("src","moto2.jpg").css({"max-width":"10%", "border-radius":"50%"})
// adding miltiple properties

// we change the picture!

// luego aprender como abrir imagenes en el el mismo nabegador usando botones 

$("button").click(function(){$("h1").css("color","purple")})
$("h1").mouseout(function(){
    $("h1").css({"color":"gold", "background-color":"black"})
})

$("#ultimo").click(function(){
    $("body").css("background-color","yellow")
});



document.addEventListener("keypress", function(){console.log(event)});
document.addEventListener("click", function(){console.log(event)});
// detectig the event keypress and mouse's click
$("h1").click(function(){$("h1").addClass("big-title4")})

$("input").keypress(function(event){
   $("h1").text (event.key)
})
$("#texto").on("mouseover",function(){
$("#texto").addClass("big-title4")
})

//MDN web docs look for more events

$("#lastButton").on("click",function(){
    $("#ultimoIntento").css("font-size","40px").slideUp().slideDown().animate({opacity:0.5},1500)
    ;});
    //(selector).animate({styles},speed,easing,callback)

    $(document).ready(function(){
        $("#btn1").click(function(){
          $("#box").animate({height: "300px"});
        });
        $("#btn2").click(function(){
          $("#box").animate({height: "100px"});
        });
      });

      