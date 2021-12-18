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
      }
]
body = JSON.stringify(body)
$done({ body })
