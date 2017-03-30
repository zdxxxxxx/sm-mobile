$(function () {
    var bannerSliderOption = {
        element:'.banner-wrapper',
        count:4,
        speed:5000,
        showCtrl:true
    };
    var bannerSlider =  new Slider(bannerSliderOption);
    bannerSlider.init();

    var rateSliderOption = {
        element:'.rate-slider',
        count:6,
        speed:5000,
        showCtrl:true
    };
    var rateSlider =  new Slider(rateSliderOption);
    rateSlider.init();
});