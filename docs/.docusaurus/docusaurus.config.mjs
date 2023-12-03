/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Meshtastic",
  "tagline": "An open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices",
  "url": "https://meshtastic.org",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "design/web/favicon.ico",
  "organizationName": "meshtastic",
  "projectName": "meshtastic",
  "themeConfig": {
    "docs": {
      "sidebar": {
        "autoCollapseCategories": true,
        "hideable": false
      },
      "versionPersistence": "localStorage"
    },
    "navbar": {
      "title": "Meshtastic",
      "hideOnScroll": true,
      "logo": {
        "alt": "Meshtastic Logo",
        "src": "design/logo/svg/Mesh_Logo_Black.svg",
        "srcDark": "design/logo/svg/Mesh_Logo_White.svg"
      },
      "items": [
        {
          "label": "Docs",
          "to": "docs/introduction",
          "position": "left"
        },
        {
          "label": "Downloads",
          "to": "downloads",
          "position": "left"
        },
        {
          "label": "About",
          "position": "right",
          "items": [
            {
              "label": "Introduction",
              "to": "docs/introduction"
            },
            {
              "label": "Getting Started",
              "to": "docs/getting-started"
            },
            {
              "label": "Contributing",
              "to": "docs/contributing"
            },
            {
              "label": "Legal",
              "to": "docs/legal"
            },
            {
              "label": "FAQs",
              "to": "docs/faq"
            }
          ]
        },
        {
          "href": "https://github.com/meshtastic",
          "position": "right",
          "className": "header-github-link",
          "aria-label": "GitHub repository"
        }
      ]
    },
    "footer": {
      "copyright": "<a href=\"https://vercel.com/?utm_source=meshtastic&utm_campaign=oss\">Powered by ▲ Vercel</a> | Meshtastic® is a registered trademark of Meshtastic LLC. | <a href=\"/docs/legal\">Legal Information</a>.",
      "style": "light",
      "links": []
    },
    "algolia": {
      "appId": "IG2GQB8L3V",
      "apiKey": "2e4348812173ec7ea6f7879c7032bb21",
      "indexName": "meshtastic",
      "contextualSearch": false,
      "searchPagePath": "search",
      "searchParameters": {}
    },
    "colorMode": {
      "respectPrefersColorScheme": true,
      "defaultMode": "light",
      "disableSwitch": false
    },
    "mermaid": {
      "theme": {
        "light": "base",
        "dark": "base"
      },
      "options": {
        "themeVariables": {
          "primaryColor": "#67EA94",
          "primaryTextColor": "var(--tw-prose-headings)",
          "primaryBorderColor": "#4D4D4D",
          "lineColor": "#EAD667",
          "secondaryColor": "#EA67BD",
          "tertiaryColor": "#677CEA"
        }
      }
    },
    "metadata": [],
    "prism": {
      "additionalLanguages": [],
      "theme": {
        "plain": {
          "color": "#bfc7d5",
          "backgroundColor": "#292d3e"
        },
        "styles": [
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(105, 112, 152)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "string",
              "inserted"
            ],
            "style": {
              "color": "rgb(195, 232, 141)"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "rgb(247, 140, 108)"
            }
          },
          {
            "types": [
              "builtin",
              "char",
              "constant",
              "function"
            ],
            "style": {
              "color": "rgb(130, 170, 255)"
            }
          },
          {
            "types": [
              "punctuation",
              "selector"
            ],
            "style": {
              "color": "rgb(199, 146, 234)"
            }
          },
          {
            "types": [
              "variable"
            ],
            "style": {
              "color": "rgb(191, 199, 213)"
            }
          },
          {
            "types": [
              "class-name",
              "attr-name"
            ],
            "style": {
              "color": "rgb(255, 203, 107)"
            }
          },
          {
            "types": [
              "tag",
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 114)"
            }
          },
          {
            "types": [
              "operator"
            ],
            "style": {
              "color": "rgb(137, 221, 255)"
            }
          },
          {
            "types": [
              "boolean"
            ],
            "style": {
              "color": "rgb(255, 88, 116)"
            }
          },
          {
            "types": [
              "keyword"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "doctype"
            ],
            "style": {
              "color": "rgb(199, 146, 234)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "color": "rgb(178, 204, 214)"
            }
          },
          {
            "types": [
              "url"
            ],
            "style": {
              "color": "rgb(221, 221, 221)"
            }
          }
        ]
      },
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    null
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/michaelbarbine/Documents/Github/ph3ar-hackathon-starter/docs/sidebars.js",
          "editUrl": "https://github.com/meshtastic/meshtastic/edit/master/",
          "breadcrumbs": false,
          "showLastUpdateAuthor": true
        },
        "theme": {
          "customCss": "/Users/michaelbarbine/Documents/Github/ph3ar-hackathon-starter/docs/src/css/custom.css"
        }
      }
    ]
  ],
  "customFields": {},
  "markdown": {
    "mermaid": true,
    "format": "mdx",
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    }
  },
  "themes": [
    "@docusaurus/theme-mermaid"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false
};