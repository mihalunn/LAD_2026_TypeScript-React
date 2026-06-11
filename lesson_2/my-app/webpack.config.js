import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.tsx",

    output: {
        filename: "bundle.js",
        clean: true
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],

    devServer: {
        port: 3000,
        open: true
    }
};
