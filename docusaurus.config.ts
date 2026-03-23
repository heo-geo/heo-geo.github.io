import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Heo Geo Page',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://heo-geo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'heo-geo', // Usually your GitHub org/user name.
  projectName: 'heo-geo-page', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      logo: {
        alt: 'Heo Geo Logo',
        src: 'img/logo-hg-white.png',
      },
      items: [
        {
          label: 'Showcases',
          position: 'left',
          items: [
            {label: '🎮 3D Model Viewer', to: '/3d-showcase-model-viewer'},
          ],
        },
        {
          label: 'Bookmarks',
          position: 'left',
          items: [
            {label: '🛍️ Shopify Resources', to: '/docs/shopify'},
            {label: '🎯 Interview Prep', to: '/docs/shopify/interview-questions'},
            {type: 'html', value: '<hr style="margin:4px 0">'},
            {label: '🔖 Front-end', to: '/docs/front-end'},
            {label: '🔖 Back-end', to: '/docs/back-end'},
            {label: '🌐 3D in Web', to: '/docs/3d-in-web'},
          ],
        },
        {to: '/blog', label: 'Articles & Talks', position: 'left'},
        {to: '/about', label: 'About', position: 'left'},
        {to: '/contact', label: 'Contact', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Heorhii Terentiev. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: 'TXYL5ITVOP',
      apiKey: 'b66409b69db10068bc8cdd663b6af518',
      indexName: 'Main',
    }
  } satisfies Preset.ThemeConfig,

  scripts: [
    {
      src: 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js',
      type: 'module',
    },
  ],
};

export default config;
