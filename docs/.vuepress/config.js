const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ydays',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#d51a1a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Ydays',
        link: '/ydays/',
      },
      {
        text: 'Incubateurs',
        link: '/incubs/'
      },
      {
        text: 'Incubateur web',
        link: '/incub-web/'
      },
      {
        text: 'Projets',
        link: 'https://ydays.ynov.com/'
      },
      {
        text: 'Wiki',
        link: 'https://auvencecom.sharepoint.com/teams/ydayslyon'
      }
    ],
    sidebar: {
      '/ydays/': [
        {
          title: 'Ydays',
          collapsable: false,
          children: [
            '',
            'calendar',
            'lexique',
            'roles',
          ]
        },
        {
          title: 'La notation',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            'notation/auto-evaluation',
            'notation/soutenances',
            'notation/peer-grading',
          ]
        },
      ],
      '/incubs/': [
        {
          title: 'Incubateurs',
          collapsable: false,
          children: [
            '',
            'web',
          ]
        },
      ],
      '/incub-web/': [
        {
          title: 'Incubateur web',
          collapsable: false,
          children: [
            '',
            'tools',
          ]
        },
        {
          title: 'Les projets',
          subtitle: 'Groupe A',
          collapsable: false,
          children: [
            'projectsga',
            'projectsgb',
            'projectsgc',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
