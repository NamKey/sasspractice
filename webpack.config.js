const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniExtractCSS = require("mini-css-extract-plugin");

const ENTRY_FILE = path.resolve(__dirname, "src", "js", "main.js");
const OUTPUT_FILE = path.join(__dirname, "dist");

const config = {
    entry: [ENTRY_FILE],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
        ],
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniExtractCSS.loader,
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [autoprefixer()];
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
    output: {
        path: OUTPUT_FILE,
        filename: "[name].js",
    },
    plugins: [new MiniExtractCSS({ filename: "styles.css" })],
};

module.exports = config;
