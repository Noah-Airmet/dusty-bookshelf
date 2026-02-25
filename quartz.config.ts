import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Dusty Bookshelf",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "noah-airmet.github.io/dusty-bookshelf",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Source Serif 4",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FAFAF7",
          lightgray: "#ECEAE3",
          gray: "#9B9B9B",
          darkgray: "#3D3D3D",
          dark: "#1A1A1A",
          secondary: "#BF5B3F",
          tertiary: "#A04A32",
          highlight: "rgba(191, 91, 63, 0.06)",
          textHighlight: "rgba(191, 91, 63, 0.15)",
        },
        darkMode: {
          light: "#181818",
          lightgray: "#2A2A2A",
          gray: "#6B6B6B",
          darkgray: "#CBCBCB",
          dark: "#EFEFEF",
          secondary: "#E07A5F",
          tertiary: "#C96442",
          highlight: "rgba(224, 122, 95, 0.08)",
          textHighlight: "rgba(224, 122, 95, 0.2)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
