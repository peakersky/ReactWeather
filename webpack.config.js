/**
 * Created by davidlee on 15/12/2016.
 */
module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
          Main: 'app/components/Main.jsx',
          Nav: 'app/components/Nav.jsx',
          Weather: 'app/components/Weather.jsx',
          WeatherForm: 'app/components/WeatherForm.jsx',
          WeatherMessage: 'app/components/WeatherMessage.jsx',
          About: 'app/components/About.jsx',
          Examples: 'app/components/Examples.jsx',
          openWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader', // helps load jsx files.
                query: {
                    presets: ['react', 'es2015'] // compile react and es2015. Babel needs these presets.
                },
                test: /\.jsx?$/, // want to get the extension filename.
                exclude: /(node_modules|bower_components)/ // Choose which folders to exclude from running through webpack
            }
        ]
    },
    devtool: 'inline-source-map'
};
