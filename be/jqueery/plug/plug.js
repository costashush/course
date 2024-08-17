

$.fn.countdown = function () {

        setInterval(function () { alert("aaaayyaaayaaai") }, 1000);
    
    return this;
}


 $("#btn").click(function () {
    $("#main").countdown().css({background:"yello" });

 });