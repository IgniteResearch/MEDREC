// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MedRec",
  tagline: "A Secure Medical Record Bank",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://medrec.co.in ",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "IgniteResearch", // Usually your GitHub org/user name.
  projectName: "MedRec", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  deploymentBranch: "gh-pages",

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
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          filename: 'sitemap.xml',
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
          alt: "MedRec",
          src: "img/logo.png",
        },
        items: [
          {
            href: "/",
            label: "Home",
            position: "right",
          },
          {
            href: "/#about",
            label: "About",
            position: "right",
          },
          {
            href: "/#services",
            label: "Services",
            position: "right",
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "/#contact",
            label: "Contact",
            position: "right",
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                html: `
                  
                    <a href="/" style="color: white; text-decoration: none;">
                      <img src="/img/logo.png" alt="Image description" style="vertical-align: middle; width: 50px; height: 50px;">
                      <span style="display: inline-block; vertical-align: middle; font-weight: bold; font-size: 2rem;">MedRec</span>
                      <figcaption style="vertical-align: middle; margin-left:54px; font-size: 0.7rem; margin-top:-12px">A Secure Medical Record Bank</figcaption>
                    </a>
                  `,
              },
              {
                html: `
                      <span style="display: inline-block; margin-top: 10px; vertical-align: middle; font-size: 0.75rem;">Keep your health records with you at all times <b><a style="color: white; " href="/" >@No-cost</a></b>.
                      </span>
                  `,
              },
              {
                html: `
                <div>
                <a href="#"><img src="/img/twitter.png" style="margin-right: 10px; width: 23px; height: 23px;" /></a>
                <a href="#"><img src="/img/facebook.png" style=" margin-right: 10px; width: 21px; height: 21px;" /></a>
                <a href="#"><img src="/img/linkedin.png" style="margin-top: 4px; margin-right: 10px; width: 20px; height: 20px;" /></a>
                <a href="#"><img src="/img/instagram.png" style="margin-top: 5px; margin-right: 10px; width: 20px; height: 20px;" /></a>
                </div>
                  `,
              },
            ],
          },
          
          {
            title: "USEFUL LINKS",
            items: [
              {
                href: "/",
                label: "Home",
              },
              {
                href: "/#about",
                label: "About",
              },
              {
                href: "/#services",
                label: "Services",
              },
              { to: "/blog", label: "Blog", position: "right" },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
  
          {
            title: "Our Services",
            items: [
              {
                label: "Digital Health Record",
                href: "/digital-health-record",
              },
              {
                label: "Clinic Management System",
                href: "/clinic-management-system",
              },
            ],
          },
          {
            title: "Community & Support",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/UQcNNurJkq",
              },
              {
                label: "GitHub",
                href: "https://githu.com/igniteresearch/medrec",
              },
            ],
          },
          {
            title: "Contact Us",
            items: [
              {
                html: `
                      <span style="display: inline-block; margin-top: 20px; margin-bottom: 60px; vertical-align: middle; font-size: 0.8rem;">
                      27-2-769, 2nd floor,  A C Nagar,<br> 
                      Near 6th town police station, <br> 
                      Nellore, Andhra Pradesh, <br>
                      India - 524002. 
                      </span>
                  `,
              },
              {
                html: `
                <div>
                <span>Phone: +91 6301436533</span><br>
                <span>Email:support@igniteresearch.in</span>
                </div>
                  `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <b>MedRec</b>. All Rights Reserved, <br> <p style="font-size: 0.6rem;">maintained by <b><a href="" style="color: white; text-decoration: none; font-size: 0.8rem;">MedRec</a></b>, Designed by <b><a href=""  style="color: white; text-decoration: none;font-size: 0.8rem;">Ignite Research</a></b>, Built with Docusaurus.</p>`,
      },
    }),
};

module.exports = config;
