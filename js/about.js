window.addEventListener("load", function() {
    //shade背景渐变
    var shades = document.querySelectorAll(".shade");
    for (let i = 0; i < shades.length; i++) {
        shades[i].addEventListener("mouseenter", function() {
            addClass(this, "shade-active");
        });
        shades[i].addEventListener("mouseleave", function() {
            removeClass(this, "shade-active");
        })
    }
})