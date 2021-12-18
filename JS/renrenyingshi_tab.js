let body = $response.body
body = JSON.parse(body)
body['data']['homeBarPage'] = [
      {
        "selPag" : "http://img.rr.tv/barSelpag/20210310/o_1615343961034.pag",
        "pageType" : 0,
        "darkUnselImg" : "http://img.rr.tv/cover/20210310/o_1615343982560.png",
        "webUrl" : "",
        "selImg" : "http://img.rr.tv/cover/20210310/o_1615343977931.png",
        "unselImg" : "http://img.rr.tv/cover/20210310/o_1615343979417.png",
        "index" : 1,
        "nativeAlias" : "home",
        "darkSelImg" : "http://img.rr.tv/cover/20210310/o_1615343985261.png",
        "darkSelPag" : "http://img.rr.tv/barSelpag/20210310/o_1615343956536.pag",
        "name" : "首页"
      },
      {
        "selPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344143099.pag",
        "pageType" : 0,
        "darkUnselImg" : "http://img.rr.tv/img/img/20211013/o_ca5e3b6ce6b747e992789e55222445f2.png",
        "webUrl" : "",
        "selImg" : "http://img.rr.tv/img/img/20211013/o_14667f24618841a1906fbb2233b8869a.png",
        "unselImg" : "http://img.rr.tv/img/img/20211013/o_963933dfc49b4c8bab6e3b36a8a2b42b.png",
        "index" : 2,
        "nativeAlias" : "vip",
        "darkSelImg" : "http://img.rr.tv/img/img/20211013/o_ad54fb0336764d38910304488804f2a1.png",
        "darkSelPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344145409.pag",
        "name" : "会员"
      }
]
body = JSON.stringify(body)
$done({ body })
