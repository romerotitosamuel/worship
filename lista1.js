lista= [grandeyfuertemiel, señoreresfiel, hermosonombre, elsenoresmipastor, soberano];

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

