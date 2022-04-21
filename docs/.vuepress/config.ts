import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "含韵百科",
  description: "全方位认识张含韵的百科站点",

  base: "/",

  head: [
    ["link", { rel: "stylesheet", href: "//at.alicdn.com/t/font_2629682_w7f7d1vp64.css" },],
    //访问统计
    ["script", { async: "",  defer: "", 'data-website-id': "130b8b20-37c0-4c7e-a17f-77af96beb621", src: "https://stat.pinlyu.com/umami.js" }],
    //百度搜索资源平台站点验证
    ["meta", { name: "baidu-site-verification", content: "code-exBGMGg3gF" }],
    //Fancybox
    ['script', { src: 'https://lib.baomitu.com/jquery/3.6.0/jquery.min.js' }],
    ['script', { src: 'https://lib.baomitu.com/fancybox/3.5.7/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://lib.baomitu.com/fancybox/3.5.7/jquery.fancybox.min.css' }],    
  ],

  themeConfig,
});
