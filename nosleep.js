var noSleep = new NoSleep();
 
function enableNoSleep() {
  noSleep.enable();
  document.removeEventListener('touchstart', enableNoSleep, false);
}
 
// Habilitar el seguro para no bloquear la pantalla
document.addEventListener('touchstart', enableNoSleep, false)