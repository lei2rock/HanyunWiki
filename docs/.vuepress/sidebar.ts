import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  "/intro/": [
    "", //认识含韵
    {
      text: "时间轴",
      icon: "footprint",
      prefix: "timeline/",
      collapsable: false,
      children: [
        "89-03-early",
        "04-debut",
        "05-07-vogue",
        "08-10-trough",
        "11-19-transformation",
        "20-back",
      ],
    },
    {
      text: "奖项荣誉",
      icon: "trophy",
      prefix: "award/",
      collapsable: false,
      children: [
        "music",
        "other",
      ],
    },
    {
      text: "形象代言",
      icon: "lightbulb-flash",
      prefix: "branding/",
      collapsable: false,
      children: [
        "psa", //公益代言 (public service advertising)
        "business", //商业代言
      ],
    },
  ],

  //音乐作品
  "/music/": [
    "album",
    "single",
    "concert",
    "gala",
    "live",
  ],

  //影视作品
  "/video/": [
    "drama",
    "movie",
    "variety",
    "interview",
    "host",
    "other",
  ],

  //出版物
  "/publication/": [
  ],

  //圆桌会
  "/roundtable/": [
    "collection/", //随笔文集
    "report", //媒体报道
    "anecdote", //逸闻趣事
  ],

  //关于
  "/about/": [
    "",
    "disclaimer",
    "copyright",
  ],
});
