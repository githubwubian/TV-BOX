var rule = {
    title: '七年影视',
    模板: '首图2',
    host: 'https://www.haying.tech',
    // url:'/vodshow/fyclass--------fypage---.html',
    url: '/vodshow/fyfilter.html',
    filterable: 1,//是否启用分类筛选,
    filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
    filter: {
        "1": [{
            "key": "cateId",
            "name": "分类",
            "value": [{"n": "全部", "v": "1"}, {"n": "科幻片", "v": "8"}, {"n": "动作片", "v": "5"}, {
                "n": "福利片",
                "v": "17"
            }, {"n": "喜剧片", "v": "6"}, {"n": "爱情片", "v": "7"}, {"n": "恐怖片", "v": "9"}, {
                "n": "剧情片",
                "v": "10"
            }, {"n": "网络电影", "v": "16"}, {"n": "动画电影", "v": "19"}, {"n": "战争片", "v": "11"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "大陆"}, {"n": "香港", "v": "香港"}, {
                "n": "台湾",
                "v": "台湾"
            }, {"n": "美国", "v": "美国"}, {"n": "韩国", "v": "韩国"}, {"n": "日本", "v": "日本"}, {
                "n": "泰国",
                "v": "泰国"
            }, {"n": "新加坡", "v": "新加坡"}, {"n": "马拉西亚", "v": "马拉西亚"}, {
                "n": "印度",
                "v": "印度"
            }, {"n": "英国", "v": "英国"}, {"n": "法国", "v": "法国"}, {"n": "加拿大", "v": "加拿大"}, {
                "n": "西班牙",
                "v": "西班牙"
            }, {"n": "俄罗斯", "v": "俄罗斯"}, {"n": "其它", "v": "其它"}]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {
                "n": "2022",
                "v": "2022"
            }, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {
                "n": "2018",
                "v": "2018"
            }, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {
                "n": "2014",
                "v": "2014"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "time"}, {"n": "人气", "v": "hits"}, {"n": "评分", "v": "score"}]
        }],
        "2": [{
            "key": "cateId",
            "name": "分类",
            "value": [{"n": "全部", "v": "2"}, {"n": "国产剧", "v": "12"}, {"n": "网剧", "v": "20"}, {
                "n": "欧美剧",
                "v": "15"
            }, {"n": "日韩剧", "v": "14"}, {"n": "港台剧", "v": "13"}, {"n": "海外剧", "v": "18"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "大陆"}, {"n": "香港", "v": "香港"}, {
                "n": "台湾",
                "v": "台湾"
            }, {"n": "美国", "v": "美国"}, {"n": "韩国", "v": "韩国"}, {"n": "日本", "v": "日本"}, {
                "n": "泰国",
                "v": "泰国"
            }, {"n": "新加坡", "v": "新加坡"}, {"n": "马来西亚", "v": "马来西亚"}, {
                "n": "印度",
                "v": "印度"
            }, {"n": "英国", "v": "英国"}, {"n": "法国", "v": "法国"}, {"n": "加拿大", "v": "加拿大"}, {
                "n": "西班牙",
                "v": "西班牙"
            }, {"n": "俄罗斯", "v": "俄罗斯"}, {"n": "其它", "v": "其它"}]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {
                "n": "2022",
                "v": "2022"
            }, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {
                "n": "2018",
                "v": "2018"
            }, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {
                "n": "2014",
                "v": "2014"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "time"}, {"n": "人气", "v": "hits"}, {"n": "评分", "v": "score"}]
        }],
        "3": [{
            "key": "class",
            "name": "剧情",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "搞笑"}, {"n": "竞技", "v": "竞技"}, {
                "n": "真人秀",
                "v": "真人秀"
            }, {"n": "脱口秀", "v": "脱口秀"}, {"n": "游戏", "v": "游戏"}, {"n": "选秀", "v": "选秀"}, {
                "n": "情感",
                "v": "情感"
            }, {"n": "生活", "v": "生活"}, {"n": "运动", "v": "运动"}, {"n": "旅行", "v": "旅行"}, {
                "n": "音乐",
                "v": "音乐"
            }, {"n": "访谈", "v": "访谈"}, {"n": "纪录", "v": "纪录"}, {"n": "文化", "v": "文化"}, {
                "n": "职场",
                "v": "职场"
            }, {"n": "美食", "v": "美食"}, {"n": "日常", "v": "日常"}, {"n": "舞蹈", "v": "舞蹈"}, {
                "n": "推理",
                "v": "推理"
            }, {"n": "晚会", "v": "晚会"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "大陆"}, {"n": "香港", "v": "香港"}, {
                "n": "台湾",
                "v": "台湾"
            }, {"n": "美国", "v": "美国"}, {"n": "韩国", "v": "韩国"}, {"n": "日本", "v": "日本"}, {
                "n": "其它",
                "v": "其它"
            }]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {
                "n": "2022",
                "v": "2022"
            }, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {
                "n": "2018",
                "v": "2018"
            }, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {
                "n": "2014",
                "v": "2014"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "time"}, {"n": "人气", "v": "hits"}, {"n": "评分", "v": "score"}]
        }],
        "4": [{
            "key": "class",
            "name": "剧情",
            "value": [{"n": "全部", "v": ""}, {"n": "搞笑", "v": "搞笑"}, {"n": "冒险", "v": "冒险"}, {
                "n": "竞技",
                "v": "竞技"
            }, {"n": "热血", "v": "热血"}, {"n": "悬疑", "v": "悬疑"}, {"n": "推理", "v": "推理"}, {
                "n": "益智",
                "v": "益智"
            }, {"n": "机甲", "v": "机甲"}, {"n": "少女", "v": "少女"}, {"n": "恋爱", "v": "恋爱"}, {
                "n": "日常",
                "v": "日常"
            }, {"n": "校园", "v": "校园"}, {"n": "奇幻", "v": "奇幻"}, {"n": "玄幻", "v": "玄幻"}, {
                "n": "魔幻",
                "v": "魔幻"
            }, {"n": "科幻", "v": "科幻"}, {"n": "武侠", "v": "武侠"}]
        }, {
            "key": "area",
            "name": "地区",
            "value": [{"n": "全部", "v": ""}, {"n": "大陆", "v": "大陆"}, {"n": "台湾", "v": "台湾"}, {
                "n": "美国",
                "v": "美国"
            }, {"n": "韩国", "v": "韩国"}, {"n": "日本", "v": "日本"}, {"n": "其它", "v": "其它"}]
        }, {
            "key": "year",
            "name": "年份",
            "value": [{"n": "全部", "v": ""}, {"n": "2024", "v": "2024"}, {"n": "2023", "v": "2023"}, {
                "n": "2022",
                "v": "2022"
            }, {"n": "2021", "v": "2021"}, {"n": "2020", "v": "2020"}, {"n": "2019", "v": "2019"}, {
                "n": "2018",
                "v": "2018"
            }, {"n": "2017", "v": "2017"}, {"n": "2016", "v": "2016"}, {"n": "2015", "v": "2015"}, {
                "n": "2014",
                "v": "2014"
            }]
        }, {
            "key": "by",
            "name": "排序",
            "value": [{"n": "时间", "v": "time"}, {"n": "人气", "v": "hits"}, {"n": "评分", "v": "score"}]
        }]
    },
    filter_def: {
        1: {cateId: '1', by: 'time'},
        2: {cateId: '2', by: 'time'},
        3: {cateId: '3', by: 'time'},
        4: {cateId: '4', by: 'time'}
    },
    class_parse: '.stui-header__menu li:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    tab_exclude: '影片|评论|榜单|网络|最新推荐',
    parse: 'https://jx.lasi.fun/blue/index.php?url=',
    lazy: $js.toString(() => {
        let html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1])
        let url = html.url
        let from = html.from
        if (html.encrypt == '1') {
            url = unescape(url);
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url));
        }
        log('切片地址:' + url);

        if (url.includes('.m3u8')) {
            input = url;
        } else if (from == 'blue') {
            let html = request(rule.parse + url, {
                headers: {
                    'Referer': 'https://www.haying.tech/',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',

                },
                redirect: false,
                withHeaders: true
            })
            log(html)
            let parseurl = JSON.parse(html).location;
            log(parseurl)
            let play = JSON.parse(request(parseurl.split('?url=')[1], {
                headers: {
                    'Origin': 'https://jx.lasi.fun',
                    'Host': 'cdn.yangtuyun.cn',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
                },
                redirect: false,
                withHeaders: true
            })).location + '#.m3u8';
            //let playurl=fetch(play,{headers:{'Host': 'download4.caiyun.feixin.10086.cn'}})
            log(play)
            input = play

        } else {
            input
        }
    }),
    //lazy:"js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);log(html);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",
    二级: {
        "title": ".v-thumb&&title;.data--span:eq(0)&&Text",
        "img": ".lazyload&&data-original",
        "desc": ".data:eq(3)&&Text;;;.data--span:eq(1)&&Text;.data--span:eq(2)&&Text",
        "content": ".desc&&Text",
        "tabs": ".stui-pannel__head h3",
        "lists": ".stui-content__playlist:eq(#id) li"
    },
}