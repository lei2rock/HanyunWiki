const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./navBar");
const sideBarConfig = require("./sideBar");

module.exports = config({
  title: "含韵百科",
  description: "全方位认识张含韵的百科站点",

  dest: "./dist",

  head: [
    //百度搜索资源平台站点验证
    ["meta", { name: "baidu-site-verification", content: "code-ZsY85vcVxP"}],
    //谷歌分析代码
    ["script", { async: "", src: "https://www.googletagmanager.com/gtag/js?id=UA-141207776-2"}],
    ["script", { src: "/assets/js/gtag.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"}],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"}],
  ],

  locales: {
    "/": { lang: "zh-CN" },
  },

  themeConfig: {
//****************
//基本设置
//****************
    //默认作者
    author: "含韵百科",
    
    //导航栏设置
    nav: navBarConfig,

    //侧边栏设置
    sidebar: sideBarConfig,

    //当前网站部署到的域名
    hostname: "https://zhy.dlzhang.com",

    //导航栏的 logo 图片，需填入绝对路径并放入`.vuepress/public`文件夹。
    //黑暗模式 logo 需配置 darkLogo
    logo: "/logo.png",

    //项目仓库地址
    repo: "https://github.com/lei2rock/HanyunWiki",

    //仓库分支
    docsBranch: "master",

    //文档位置
    docsDir: "docs",

    //页面显示编辑链接
    editLinks: true,

    //导航栏显示仓库链接
    repoDisplay: false,

    //页脚文字
    footer: {
      display: true,
      content: "本站文本采用<a rel='license' href='/about/copyright/'>知识共享 署名-相同方式共享 3.0 协议</a>",
      copyright: "",
    },

    //黑暗模式，类型：
    //auto-switch："关闭 | 自动 | 打开" 的三段式开关，默认
    //switch："关闭 | 打开" 的切换式开关
    //auto：自动根据用户设备主题或当前时间决定是否应用深色模式
    //disable：禁用深色模式
    darkmode: "auto-switch",

    //主题色选项配置
    themeColor: false,

    //移动视图下隐藏站点名称
    hideSiteTitleonMobile: false,

    //是否显示 ”全屏“ 按钮
    fullscreen: false,

    //文章基本信息
    pageInfo: false,


//****************
//插件设置
//****************
    git: {
      timezone: "Asia/Shanghai",
    },

    //Markdown增强插件
    mdEnhance: {
      //修复包含特殊字符的图片的引用
      imageFix: true,
      //自定义对齐
      align:true,
      //上角标
      sup:true,
      //下角标
      sub:true, 
      //脚注
      footnote:true,
      //标记
      mark: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#5c92d1",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152x152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144x144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/android-icon-144x144.png",
            size: "144x144",
            type: "image/png",
           },
           {
            src: "/assets/icon/android-icon-96x96.png",
            size: "96x96",
            type: "image/png",
           },
           {
            src: "/assets/icon/android-icon-72x72.png",
            size: "72x72",
            type: "image/png",
           },
           {
            src: "/assets/icon/android-icon-48x48.png",
            size: "48x48",
            type: "image/png",
           },
          {
            src: "/assets/icon/android-icon-36x36.png",
            size: "36x36",
            type: "image/png",
           },
        ],
      },
    },
  },
});
