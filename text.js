function reportWindowSize() {
    var d = document.getElementById('text');
    d.style.position = "absolute";
    d.style.left = (window.innerWidth/2)-d.offsetWidth/2+'px';
    d.style.top = window.innerHeight*0.75+'px';
}

function onLoad() {
    reportWindowSize();
    var d = document.getElementById('text');
    d.onclick = redirect;
    setInterval(reportWindowSize, 20);
}

function redirect(){
    window.location.href = "flat.html";
}
  
window.onload = onLoad;