//判断是否包含class
function hasClass(ele, className) {
    var eleClassName = ' ' + ele.className + ' ';
    return eleClassName.includes(' ' + className + ' ');
}
//添加某个 class
function addClass(ele, className) {
    //存在的话不添加，不存在加
    if (!hasClass(ele, className)) {
        var eleClassName = ele.className;
        //判断之前是否有class，有之前的加空格加新的  没有 直接添加新的类名(不添加空格)
        var newClassName = eleClassName ? eleClassName + ' ' + className : className;
        ele.className = newClassName;
    }
}
//删除某个类
//box boxactive active active active a b
function removeClass(ele, className) {
    if (hasClass(ele, className)) {
        var oldEleClassName = ' ' + ele.className + ' ';
        var re = new RegExp(` ${className}(?= )`, 'g'); //删除前面空格保留后面的空格
        var newClassName = oldEleClassName.replaceAll(re, '');
        // 判断删除后的类的个数 一个没有移除class
        ele.className = newClassName.trim();
    }
}