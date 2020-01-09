import * as Webpack from 'webpack';
import * as Path from 'path';
import * as CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import * as CopyPlugin from 'copy-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';

export default {
    entry: {
        main: './src/main.ts'
    },
    resolve: {
        mainFields: ['module', 'main'],
        extensions: ['.ts', '.tsx', '.js', '.vue', '.json']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor'
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader: 'vue-loader',
                exclude: /[\\/]node_modules[\\/]/
            },
            {
                test: /\.tsx?$/i,
                loader: 'ts-loader',
                options: {
                    configFile: '../build/tsconfig.bundle.json',
                    transpileOnly: true,
                    happyPackMode: false,
                    appendTsSuffixTo: /\.vue$/i
                },
                exclude: /[\\/]node_modules[\\/]/
            },
            {
                test: /\.(c|s[ac])ss$/i,
                use: ['css-loader', 'sass-loader'],
                exclude: /[\\/]node_modules[\\/]/
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            esModule: false,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    esModule: false,
                                    name: 'img/[name]-[hash:8].[ext]'
                                }
                            }
                        }
                    },
                    {
                        loader: 'img-loader',
                        options: {
                            plugins: [
                                require('imagemin-gifsicle')({
                                    interlaced: false
                                }),
                                require('imagemin-mozjpeg')({
                                    progressive: true,
                                    arithmetic: false
                                }),
                                require('imagemin-pngquant')({
                                    floyd: 0.5,
                                    speed: 2
                                }),
                                require('imagemin-svgo')({
                                    plugins: [{ removeTitle: true }, { convertPathData: false }]
                                })
                            ]
                        }
                    }
                ],
                exclude: /[\\/]node_modules[\\/]/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new CaseSensitivePathsPlugin(),
        new CopyPlugin([
            {
                from: '**/*',
                context: Path.join(__dirname, 'assets/public/')
            }
        ]),
        new HtmlPlugin({
            template: Path.join(__dirname, 'assets/index.html')
        })
    ],
    output: {
        filename: 'app/[name]-[hash:8].js',
        chunkFilename: 'app/[name]-[chunkhash:8].js'
    }
} as Webpack.Configuration;
