document.getElementById("increase").onclick = function() {
    counter = document.getElementById("counter");
   counter.innerHTML++; 
}
document.getElementById("thedecrese").onclick = function() {
      counter = document.getElementById("counter");
   counter.innerHTML--; 
}
document.getElementById("reset").onclick = function() {
    counter = document.getElementById("counter");
    counter.innerHTML = 0;
}