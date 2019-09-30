

//Lista Ministerio

lista= [siempreestarasamilado , glorioso, hosannabarrientos ];
listaprint= null;
listaunida= null;

for (var n=0; n<lista.length; n++){
  listaprint= '<button type="button" class="btn btn-outline-dark btn-block btn-sm" onclick="remplazar(' + lista[n].llave + ')">' + lista[n].nombre + " - " + lista[n].artista + "</button>";
  if (n==0){
  listaunida = listaprint;
  }
  else {
    listaunida = listaunida + listaprint;
  }
}
document.getElementById("espaciolista").innerHTML = listaunida;


//FUNCION DE REMPLAZAR LA CANCION SOLICITADA:
function remplazar(cancionSolicitada){
    document.getElementById("song").innerHTML= cancionSolicitada.contenido;
    
  }

//FUNCION DE OCULTAR CHORDS
function hidechord(){
        document.getElementById("chordvisibility").innerHTML="pre a {display:none;}";
}
function showchord(){
        document.getElementById("chordvisibility").innerHTML="";
}
//FUNCION DE AUMENTAR TAMAÑO DE LETRA
function upsize(tam){
        document.getElementById("textResize").innerHTML="pre {font-size:"+ tam +"%;}";
}
//FUNCION BAJAR MEDIO TONO
function bajaMedioTono(){
        var tono = document.getElementsByTagName("a");
    
        for (var n=0 ; n < tono.length ; n++){
    
          switch(tono[n].textContent){
              
              case "C":
                document.getElementsByTagName("a")[n].innerHTML= "B" ; break;
              case "C#":
                document.getElementsByTagName("a")[n].innerHTML= "C" ; break;
              case "D":
                document.getElementsByTagName("a")[n].innerHTML= "C#" ; break;
              case "Eb":
                document.getElementsByTagName("a")[n].innerHTML= "D" ; break;
              case "E":
                document.getElementsByTagName("a")[n].innerHTML= "Eb" ; break;
              case "F":
                document.getElementsByTagName("a")[n].innerHTML= "E" ; break;
              case "F#":
                document.getElementsByTagName("a")[n].innerHTML= "F" ; break;
              case "G":
                document.getElementsByTagName("a")[n].innerHTML= "F#" ; break;
              case "G#":
                document.getElementsByTagName("a")[n].innerHTML= "G" ; break;
              case "A":
                document.getElementsByTagName("a")[n].innerHTML= "G#" ; break;
              case "Bb":
                document.getElementsByTagName("a")[n].innerHTML= "A" ; break;
              case "B":
                document.getElementsByTagName("a")[n].innerHTML= "Bb" ; break;

              case "Cm":
                document.getElementsByTagName("a")[n].innerHTML= "Bm" ; break;
              case "C#m":
                document.getElementsByTagName("a")[n].innerHTML= "Cm" ; break;
              case "Dm":
                document.getElementsByTagName("a")[n].innerHTML= "C#m" ; break;
              case "Ebm":
                document.getElementsByTagName("a")[n].innerHTML= "Dm" ; break;
              case "Em":
                document.getElementsByTagName("a")[n].innerHTML= "Ebm" ; break;
              case "Fm":
                document.getElementsByTagName("a")[n].innerHTML= "Em" ; break;
              case "F#m":
                document.getElementsByTagName("a")[n].innerHTML= "Fm" ; break;
              case "Gm":
                document.getElementsByTagName("a")[n].innerHTML= "F#m" ; break;
              case "G#m":
                document.getElementsByTagName("a")[n].innerHTML= "Gm" ; break;
              case "Am":
                document.getElementsByTagName("a")[n].innerHTML= "G#m" ; break;
              case "Bbm":
                document.getElementsByTagName("a")[n].innerHTML= "Am" ; break;
              case "Bm":
                document.getElementsByTagName("a")[n].innerHTML= "Bbm" ; break;
          }
        } 
      };


      