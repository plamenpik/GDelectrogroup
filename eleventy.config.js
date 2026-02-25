module.exports = function (eleventyConfig) {
    // Watch for changes in the SASS files and trigger a rebuild.
    eleventyConfig.addWatchTarget('./_assets/scss/');

    // Passthrough copy for static assets.
    // These files and folders will be copied to the output directory (docs) as-is.
    eleventyConfig.addPassthroughCopy('images');
    eleventyConfig.addPassthroughCopy('documents');
    eleventyConfig.addPassthroughCopy('scripts');
    eleventyConfig.addPassthroughCopy('favicon.png');
    eleventyConfig.addPassthroughCopy('CNAME');
    eleventyConfig.addPassthroughCopy('_redirects');
    eleventyConfig.addPassthroughCopy('robots.txt');
    eleventyConfig.addPassthroughCopy('sitemap.xml');

    // Set custom directories for input, includes, and layouts.
    // This matches the existing Jekyll structure.
    return {
        dir: {
            input: './', // Use the root for input files (e.g., index.html, about.html)
            includes: '_includes', // Directory for includes
            layouts: '_layouts', // Directory for layouts
            output: 'docs', // Output directory
        },
        templateFormats: ['html', 'md', 'liquid'], // Specify template formats
        htmlTemplateEngine: 'liquid', // Use liquid for HTML files
        markdownTemplateEngine: 'liquid', // Use liquid for markdown files
    };
};
