window.addEventListener("load", function() {
    //tab-item切换
    var tabs = document.querySelectorAll(".tab>li>button");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(e) {
            e.preventDefault();
            for (let j = 0; j < tabs.length; j++) {

                removeClass(tabs[j], 'pink');
            }
            addClass(tabs[i], 'pink');

        })
    }
})