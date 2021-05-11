var menuGeneral = document.getElementById('menu-boton')
var arrow = document.getElementById('arrow')
var menuDesplegable = document.getElementById('menu-desplegable')
function toggleStyle(el, styleName, value) {
    if (menuDesplegable.style[styleName] === '') {
        menuDesplegable.style[styleName] = value;
        arrow.classList.remove("down");
        arrow.classList += " up"
    } else {
        menuDesplegable.style[styleName] = '';
        arrow.classList.remove("up");
        arrow.classList += " down"
    }
}
menuGeneral.addEventListener('click', function(){
    toggleStyle(menuDesplegable, "display", "block");
})