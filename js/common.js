window.addEventListener("load", function() {
    //header-top下拉菜单
    var lis = document.querySelectorAll(".header-top nav>ul>li")
    for (let i = 0; i < lis.length; i++) {
        if (i != lis.length - 1) {
            lis[i].addEventListener("mouseenter", function() {
                console.log(i);
                addClass(this.children[1], "header-top-slide-slide");
            });
            lis[i].addEventListener("mouseleave", function() {
                removeClass(this.children[1], "header-top-slide-slide")

            });
        }
    };
    //侧边栏
    document.querySelector(".menu").addEventListener("click", function() {
        document.querySelector(".slidebar .bg ").style.display = 'block';
        setTimeout(function() {
            document.querySelector(".slidebar .bg ").style.opacity = .5;
        }, 10);
        addClass(document.querySelector(".slidebar .bar "), "bar-active")
    });
    //关闭侧边栏
    document.querySelector(".close").addEventListener("click", function() {
        document.querySelector(".slidebar .bg ").style.display = 'none';

        setTimeout(function() {
            document.querySelector(".slidebar .bg ").style.opacity = 0;
        }, 10);
        removeClass(document.querySelector(".slidebar .bar "), "bar-active")
    });
    //shade部分
    var photos = document.querySelectorAll(".photo-item");
    for (let i = 0; i < photos.length; i++) {
        photos[i].addEventListener("mouseenter", function() {
            this.children[3].style.left = 0;
        });
        photos[i].addEventListener("mouseleave", function() {
            this.children[3].style.left = "-100% ";
        });
    }

})