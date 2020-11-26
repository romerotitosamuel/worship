
lista2 = [alabanzayhonor, alqueestasentadoeneltrono, asiestuamor, cambiaremitristeza, comodijiste, creoenti, degloriaengloriabarrientos, diosdeloimposible, desdemiinterior, diosincomparable, eresfiel, eleselrey, gloriaenloalto, glorioso, grandeyfuertemiel, grandeyfuerteomar, hosannabarrientos, increible, nohaylugarmasalto, ohven, ohgraciasencontrelavida, pormimurio, quiennosseparara, señoreresfiel, siempreestarasamilado, soberano, somoselpueblodedios, soyfeliz, tuguiasmidestino, tempranoyotebuscare, teamojesus, tufidelidad, tuamorpormi, vamosacantar, vieneya, waymaker]

listaprint2= null;
listaunida2= null;
// Escribe la lista de Ministerio
for (var n=0; n<lista2.length; n++){
  listaprint2= '<button type="button" class="btn btn-outline-dark btn-block btn-sm" onclick="remplazar(' + lista2[n].llave + ')">' + lista2[n].nombre + " - " + lista2[n].artista + "</button>";
  if (n==0){
  listaunida2 = listaprint2;
  }
  else {
    listaunida2 = listaunida2 + listaprint2;
  }
}
document.getElementById("espaciolista2").innerHTML = listaunida2;
