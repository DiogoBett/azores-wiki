import { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Azores Wiki',
  tagline: 'A wiki about the nine islands of the Azores.',
  url: 'https://diogobett.github.io',
  baseUrl: '/azores-wiki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DiogoBett',
  projectName: 'azores-wiki',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        theme: {
          customCss: require.resolve('./src/css/styles.css'),
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Azores Wiki',
      logo: {
        alt: 'The Flag of the Azores',
        src: 'img/azores-flag.png',
        href: 'https://diogobett.github.io/azores-wiki/',
        style: { borderRadius: '15%' },
      },
      items: [
        {
          label: 'Islands',
          position: 'left',
          items: [
            { to: 'docs/islands/corvo', label: 'Corvo' },
            { to: 'docs/islands/flores', label: 'Flores' },
            { to: 'docs/islands/faial', label: 'Faial' },
            { to: 'docs/islands/pico', label: 'Pico' },
            { to: 'docs/islands/sao-jorge', label: 'São Jorge' },
            { to: 'docs/islands/graciosa', label: 'Graciosa' },
            { to: 'docs/islands/terceira', label: 'Terceira' },
            { to: 'docs/islands/sao-miguel', label: 'São Miguel' },
            { to: 'docs/islands/santa-maria', label: 'Santa Maria' },
          ],
        },
        { to: 'docs/overview', label: 'Overview', position: 'left' },
        { to: 'docs/history', label: 'History', position: 'left' },
        { to: 'docs/geography', label: 'Geography', position: 'left' },
        { to: 'docs/demographics', label: 'Demographics', position: 'left' },
        { href: 'https://github.com/DiogoBett/azores-wiki', position: 'right', html: `<img src="/azores-wiki/img/github-logo.svg" alt="GitHub" class="navbar-logo" />` },
      ],
    },
    footer: {
      links: [
        {
          title: 'Explore',
          items: [
            { label: 'History', to: 'docs/history' },
            { label: 'Geography', to: 'docs/geography' },
            { label: 'Demographics', to: 'docs/demographics' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Trails', href: 'https://trails.visitazores.com/en/azores-islands' },
            { label: 'GitHub', href: 'https://github.com/DiogoBett/azores-wiki' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Diogo Bettencourt`,
    },
  },
};

export default config;