$(function () {
    var params = searchParams();
    var serviceId = params['product']||'POST_TEXT';
    var product = {
        POST_TEXT: {
            banner: {
                title: "垃圾文本识别",
                info: '基于强大的深度学习、强化学习等多种机器学习技术和海量的数据支撑，提供色情、广告涉政等垃圾文本识别服务。',
                image: 'static/image/product/icon-text.png'
            },
            usage: [{
                title: '色情分级',
                icon: '&#xe63e;',
                info: '将色情程度分为轻度、重度，平台可灵活调整。'
            }, {
                title: '广告识别',
                icon: '&#xe641;',
                info: '自适应识别敏感词变体，微信、QQ、手机号等联系方式变体。'
            }, {
                title: '涉政涉恐',
                icon: '&#xe643;',
                info: '智能识别政治、暴恐、违禁品等敏感词，并与网监数据实时同步。'
            }, {
                title: '智能语义分析',
                icon: '&#xe642;',
                info: '智能检测语义环境，精准拦截垃圾内容。'
            }, {
                title: '特色策略',
                icon: '&#xe666;',
                info: '直播平台可按照不同的角色、房间制定不同的策略。'
            }, {
                title: '运营功能',
                icon: '&#xe644;',
                info: '提供可视化后台，方便运营人员查看、分析垃圾文本识别情况。'
            }],
            adv: [{
                title: '历史行为画像',
                info: '识别文本内容本身的同时，综合分析设备、账号、IP、手机号的历史行为进行评估过滤。',
                image: 'static/image/product/product-2.jpg'
            },
                {
                    title: '多维度组合策略',
                    info: '基于广告、色情、上下文等多维度组合策略，识别垃圾文本内容。',
                    image: 'static/image/product/product-1.jpg'
                }
            ]
        },
        POST_IMG: {
            banner: {
                title: "垃圾图片识别",
                info: '基于强大的深度学习图片识别技术和数亿级实时更新的图像样本库，提供色情、广告、涉政等垃圾图片识别服务。',
                image: 'static/image/product/icon-img.png'
            },
            usage: [{
                title: '色情程度识别',
                icon: '&#xe63e;',
                info: '将图片的色情程度分为色情、性感、正常三个级别，智能学习用户审核标准。'
            }, {
                title: '广告图片识别',
                icon: '&#xe641;',
                info: '全方位识别广告图片及图片中的文字、二维码、联系方式、URL等广告内容。'
            }, {
                title: '相似图片识别',
                icon: '&#xe63f;',
                info: '基于强大的图片相似度匹配技术，对特定图片进行精确拦截。'
            }, {
                title: '涉政图片识别',
                icon: '&#xe643;',
                info: '准确识别国家领导人和其他政治人物图片，规避涉政风险。'
            }, {
                title: '运营功能',
                icon: '&#xe644;',
                info: '提供可视化后台，方便运营人员查看、分析整体垃圾图片识别情况。'
            }],
            adv: [{
                title: '历史行为画像',
                info: '识别文本内容本身的同时，综合分析设备、账号、IP、手机号的历史行为进行评估过滤。',
                image: 'static/image/product/product-2.jpg'
            }, ]
        },
        DEVICE_FINGERPRINT: {
            banner: {
                title: "设备指纹",
                info: '甄别设备属性及有效性，识别渠道推广中的虚假流量，提升推广效果，减少资金损失。',
                image: 'static/image/product/icon-device.png'
            },
            usage: [{
                title: '检测设备属性',
                icon: '&#xe66d;',
                info: '检测设备是否为异常设备，其原始属性信息是否被篡改。'
            }, {
                title: '检测设备有效性',
                icon: '&#xe7a6;',
                info: '甄别设备是否为虚拟机。'
            }, {
                title: '检测作弊环境',
                icon: '&#xe68f;',
                info: '检测设备中是否安装作弊软件。'
            }, {
                title: '检测应用环境变化',
                icon: '&#xe9db;',
                info: '检测是否为同账号更换设备，以及是否为同设备使用多账号。'
            }, {
                title: '检测应用渠道转化',
                icon: '&#xe645;',
                info: '对应用的推广渠道效果进行精准评估。'
            }, {
                title: '扩展服务',
                icon: '&#xe6a6;',
                info: '将设备与业务结合，解决业务自身的基础性问题。'
            }],

            adv: [{
                info: '通过设备信息的深度匹配，生成不可篡改的唯一设备标识。',
            }, {
                info: '兼容绝大部分手机型号。',
            }, {
                info: '100%模拟器识别。',
            }, ]
        },
        ROBOT_REGISTER: {
            banner: {
                title: "机器注册识别",
                info: '识别机器注册，前端防御，从源头降低作恶风险，保证业务健康发展。',
                image: 'static/image/product/icon-register.png'
            },
            usage: [{
                title: '虚拟机识别',
                icon: '&#xe646;',
                info: '执行环境多维检测技术，建立虚拟机识别模型。'
            }, {
                title: '设备农场',
                icon: '&#xe6b0;',
                info: '检测分析相同/相近环境下的批量行为。'
            }, {
                title: 'API破解',
                icon: '&#xe81a;',
                info: '独家设备唯一ID生成算法，防篡改、防伪造、安全加密。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
        ROBOT_LOGIN: {
            banner: {
                title: "机器登录识别",
                info: '对用户登录行为、帐号、IP等综合判定登录风险程度，提高虚假账号登录门槛，保障平台的账号安全。',
                image: 'static/image/product/icon-login.png'
            },
            usage: [{
                title: '虚拟机识别',
                icon: '&#xe646;',
                info: '执行环境多维检测技术，建立虚拟机识别模型。'
            }, {
                title: '设备农场',
                icon: '&#xe6b0;',
                info: '检测分析相同/相近环境下的批量行为。'
            }, {
                title: 'API破解',
                icon: '&#xe81a;',
                info: '独家设备唯一ID生成算法，防篡改、防伪造、安全加密。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
        RED_BAG: {
            banner: {
                title: "营销活动反作弊",
                info: '识别营销活动中的机器行为，保护平台利益。',
                image: 'static/image/product/icon-yx.png'
            },
            usage: [{
                title: '营销活动反作弊识别',
                icon: '&#xe647;',
                info: '有效识别营销活动中的机器行为，让更多真实用户参与活动，提升营销效果、保护平台利益。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
        FINANCE_MED: {
            banner: {
                title: "金融中介识别",
                info: '识别号码是否为金融中介，并提供其金融中介标签。',
                image: 'static/image/product/icon-zhongjie.png'
            },
            usage: [{
                title: '金融中介标签',
                icon: '&#xe648;',
                info: '识别无标签号码是否为金融中介，并为金融中介号码标识中介标签。'
            }, {
                title: '金融中介识别',
                icon: '&#xe737;',
                info: '通过海量金融中介标签库识别号码是否为金融中介。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
        PHONE_LABEL: {
            banner: {
                title: "手机号标签",
                info: '基于海量数据，获取手机号人工标签结果，识别各类通讯小号。',
                image: 'static/image/product/icon-label.png'
            },
            usage: [{
                title: '手机号标签',
                icon: '&#xe67e;',
                info: '基于亿级手机号标签库，获取其人工标签结果。'
            }, {
                title: '通讯小号识别',
                icon: '&#xe64a;',
                info: '基于数百万通讯小号数据，识别各类通讯小号。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
        LOAN_RISK: {
            banner: {
                title: "信贷风险评分",
                info: '通过大数据挖掘和分析用户信用数据，得出用户的信贷风险评分。分值越高代表信贷风险越高。',
                image: 'static/image/product/icon-score.png'
            },
            usage: [{
                title: '信贷风险评分',
                icon: '&#xe64b;',
                info: '通过大数据挖掘和分析用户信用数据，得出用户的信贷风险评分。分值越高代表信贷风险越高。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
        YELLOW_PAGE: {
            banner: {
                title: "黄页信息",
                info: '基于海量数据，获取手机号人工标签结果，识别各类通讯小号。',
                image: 'static/image/product/icon-poi.png'
            },
            usage: [{
                title: '黄页信息查询',
                icon: '&#xe649;',
                info: '输入电话号码，返回该号码的黄页信息。'
            }],

            adv: [{
                info: '基于海量数据，每日实时更新、清洗，确保数据的时效性与高质量、高可靠性。',
            }, {
                info: '多层次的实时自学习检测体系，综合多维度画像与决策引擎，结合业务场景定制策略。',
            }, {
                info: '快速便捷的接入方式，极速响应、超高吞吐、异地多活集群架构，保障服务的稳定性。',
            }, ]
        },
    };
    var title = $('title').html();
    title  = (product[serviceId].banner.title||'')+'-'+title;
    $('title').html(title);
    var html = template('tpl',product[serviceId]||product['POST_TEXT']);
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