import * as Webpack from 'webpack';
import * as WebpackMerge from 'webpack-merge';
import * as Path from 'path';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as TerserPlugin from 'terser-webpack-plugin';
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import defaultConfig from './webpack.base';

export default WebpackMerge.smart(
    {
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                    terserOptions: {
                        compress: {
                            drop_console: true
                        }
                    }
                }),
                new OptimizeCssAssetsPlugin()
            ]
        },
        devtool: 'nosources-source-map',
        module: {
            rules: [
                {
                    test: /\.(c|s[ac])ss$/i,
                    use: [MiniCssExtractPlugin.loader],
                    exclude: /[\\/]node_modules[\\/]/
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'app/[name]-[hash:8].css'
            })
        ],
        output: {
            path: Path.join(__dirname, '../dist/prod') + '/'
        }
    } as Webpack.Configuration,
    defaultConfig
);
