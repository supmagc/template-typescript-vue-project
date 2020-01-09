import * as Webpack from 'webpack';
import * as WebpackMerge from 'webpack-merge';
import * as Path from 'path';
import defaultConfig from './webpack.base';

export default WebpackMerge(
    {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: Path.join(__dirname, 'dist/dev'),
            port: 9000,
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.(c|s[ac])ss$/i,
                    use: ['vue-style-loader'],
                    exclude: /[\\/]node_modules[\\/]/
                }
            ]
        },
        output: {
            path: Path.join(__dirname, '../dist/dev') + '/'
        }
    } as Webpack.Configuration,
    defaultConfig
);
