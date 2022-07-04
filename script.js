function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('barra-menu');
    
    if (BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "180px";
    }else{
        BarraMenuAberto.style.width = "0px";
    }
}
var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});
