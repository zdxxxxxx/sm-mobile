/**
 * 幻灯片播放
 * @zdx
 */

;(function ($,w) {
    if(w.Slider){
        return
    }
    if($===undefined){
        var err = new Error('jquery is not define');
        throw err;
    }
    function Slider(option) {
        this.$slider = $(option.element).find('.slider-wrapper')||document;
        this.max = option.count||5;
        this.speed = option.speed||3000;
        this.showCtrl = option.showCtrl||false;
    }
    Slider.prototype = {
        constructor:Slider,
        timer:null,
        index:0,
        speed:1000,
        change:function (index) {
            var $slider = this.$slider;
            var $o_list = $slider.find('.slider-contain').find('li').eq(index);
            var $o_ctrl = $slider.find('.slider-controller').find('li').eq(index);
            this.index = index;
            $o_list.fadeIn(1000).siblings().fadeOut(500);
            $o_ctrl.addClass('active').siblings().removeClass('active');
        },
        startSlide: function(index) {
            var self = this;
            var i = index+1;
            var max = this.max;
            var speed = this.speed;
            return setInterval(function() {
                self.change(i);
                i++;
                if(i >= max) {
                    i = 0;
                }
            }, speed);
        },
        stopSlide: function() {
            clearInterval(this.timer);
            this.timer = null;
        },
        initCtrl:function () {
            var max = this.max;
            var $slider = this.$slider;
            var index = this.index;
            var dom = '<ul class="slider-controller">';
            for(var j = 0;j< max;j++){
                var active = index==j?'active':'';
                dom+='<li class="dote '+ active+' " data-index="'+ j +'"></li>'
            };
            dom = dom +'</ul>';
            $slider.append(dom);
        },
        init:function () {
            var self = this;
            var $slider = this.$slider;
            if(this.showCtrl){
                this.initCtrl();
            }
            $slider.find('.slider-controller li').on('click', function() {
                var index = $(this).data('index');
                self.stopSlide();
                self.change(index);
                self.timer = self.startSlide(index);
            });
            self.timer = self.startSlide(0);
        }
    };
    window.Slider = Slider;
})((function (w) {
    return w.jQuery||undefined
})(window),window);