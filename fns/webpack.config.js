/* eslint-disable @typescript-eslint/no-var-requires */
const Dotenv = require("dotenv-webpack");

const babelConfig = () => {
    // api.cache(true);

    const presets = [["@babel/preset-typescript", { isTSX: true, allExtensions: true }]];

    const plugins = [["@babel/plugin-proposal-decorators", { legacy: true }], ["@babel/proposal-class-properties", { loose: true }], "@babel/proposal-object-rest-spread"];

    return {
        cacheDirectory: true,
        plugins,
        presets,
    };
};

module.exports = {
    externals: {},
    optimization: { minimize: false },
    plugins: [new Dotenv()],
    module: {
        rules: [
            {
                test: /\.js|\.ts?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        ...babelConfig(),
                    },
                },
            },
        ],
    },
};
