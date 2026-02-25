module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("2.3.0");

  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("node_modules/**");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "docs"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "liquid", "md", "njk"]
  };
};
