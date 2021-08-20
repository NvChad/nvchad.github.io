export default {
  "title": "NvChad",
  "tagline": "Neovim with lua is cool",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "NvChad",
  "projectName": "NvChad",
  "themeConfig": {
    "navbar": {
      "title": "NvChad",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "Getting started/Setup",
          "position": "right",
          "label": "Getting started",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "to": "docs/Config",
          "label": "Config",
          "position": "right"
        },
        {
          "to": "docs/Features",
          "label": "Features",
          "position": "right"
        },
        {
          "href": "https://github.com/NvChad/NvChad",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "prism": {
      "lightTheme": {
        "plain": {
          "backgroundColor": "#2a2734",
          "color": "#9a86fd"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata",
              "punctuation"
            ],
            "style": {
              "color": "#6c6783"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "tag",
              "operator",
              "number"
            ],
            "style": {
              "color": "#e09142"
            }
          },
          {
            "types": [
              "property",
              "function"
            ],
            "style": {
              "color": "#9a86fd"
            }
          },
          {
            "types": [
              "tag-id",
              "selector",
              "atrule-id"
            ],
            "style": {
              "color": "#eeebff"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "#c4b9fe"
            }
          },
          {
            "types": [
              "boolean",
              "string",
              "entity",
              "url",
              "attr-value",
              "keyword",
              "control",
              "directive",
              "unit",
              "statement",
              "regex",
              "at-rule",
              "placeholder",
              "variable"
            ],
            "style": {
              "color": "#ffcc99"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "textDecorationLine": "line-through"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "textDecorationLine": "underline"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "important",
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "color": "#c4b9fe"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "backgroundColor": "#2a2734",
          "color": "#9a86fd"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata",
              "punctuation"
            ],
            "style": {
              "color": "#6c6783"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "tag",
              "operator",
              "number"
            ],
            "style": {
              "color": "#e09142"
            }
          },
          {
            "types": [
              "property",
              "function"
            ],
            "style": {
              "color": "#9a86fd"
            }
          },
          {
            "types": [
              "tag-id",
              "selector",
              "atrule-id"
            ],
            "style": {
              "color": "#eeebff"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "#c4b9fe"
            }
          },
          {
            "types": [
              "boolean",
              "string",
              "entity",
              "url",
              "attr-value",
              "keyword",
              "control",
              "directive",
              "unit",
              "statement",
              "regex",
              "at-rule",
              "placeholder",
              "variable"
            ],
            "style": {
              "color": "#ffcc99"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "textDecorationLine": "line-through"
            }
          },
          {
            "types": [
              "inserted"
            ],
            "style": {
              "textDecorationLine": "underline"
            }
          },
          {
            "types": [
              "italic"
            ],
            "style": {
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "important",
              "bold"
            ],
            "style": {
              "fontWeight": "bold"
            }
          },
          {
            "types": [
              "important"
            ],
            "style": {
              "color": "#c4b9fe"
            }
          }
        ]
      },
      "additionalLanguages": [
        "lua"
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/neeraj/Desktop/nvchad-site/site/sidebars.js"
        },
        "theme": {
          "customCss": "/home/neeraj/Desktop/nvchad-site/site/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};