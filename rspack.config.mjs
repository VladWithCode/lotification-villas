import { defineConfig } from "@rspack/cli";
import { rspack } from "@rspack/core";

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ["chrome >= 87", "edge >= 88", "firefox >= 78", "safari >= 14"];

export default defineConfig({
	entry: {
		main: "./src/index.js"
	},
	module: {
		rules: [
            {
                test: /\.svg/,
				type: "asset/inline"
            },
			{
				test: /\.(png|jpe?g|webp|gif|mp4)$/,
				type: "asset/resource"
			},
			{
				test: /\.js$/,
				use: [
					{
						loader: "builtin:swc-loader",
						options: {
							jsc: {
								parser: {
									syntax: "ecmascript"
								}
							},
							env: { targets }
						}
					}
				]
			},
            {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
            },
		]
	},
	plugins: [new rspack.HtmlRspackPlugin({ template: "./index.html" })],
	optimization: {
		minimizer: [
			new rspack.SwcJsMinimizerRspackPlugin(),
			new rspack.LightningCssMinimizerRspackPlugin({
				minimizerOptions: { targets }
			})
		]
	},
	experiments: {
		css: true
	},
    devServer: {
        port: 8080,
        watchFiles: ['src/index.css', 'src/**/*.js']
    },
});
