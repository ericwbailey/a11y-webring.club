// Plugins
const { EleventyRenderPlugin } = require("@11ty/eleventy");


module.exports = function(eleventyConfig) {
  // Watch targets
  eleventyConfig.addWatchTarget("./index.njk");
  eleventyConfig.addWatchTarget("./includes/**/*.njk");
  eleventyConfig.addWatchTarget("./site.css");

  // Passthrough
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("texture.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("avatar.png");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("safari-pinned-tab.svg");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("facebook.png");
  eleventyConfig.addPassthroughCopy("twitter.png");

  // Eleventy config
  eleventyConfig.setQuietMode(true);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

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
