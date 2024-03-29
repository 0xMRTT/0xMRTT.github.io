// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '0xMRTT',
  tagline: 'Engineer',
  url: 'https://0xMRTT.github.io',
  baseUrl: '/',
  projectName: '0xMRTT.github.io',
  organizationName: '0xMRTT',
  trailingSlash: false,
  titleDelimiter: '|',
  staticDirectories: ['static'],
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xMRTT', // Usually your GitHub org/user name.
  projectName: '0xMRTT.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        language: ["en", "fr"],
        indexPages: true,

      },
    ], 
    [
      require.resolve('@docusaurus/theme-live-codeblock'), {}
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xMRTT/0xMRTT.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
            
          // Please change this to your repo.
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 0xMRTT`,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xMRTT/0xMRTT.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: { changefreq: 'daily', priority: 0.5 },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/docusaurus.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      'ideal-image',
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({ max: 1030, min: 480, disableInDev: false }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'projects',
        path: 'projects',
        routeBasePath: 'projects',
        sidebarPath: 'sidebars.js',
        editUrl:
            'https://github.com/0xMRTT/0xMRTT.github.io/edit/main/projects',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '0xMRTT',
        logo: {
          alt: '0xMRTT Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: 'projects', position: 'left', label: 'Projects' },
          {to: '/blog', label: 'Blog', position: 'left'},
          
          {
            href: 'https://github.com/0xMRTT',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'List',
                to: '/docs/projects',
              },
              {
                label: 'CNP',
                to: '/docs/cnp/why',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UCbq41iZoQC-49F5h7kjdxvQ',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/3TgDdvZjz9',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/0xMRTT',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0xMRTT',
              },
              {
                label: "Status",
                href: 'https://github.com/0xMRTT/0xMRTT.github.io/actions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 0xMRTT. Built with Docusaurus.`,
      },
      docs: { sidebar: { hideable: true, autoCollapseCategories: true } },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      metadata: [
        { name: 'twitter:card', content: 'summary' },
        { name: 'keywords', content: 'personal, 0xMRTT, projects' },
      ],
    }),
};

module.exports = config;
