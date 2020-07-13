module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    resolve: {
        alias: {
          'react-native$': 'react-native-web'
        }
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.ttf$/,
    //             loader: "url-loader", // or directly file-loader
    //             include: path.resolve(__dirname, "/node_modules/react-native-vector-icons"),
    //           },
    //     ]
    // }
};
