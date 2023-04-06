module.exports = {
  theme: "reco",
  title: "XXXWeii",
  keywords: "前端开发",
  description: "zjw的Blog",
  repo: "https://github.com/XXXWeii/blog.git",
  base: "/blog/",
  head: [
    [
      "link",
      {
        rel: "icon",
        // href: '/favicon.ico'
        href: "/logo.jpg",
      },
    ], // 增加一个自定义的 favicon(网页标签的图标)
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content: "XXXWeii的Blog,XXXWeii的Blog,XXXWeii的Blog",
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    logo: "/logo.jpg",
    type: "blog",
    author: "XXXWeii",
    authorAvatar: "/logo.jpg",
    title: "Normal No More!",
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    blogConfig: {
      category: {
        location: 1,
        text: "Category",
      },
      tag: {
        location: 2,
        text: "tag",
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/XXXWeii" },
        { icon: "reco-mayun", link: "https://gitee.com/zjw977020546" },
        { icon: "reco-twitter", link: "https://twitter.com/zjw977020546" },
        { icon: "reco-facebook", link: "https://www.facebook.com/QQ977020546" },
      ],
    },
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      {
        icon: "reco-github",
        text: "JavaScript",
        link: "/JavaScript/",
      },
      {
        text: "Frame",
        items: [
          {
            text: "Vue",
            link: "https://cn.vuejs.org/",
          },
          {
            text: "React",
            link: "https://zh-hans.reactjs.org/",
          },
          {
            text: "Angular",
            link: "https://angular.cn/",
          },
          {
            text: "Ember",
            link: "https://emberjs.com/",
          },
          {
            text: "Preact",
            link: "https://www.preactjs.com.cn/",
          },
        ],
      },
      {
        text: "Nginx",
        link: "https://www.nginx.cn/doc/",
      },
      {
        text: "Node",
        link: "https://nodejs.org/api/",
      },
    ],
    subSidebar: "auto",
    sidebar: {
      "/Javascript": [
        "/Javascript/数据类型的判断",
        "/Javascript/防抖和节流",
        "/Javascript/上拉加载下拉刷新",
        "/Javascript/浅拷贝和深拷贝",
        "/Javascript/JavaScript数组的常用方法有哪些",
        "/Javascript/this指向",
        "/Javascript/eventloop、宏任务和微任务",
      ],
      "/Vue": [
        "/Vue/Vue常见问题",
        "/Vue/nextTick",
        "/Vue/30道Vue面试题",
        "/Vue/Vue笔记",
      ],
      "/Other": [
        "/Other/Git常用指令",
        "/Other/Markdown",
        "/Other/模糊搜索关键词高亮显示",
        "/Other/CentOS8配置Nginx",
        "/Other/SPA首屏加载速度",
        "/Other/HTTP和HTTPS",
        "/Other/HTTP常见的状态码",
        "/Other/地址栏输入URL敲下回车",
        "/Other/TCP为什么需要三次握手和四次挥手",
        "/Other/Ajax原理和实现",
        "/Other/video鼠标移动预览",
        "/Other/SEO优化重要的元标签",
      ],
    },
    friendLink: [
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      },
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "recoluan@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "contact via mail",
        desc: "Looking forward to our next meeting with longing.",
        email: "977020546@qq.com",
        link: "https://mail.qq.com/cgi-bin/frame_html",
      },
    ],
    noFoundPageByTencent: true,
    // 备案
    record: "粤ICP备2023032935号-1",
    recordLink: "https://beian.miit.gov.cn",
    cyberSecurityRecord: "公安部备案文案",
    cyberSecurityLink: "公安部备案指向链接",
    // 项目开始时间，只填写年份
    startYear: "2022-2023",
    //代码主题
    codeTheme: "tomorrow",
    valineConfig: {
      // valine 评论功能配置信息
      appId: "br95SXh66p7OggzGyVBARUrl-gzGzoHsz", // your appId
      appKey: "FuwIi7DBwqtIjfJ7zmQ3L4hZ", // your appKey
      placeholder: "尽情留下你想说的话吧~", // 评论框占位符
      avatar: "wavatar", // 评论用户的头像类型
      highlight: true, // 代码高亮
      recordIP: true, // 记录评论者的IP
    },
  },
  plugins: [
    [
      "vuepress-plugin-cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: "circle", // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 本地文件示例
          {
            name: "起风了",
            artist: "Plastic / Fallin` Dild",
            url: "https://assets.smallsunnyfox.com/music/2.mp3",
            cover: "https://assets.smallsunnyfox.com/music/2.jpg",
          },
          {
            name: "用胳膊当枕头",
            artist: "최낙타",
            url: "https://assets.smallsunnyfox.com/music/3.mp3",
            cover: "https://assets.smallsunnyfox.com/music/3.jpg",
          },
        ],
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],
        clean: false,
        info: "https://github.com/mengqiuleo",
        messages: {
          welcome: "欢迎来到我的博客",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "你不喜欢我了吗？痴痴地望着你。",
        },
        messageStyle: { right: "68px", bottom: "290px" },
        width: 250,
        height: 320,
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-bulletin-popover",
      {
        title: "公告",
        body: [
          {
            type: "title",
            content: "欢迎加我的QQ/vx 🎉🎉🎉",
            style: "text-aligin: center;",
          },
          {
            type: "text",
            content: "QQ/VX：977020546",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: "喜欢的主题特效可以去个人信息",
            style: "text-align: center;",
          },
          {
            type: "text",
            content: "友链或疑问均可在留言板给我留言",
            style: "text-align: center;",
          },
        ],
        footer: [{ type: "button", text: "打赏", link: "/blog/donate" }],
      },
    ],
    [
      "ribbon-animation",
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random),
          verticalPosition: "center", // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200, // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2, // 添加笔划以及色带填充颜色
          strokeSize: 0, // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5, // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true,
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true, // 滑动彩带
      },
    ],
  ],
};
