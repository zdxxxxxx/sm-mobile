$(function () {
    $('.sidebar-btn').click(function () {
        $('#menu').css("display",'block');
        var rem = hotcss.px2rem('220',640);
        $('.menu').animate({left:rem+'rem'},500);
        $('.modal').animate({opacity:0.3},500);
    });
    $('.modal').on('click',hideMenu);
    $('.menu').on('click',hideMenu);

    function hideMenu(e) {
        e.stopPropagation();
        var className =e.target.className;
        var hideArr=['modal','menu'];
        if(hideArr.indexOf(className)>-1){
            var rem = hotcss.px2rem('640',640);
            $('.modal').animate({opacity:0},500);
            $('.menu').animate({left:rem+'rem'},500,function(){
                $('#menu').css("display",'none');
            });
        }
    }
});
