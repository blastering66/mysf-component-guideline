const path = require('path');

 module.exports = async ({ config }) => {
     config.module.rules.push({
        test: /\.(sass|scss)$/,
        use: ['resolve-url-loader'],
        include: path.resolve(__dirname, '../')
     });
     config.module.rules.push({
        test: /\.(ttf|otf)$/,
        use: [
            {
                loader: "file-loader", // or directly file-loader
                query: {
                    name: '[name].[ext]',
                },
            }
        ],
        include: path.resolve(__dirname, '../')
     });

     config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web'
     }

    //  config.module.rules.push({
    //     test: /\.(ts|tsx)$/,
    //     use: [
    //       {
    //         loader: 'awesome-typescript-loader'
    //       },
    //     ],
    //     include: path.resolve(__dirname, "node_modules/SmartfrenUIKit"),
    //   });
    //   config.module.rules.push({
    //     test: /\.(jsx|ts|tsx)$/,
    //     loader: require.resolve('babel-loader'),
    //     options: {
    //       presets: [['react-app', { flow: false, typescript: true }]],
    //     },
    //   });
    
      config.resolve.extensions.push('.ts', '.tsx');

     return config;
 }