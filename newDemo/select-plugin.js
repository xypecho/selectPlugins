; (function ($) {
    $.fn.webSelect = function (obj) {
        var defaults = {
            serach: true
        };

        //options合并到defaults上,defaults继承了options上的各种属性和方法,将所有的赋值给endOptions
        var endOptions = $.extend(defaults, obj);
        console.log(this)
        this.each(function () {
            
        });
    };
})(jQuery);