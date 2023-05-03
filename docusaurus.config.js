const { Html } = require('@mui/icons-material');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/aos/aos.css"),
            require.resolve("./src/css/bootstrap/css/bootstrap.min.css"),
            require.resolve("./src/css/bootstrap-icons/bootstrap-icons.css"),
            require.resolve("./src/css/boxicons/css/boxicons.min.css"),
            require.resolve("./src/css/glightbox/css/glightbox.min.css"),
            require.resolve("./src/css/remixicon/remixicon.css"),
            require.resolve("./src/css/swiper/swiper-bundle.min.css"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MedRec",
        logo: {
          alt: "MedRec logo",
          src: "img/logo.png",

        },
        items: [
          { to: "/", label: "Home", position: "right" },
          { to: "/#about", label: "About Us", position: "right" },
          { to: "/#features", label: "Features", position: "right" },
          { to: "/#testimonials", label: "Testimonials", position: "right" },
          { to: "/#pricing", label: "Pricing", position: "right" },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/#contact", label: "Contact Us", position: "right" },
          // {
          //   type: 'html',
          //   position: 'right',
          //   value: <button  style='font-family: "Montserrat", sans-serif; font-weight: 500; font-size: 16px;letter-spacing: 1px; display: inline-block; padding: 10px 30px; border-radius: 50px;transition: 0.5s; color: #fff; background: #1acc8d;'>Button</button>
          // }
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
