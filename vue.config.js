const path = require('path');
const vueSrc = './src';
const AtomsDirectory = './src/components/atoms';
const ComponentsDirectory = './src/components';
const AssetsDirectory = './src/assets';

module.exports = {
	runtimeCompiler: true,
	css: {
		modules: true,
	},
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, vueSrc),
				'@atoms': path.resolve(__dirname, AtomsDirectory),
				'@components': path.resolve(__dirname, ComponentsDirectory),
				'@assets': path.resolve(__dirname, AssetsDirectory),
			},
			extensions: ['.js', '.vue', '.json', '.styl'],
		},
	},
};
