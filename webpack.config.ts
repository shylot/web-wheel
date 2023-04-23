import * as path from "path";

module.exports = {
    mode: 'production',
    entry: {
        util: './src/util.ts',
        ui: './src/ui.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
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
