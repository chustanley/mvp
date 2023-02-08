
var path = require('path');
// const chalk = require('chalk');



var SRC_DIR = path.join(__dirname, './client/webpack-src'); // FIRST SOURCE THAT HAS ALL THE DEPENDENCY!

var DIST_DIR = path.join(__dirname, './client/webpack-output');


module.exports = {
  // mode needs to be set to 'development'. Another option is 'production'
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },

  // Out of the box, webpack only understands JavaScript and JSON files. "Loaders" allow
  // webpack to process other types of files and convert them into valid modules that can
  // be consumed by your application and added to the dependency graph.

  module: {

    rules: [
      {
        // this loader allows the direct "import" of css rules, such as in
        // client/webpack-src/Image.jsx / ---> this is when you write raw CSS inside of JSX

        // The "test" property identifies which file or files should be transformed.
        // The "use" property indicates which loader should be used to do the transforming.
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // is this only for raw css? how does the css file get transpiled
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // require .babelrc file with
        },
      }
    ],
  },
};
