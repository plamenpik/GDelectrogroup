module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("favicon.png");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  eleventyConfig.ignores.add("docs/**");
  eleventyConfig.ignores.add("node_modules/**");

  eleventyConfig.addCollection("navPages", function(collectionApi) {
    return collectionApi
      .getAll()
      .filter(function(item) {
        return Boolean(item.data && item.data.pagename);
      })
      .sort(function(a, b) {
        const orderA = Number(a.data.order ?? Number.MAX_SAFE_INTEGER);
        const orderB = Number(b.data.order ?? Number.MAX_SAFE_INTEGER);
        return orderA - orderB;
      });
  });

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "docs"
    }
  };
};module.exports = function(eleventyConfig) {
  
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("documents");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("2.3.0");
  
  // Watch for CSS changes (built by Gulp)
  eleventyConfig.addWatchTarget("docs/css/");
  
  // Set custom directories for input, output, includes, and layouts
  return {
    dir: {
      input: ".",           // Root directory
      includes: "_includes",// Template partials
      layouts: "_layouts",  // Layout templates
      data: "_data",        // Global data files
      output: "docs"        // Output directory (same as Jekyll)
    },
    
    // Use Nunjucks for HTML (better compatibility), Liquid for Markdown
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "liquid", "md", "njk"],
    
    // Path prefix for GitHub Pages
    pathPrefix: process.env.ELEVENTY_ENV === 'production' ? '/GDelectrogroup' : '/'
  };
};
