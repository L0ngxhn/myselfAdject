// tailg_ad_empty.js
let body = {
  msg: "操作成功",
  data: {
    homeResource: "",
    content: "",
    banners: "",
    id: "",
    durationTime: "0",
    homeOssId: "",
    footResource: "",
    title: "",
    bannerOssIds: "",
    footOssId: "",
    status: "0"
  },
  code: 200
};
$done({ body: JSON.stringify(body) });

