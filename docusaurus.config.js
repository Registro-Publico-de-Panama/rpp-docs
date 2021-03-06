require('dotenv').config();

module.exports = {
  title: 'Ayuda en línea',
  tagline: 'Registro Público de Panamá',
  url: 'https://registro-publico-de-panama.github.io',
  baseUrl: '/rpp-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Registro-Publico-de-Panama',
  projectName: 'rpp-docs',
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/registro-publico-de-panama/rpp-docs/edit/develop/',
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    algolia: {
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: 'registro-publico-de-panama',
      algoliaOptions: {},
    },
    googleAnalytics: {
      trackingID: 'UA-164754925-1',
    },
    navbar: {
      title: 'Ayuda en línea',
      logo: {
        alt: 'RPP',
        src: 'img/logo_96.png',
      },
      items: [
        {
          to: 'servicios-web/intro',
          activeBasePath: 'docs',
          label: 'Servicios web',
          position: 'left',
        },
        {
          to: 'servicios-web/ventanilla-virtual/presentacion-telematica/intro',
          activeBasePath: 'docs',
          label: 'Presentación telemática',
          position: 'left',
        },
        {
          to: 'dincrece/preguntas-frecuentes',
          activeBasePath: 'docs',
          label: 'Preguntas frecuentes',
          position: 'left',
        },
        {
          href: 'https://www.rp.gob.pa/',
          label: 'Acceder a Servicios Web',
          position: 'right',
        },
        {
          href: 'https://www.registro-publico.gob.pa/',
          label: 'Visitar web institucional',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'doc1',
            },
            {
              label: 'Second Doc',
              to: 'doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Registro Público de Panamá. Built with Docusaurus.`,
    },
  },
};
