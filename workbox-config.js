module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{svg,png,html,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};