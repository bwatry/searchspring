const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        rules: [{ 
            test: /\.jsx?$/,
            exclude: /node_modules/, 
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-react"]
                }
            }}]
    }
}