import * as path from "path";
const mode = process.env;
module.exports = {
    mode: 'production',
    entry: './src/Index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webWheel.js',
        library: {
            type: 'umd', // umd, amd(define)
        },
    },
    optimization: {
        minimize: false
    },
    resolve: {
        alias: {
            '@' : path.resolve(__dirname, 'src/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true, // 只做语言转换，而不做类型检查
                        }
                    }
                ],

            }
        ]
    }
}
