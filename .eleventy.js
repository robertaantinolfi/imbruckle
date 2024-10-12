const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
    const md = new markdownIt({
        html: true
    });

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addPairedShortcode("markdown", (content) => {
        return md.render(content);
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public"
        }
    }
}
