$(function () {
    var animating = false;
    initActive();
    $('.sidebar-btn').click(function () {
        $('#menu').css("display",'block');
        var rem = hotcss.px2rem('220',640);
        $('.menu').animate({left:rem+'rem'},300);
        $('.modal').animate({opacity:0.3},300);
        $('.body').css('overflow','hidden')
    });
    $('.modal').on('click',hideMenu);
    $('.menu').on('click',hideMenu);
    $('.menu .first').on('click',function () {
        if(!animating){
            animating = true;
            var isActive = $(this).hasClass('active');
            var $sub = $(this).find('.second');
            if(isActive){
                $(this)
                    .removeClass('active');
                $sub.slideUp(300,function () {
                    animating = false
                });
                $(this)
                    .find('.iconfont')
                    .html('&#xe667;')
            }else{
                $(this).addClass('active')
                $sub.slideDown(300,function () {
                    animating = false
                });
                $(this)
                    .find('.iconfont')
                    .html('&#xe67c;')
            }
        }
    });
    function initActive() {
        var pathName = window.location.pathname.substr(1);
        var search = window.location.search;
        $('.menu').find('.first').removeClass('active').each(function () {
            if(pathName.indexOf($(this).data('page'))>-1){
                $(this).addClass('active').find('.second').css('display','block')
            }
        });
        $(".second").find('a').each(function () {
            if(search.indexOf($(this).data('page'))>-1){
                $(this).addClass('active');
            }
        });
    }
    function hideMenu(e) {
        e.stopPropagation();
        var className =e.target.className;
        var hideArr=['modal','menu'];
        if(hideArr.indexOf(className)>-1){
            var rem = hotcss.px2rem('640',640);
            $('.modal').animate({opacity:0},300);
            $('.menu').animate({left:rem+'rem'},300,function(){
                $('#menu').css("display",'none');
            });
            $('.body').css('overflow','auto')
        }
    }
});
