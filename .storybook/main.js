module.exports = {
	stories: [
		'../app/**/*.stories.js',
		'../client/**/*.stories.js',
		'../ee/**/*.stories.js',
	],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-controls',
		'@storybook/addon-docs',
		'@storybook/addon-viewport',
	],
};
