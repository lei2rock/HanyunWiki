import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/intro/": [
    "", //认识含韵
    {
      text: "时间轴",
      icon: "footprint",
      prefix: "timeline/",
      collapsible: false,
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
      collapsible: false,
      children: [
        "music",
        "other",
      ],
    },
    {
      text: "形象代言",
      icon: "lightbulb-flash",
      prefix: "branding/",
      collapsible: false,
      children: [
        "psa", //公益代言 (public service advertising)
        "business", //商业代言
      ],
    },
  ],

  //音乐作品
  "/music/": [
    {
      text: "专辑",
      icon: "lightbulb-flash",
      link: "album/",
      prefix: "album/",
      collapsible: true,
      children: [
        "album1",
        "album2",
        "album3",
        "album4",
        "album5",
        "album6"
      ],
    },
    "single",
    "gala",
    "concert",
  ],

  //影视作品
  "/video/": [
    "drama",
    "movie",
    "variety",
    "host",
    "other",
  ],

  //出版物
  "/publication/": [
    "",
  ],

  //圆桌会
  "/roundtable/": [
    "interview/",
    "live",
    "anecdote",
  ],

  //关于本站
  "/about/": [
    "",
    "disclaimer",
    "copyright",
  ],
});
