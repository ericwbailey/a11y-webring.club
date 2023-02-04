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
