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
    //统计增加
    var seos = document.querySelectorAll(".seo>p:last-child");
    var lines = document.querySelectorAll(".chat>div");
    console.log(this.document.querySelector(".chat>div:first-child .seo-con-line"));
    window.addEventListener("scroll", function() {
        if (window.pageYOffset >= this.document.querySelector(".courages").offsetTop) {
            lines[0].className = "one"
            lines[1].className = "two"
            lines[2].className = "three"
        }
    })
})