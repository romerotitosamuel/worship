lista2= [ohven];
listaprint2= null;
listaunida2= null;

for (var n2=0; n2<lista2.length; n2++){
  listaprint2= '<button type="button" class="btn btn-outline-dark btn-block btn-sm" onclick="remplazar(' + lista2[n2].llave + ')">' + lista2[n2].nombre + " - " + lista2[n2].artista + "</button>";
  if (n2==0){
  listaunida2 = listaprint2;
  }
  else {
    listaunida2 = listaunida2 + listaprint2;
  }
}
document.getElementById("espaciolista2").innerHTML = listaunida2;