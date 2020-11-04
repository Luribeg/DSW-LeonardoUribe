
document.getElementById("menu").addEventListener("click", function(){
    document.getElementById("fondoMenu").style.visibility="visible";
    });

document.getElementById("btnCerrar").addEventListener("click", function(){
    document.getElementById("fondoMenu").style.visibility="hidden";
    });

document.getElementById("btnCerrarEmergente").addEventListener("click", function(){
    document.getElementById("frameLectura").setAttribute("src","");
    document.getElementById("ventanaEmergente").style.visibility="hidden";
    });

function lectura(vinculo){  
     $frameLectura=document.getElementById("frameLectura");
     $frameLectura.setAttribute("src", vinculo.getAttribute("data-lectura"));
     document.getElementById("ventanaEmergente").style.visibility="visible";

}