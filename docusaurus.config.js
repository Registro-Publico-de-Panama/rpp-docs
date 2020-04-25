module.exports = {
  title: 'Ayuda en línea',
  tagline: 'Registro Público de Panamá',
  url: 'https://ayuda.rp.gob.pa',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'registro-publico', // Usually your GitHub org/user name.
  projectName: 'ayuda-rpp', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ayuda en línea',
      logo: {
        alt: 'RPP',
        src: 'img/logo_96.png',
      },
      links: [
        {
          to: 'docs/servicios-web/intro',
          activeBasePath: 'docs',
          label: 'Servicios web',
          position: 'left',
        },
        {
          to: 'docs/servicios-web/ventanilla-virtual/presentacion-telematica/intro',
          activeBasePath: 'docs',
          label: 'Presentación telemática',
          position: 'left',
        },
        {
          to: 'docs/dincrece/preguntas-frecuentes',
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
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
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
              label: 'Blog',
              to: 'blog',
            },
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
