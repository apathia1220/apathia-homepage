export default {
  title: 'Apathia Component 中文文档',
  description: '基于vue3 + typescript + twind 的vue组件库',
  base: 'apathia1220.github.io',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'icon.png' }]],
  themeConfig:{
      siteTitle:'Apathia Component 中文文档',
      repo: 'https://github.com/apathia1220/apathia-vue',
      repoLabel:'GitHub',
      docsDir: 'docs',
      docsBranch: 'master',
      lastUpdatedText: '最近更新时间',
      logo: '/icon.png',
      nav: [
          { text: '相关文档', link: 'https://apathia1220.github.io/apathia-doc/' },
      ],
      socialLinks:[
          { icon: 'github', link: 'https://github.com/apathia1220/apathia-vue' }
      ],
      // footer: {
      //     message: 'MIT Licensed',
      //     copyright: 'Copyright © 2022-present Apathia'
      // }
  }
}