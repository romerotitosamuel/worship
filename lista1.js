<<<<<<< HEAD
lista= [tuamorpormi, vieneya, soberano, grandeyfuerteomar, glorioso];
=======
lista= [teamojesus , somoselpueblodedios , asiestuamor , graciasublimees , ohgraciasencontrelavida  ];
>>>>>>> 43076337f2b0ecc3134dd3a22467d08b594c695b

listaprint= null;
listaunida= null;
// Escribe la lista de Ministerio
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