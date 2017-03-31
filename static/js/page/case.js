$(function () {
    var params = searchParams();
    var cp = params['company']||'PANDA';
    var companies = {
        PANDA: {
            banner: {
                title: "熊猫直播",
                info: '熊猫 TV是「国民老公」王思聪旗下的直播平台，在赛事直播、游戏直播、视频活动直播方面有超高的名气和知名度。',
                image: 'static/image/case/panda.png'
            },
            problem: '色情，暴恐、垃圾广告、水帖等垃圾内容，以及如营销活动作弊、刷人气、刷榜、刷等级、撞库登录、垃圾注册、暴力破解困扰等已经成为诸多移动直播平台亟需解决的难题，甚至也是抢占市场份额的关键。',
            answers: [{
                info: '1、基于数美积累千亿级的海量云欺诈库，最先进的深度学习和强化学习技术，自动精准识别直播内容中涉黄、广告、色情等违规内容；',
            }, {
                info: '2、同时基于OCR技术实现身份证自动识别，简化资料认证及人工审核环节；',
            }, {
                info: '3、通过用户轨迹模型分析，协助运营人员识别挂机、刷榜等恶意行为等；'
            }]
        },
        HUAJIAO: {
            banner: {
                title: "花椒直播",
                info: '花椒直播，中国最大的具有强明星属性的移动社交直播平台[1]  ，聚焦90、95后生活，每天实时进行互动和分享。',
                image: 'static/image/case/huajiao.png'
            },
            problem: '弹幕内容中存在的色情内容、色情广告，淫秽用语、涉政内容，挂机直播中存在的骗取平台人气、获取花椒豆的行为，机器人注册、恶意刷榜、刷人气、刷热度、刷关注的存在，给花椒带来了极大的运营风险，严重扰乱了平台的秩序。',
            answers: [{
                info: '数美与花椒深度合作，自动精准识别弹幕内容中涉黄、广告、色情等违规内容，基于OCR技术实现身份证自动识别，简化资料认证及人工审核环节，通过直播行业用户轨迹模型分析，协助花椒运营人员识别挂机、刷榜、贩卖花椒豆等恶意行为。',
            }]
        },
        LIEQU: {
            banner: {
                title: "花椒直播",
                info: '猎趣是国内领先二手交易平台， “你的闲置就是我的猎物”，猎趣主打闲置物品再流通，更快捷实现闲置物品的第二次利用。',
                image: 'static/image/case/liequ.png'
            },
            problem: '因业务与用户量的快速增长，平台中不可避免的出现了大量的广告内容，黄色头像，低俗评论，虚假交易、刷单、垃圾注册等问题，给猎趣的平台运营和用户体验带来的极大的挑战。',
            answers: [{
                info: '数美为猎趣深度定制的电商反欺诈解决方案，实时清理平台广告、色情低俗内容和不文明用语，杜绝QQ、微信等跨平台沟通，鉴别虚假交易、恶意评价、金融套现等不良用户行为。',
            }]
        },
        ZHONGXIN: {
            banner: {
                title: "花椒直播",
                info: '中信银行为中国大陆第七大银行，也是中国的全国性商业银行之一。其总资产为12000余亿港元，共有16000多名员工及540余家分支机构。',
                image: 'static/image/case/zhongxin.png'
            },
            problem: '传统金融风控往往采用大量人工特征处理和筛选的逻辑回归模型，海量数据场景下, 这种方法就会遇到瓶颈。',
            answers: [{
                info: '数美与中信银行在深入合作中一起探索大数据在传统金融中的应用。其中实时风控平台（为全业务类型交易提供实时、准确的欺诈检测）、诈骗账号识别项目（基于大数据技术，机器学习算法，分析可疑账户的行为，实时识别高危账户），均取得较好的效果与进展。',
            }]
        }
    };


    var title = $('title').html();
    title  = (companies[cp].banner.title||'')+'-'+title;
    $('title').html(title);
    var html = template('tpl',companies[cp]||companies['PANDA']);
    $('.content-wrapper').append(html);
    function searchParams() {
        var params = {};
        var search = window.location.search.substr(1).replace(/&+/,'&').split('&');
        for(var i=0;i<search.length;i++){
            var arr = search[i].split('=');
            params[arr[0]] = arr[1];
        }
        return params;
    }
});