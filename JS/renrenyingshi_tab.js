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
        "selPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344101761.pag",
        "pageType" : 1,
        "darkUnselImg" : "http://img.rr.tv/cover/20210310/o_1615344088886.png",
        "webUrl" : "",
        "selImg" : "http://img.rr.tv/cover/20210310/o_1615344085709.png",
        "unselImg" : "http://img.rr.tv/cover/20210310/o_1615344087390.png",
        "index" : 2,
        "nativeAlias" : "amwayVideo",
        "darkSelImg" : "http://img.rr.tv/cover/20210310/o_1615344091229.png",
        "darkSelPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344101664.pag",
        "name" : "快看"
      },
      {
        "selPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344143099.pag",
        "pageType" : 0,
        "darkUnselImg" : "http://img.rr.tv/img/img/20211013/o_ca5e3b6ce6b747e992789e55222445f2.png",
        "webUrl" : "",
        "selImg" : "http://img.rr.tv/img/img/20211013/o_14667f24618841a1906fbb2233b8869a.png",
        "unselImg" : "http://img.rr.tv/img/img/20211013/o_963933dfc49b4c8bab6e3b36a8a2b42b.png",
        "index" : 3,
        "nativeAlias" : "vip",
        "darkSelImg" : "http://img.rr.tv/img/img/20211013/o_ad54fb0336764d38910304488804f2a1.png",
        "darkSelPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344145409.pag",
        "name" : "VIP"
      },
      {
        "selPag" : "http://img.rr.tv/other/other/20210914/o_4fd6087388814b48a171e8789ab8f3b1.pag",
        "pageType" : 1,
        "darkUnselImg" : "http://img.rr.tv/img/img/20211013/o_dd8bfbd83f0049b5adf4b0e2fcbafe24.png",
        "webUrl" : "",
        "selImg" : "http://img.rr.tv/img/img/20211013/o_2ededc9a9d6c4b818259ac0f72c1fcbb.png",
        "unselImg" : "http://img.rr.tv/img/img/20211013/o_af287b5caf824367b5dd7435501f684e.png",
        "index" : 4,
        "nativeAlias" : "community",
        "darkSelImg" : "http://img.rr.tv/img/img/20211013/o_48f63c0f4c9f459f94bf4f2429054180.png",
        "darkSelPag" : "http://img.rr.tv/other/other/20210914/o_6bcf3d9a3ae640938884d1574a64f654.pag",
        "name" : "广场"
      },
      {
        "selPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344153652.pag",
        "pageType" : 0,
        "darkUnselImg" : "http://img.rr.tv/img/img/20211013/o_e35b6941e4a0429486cd5b535337544f.png",
        "webUrl" : "",
        "selImg" : "http://img.rr.tv/img/img/20211013/o_2e5efef7fd654e3ea8a60e3e719e6e8c.png",
        "unselImg" : "http://img.rr.tv/img/img/20211013/o_7492019b1603486383733b7154e967b3.png",
        "index" : 5,
        "nativeAlias" : "my",
        "darkSelImg" : "http://img.rr.tv/img/img/20211013/o_f98a74489e3d4dc9bf8651eea65b949e.png",
        "darkSelPag" : "http://img.rr.tv/barSelpag/20210310/o_1615344154522.pag",
        "name" : "我的"
      }
]
body = JSON.stringify(body)
$done({ body })
