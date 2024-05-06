// Plugins
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const slugify = require("slugify");


module.exports = function(eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget("./index.njk");
  eleventyConfig.addWatchTarget("./**/*.njk");
  eleventyConfig.addWatchTarget("./site.css");

  // Passthrough
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("avatar.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("fonts/basiersquare-bold.woff2");
  eleventyConfig.addPassthroughCopy("fonts/basiersquare-regular.woff2");
  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("icon-192.png");
  eleventyConfig.addPassthroughCopy("icon-512.png");
  eleventyConfig.addPassthroughCopy("manifest.webmanifest");
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("social-share-image.png");

  // Eleventy config
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  // sortDataByDate - Sort by data files `date` field
  eleventyConfig.addFilter("sortDataByDate", (obj) => {
    const sorted = {};
    Object.keys(obj)
      .sort((a, b) => {
        return obj[a].date > obj[b].date ? 1 : -1;
      })
      .forEach((name) => (sorted[name] = obj[name]));
    return sorted;
  });

  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, ""), {
      lower: true,
      replacement: "-",
      remove: /[*+~.·,()'"`´%!?¿:@»]/g,
    });
  });

  return {
    // Supported formats
    templateFormats: [
      "njk"
    ],

    // Preprocess
    htmlTemplateEngine: "njk",

    dir: {
      data: "data"
    }
  };
};
