const webpack = require('webpack');
const pkg = require('./package.json');
const MergeJsonWebpackPlugin = require("merge-jsons-webpack-plugin");
module.exports = (config, options, targetOptions) => {
    config.plugins.push(
        new webpack.DefinePlugin({
            APP_VERSION: JSON.stringify(pkg.version),
            APP_URL: "test ici",
            APP_URL1: process.env.APP_URL1,

        })
    );
    config.plugins.push(
        new MergeJsonWebpackPlugin({
            debug: false,
            output: {
                groupBy: [{
                        pattern: "./src/assets/i18n/fr/*.json",
                        fileName: "./assets/i18n/fr.json"
                    },
                    {
                        pattern: "./src/assets/i18n/en/*.json",
                        fileName: "./assets/i18n/en.json"
                    }
                ]
            }
        }),
    )
    return config;
};