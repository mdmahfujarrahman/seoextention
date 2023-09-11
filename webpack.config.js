const path = require("path");

module.exports = {
    entry: {
        background: "./src/background.js",
        popup: "./src/popup.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        fallback: {
            util: false, // Disable 'util' module in the browser environment
            stream: require.resolve("stream-browserify"),
            path: require.resolve("path-browserify"),
            fs: false, // Disable 'fs' module in the browser environment
        },
    },
};
