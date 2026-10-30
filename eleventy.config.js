export default function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy({ "static/robots.txt": "robots.txt" });

	eleventyConfig.addFilter("readableDate", (date) =>
		new Date(date).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC",
		}),
	);

	eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

	eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).toString());

	eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));

	eleventyConfig.addShortcode("figure", (src, alt, width, height, caption) => {
		const cap = caption ? `<figcaption>${caption}</figcaption>` : "";
		return `<figure><img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy">${cap}</figure>`;
	});

	return {
		dir: {
			input: ".",
			includes: "_includes",
			data: "_data",
			output: "_site",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
	};
}
