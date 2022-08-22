const path = require("path")
const ForkTsCheckerWebpackPlugin = require( 'fork-ts-checker-webpack-plugin' );

console.log(path.resolve(__dirname, "dist"),)
module.exports = {
    mode: "development",
    entry: "./dist-ts/index.js",
    devtool: "source-map",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    resolve: {
        fallback: {
            fs: false,
            path: false
        },
        alias: {
            "@": path.resolve("src"),
            "@assets": path.resolve("public/Assets"),
            "@utils": path.resolve("src/Utils"),

        },
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },

        compress: true,
        port: 9000,
        host: "0.0.0.0",
        allowedHosts: 'all',
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(), // run TSC on a separate thread
    ]
}