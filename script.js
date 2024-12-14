window.onresize = screen;
window.onload = screen;
function screen() {
    width = window.innerWidth;
    height = window.innerHeight;
    document.getElementById("size").innerHTML = "width: " + width + "px, height: " + height + "px";
}