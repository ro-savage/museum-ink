'use strict';

var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var merge = require('lodash/object/merge');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig (options) {

  // Environment type
  var BUILD = !!options.BUILD; // generate minified builds
  var TEST = !!options.TEST; // generate test builds

  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   */
  config.entry = [];

  if (!TEST) {
    config.entry.push(
      './src/index.js'
    );
  }
  if (!TEST && !BUILD) {
    config.entry.push(
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server'
    );
  }

  config.resolve = {
    extensions: ['', '.js', '.css'],
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   */
  config.output = {};
  if (!TEST) {
    merge(config.output, {
      // Absolute output directory
      path: __dirname + '/public',

      // Output path from the view of the page
      // Uses webpack-dev-server in development
      publicPath: BUILD ? '/assets/' : 'http://localhost:8080/',

      // Filename for entry points
      // Only adds hash in build mode
      filename: BUILD ? '[name].[hash].js' : '[name].bundle.js',

      // Filename for non-entry points
      // Only adds hash in build mode
      chunkFilename: BUILD ? '[name].[hash].js' : '[name].bundle.js',
    });
  }

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (TEST) {
    config.devtool = 'inline-source-map';
  } else if (BUILD) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval';
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    preLoaders: [],
    loaders: [{

      /**
       * JS LOADER
       * Reference: https://github.com/babel/babel-loader
       * Transpile .js files using babel-loader
       * Compiles ES6 and ES7 into ES5 code
       */
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,

    }, {

      test: /\.jsx?$/,
      loader: 'babel',
      include: /prosemirror/,

    }, {

      /**
       * ASSET LOADER
       * Reference: https://github.com/webpack/file-loader
       * Copy image and font files to output directory
       * Rename the file using the asset hash
       * Pass along the updated reference to your code
       */
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file?name=[name].[sha1:hash:base36:5].[ext]',
    }, {

      /**
       * HTML LOADER
       * Reference: https://github.com/webpack/raw-loader
       * Converts file contents into an inline string
       */
      test: /\.html$/,
      loader: 'raw',
    }],
  };

  var cssLoader = {

    /**
     * EXTRACT TEXT PLUGIN
     * Reference: https://github.com/webpack/extract-text-webpack-plugin
     * Extract css files in production builds
     *
     * STYLE LOADER
     * Reference: https://github.com/webpack/style-loader
     * Use style-loader in development for hot-loading
     *
     * CSS LOADER
     * Reference: https://github.com/webpack/css-loader
     * Allow loading css through js
     */
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base36:5]!postcss'),
  };

  // Don't load css in test mode
  if (TEST) {

    /**
     * NULL LOADER
     * Reference: https://github.com/webpack/null-loader
     * Return an empty module
     */
    cssLoader.loader = 'null';
  }

  // Add cssLoader to the loader list
  config.module.loaders.push(cssLoader);

  /**
   * PostCSS
   * Reference: https://github.com/postcss/postcss-loader
   * Postprocess your css with PostCSS plugins
   */
  config.postcss = [

    /**
     * AUTOPREFIXER
     * Reference: https://github.com/postcss/autoprefixer
     * Add vendor prefixes to your css
     */
    autoprefixer({
      browsers: ['last 2 version'],
    }),

    /**
     * SIMPLE VARS
     * Reference: https://github.com/postcss/postcss-simple-vars
     * PostCSS plugin for Sass-like variables
     */
    require('postcss-simple-vars'),

  ];

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [];

  // Skip rendering index.html in test mode
  if (!TEST) {
    config.plugins.push(

      /**
       * HTML WEBPACK PLUGIN
       * Reference: https://github.com/ampedandwired/html-webpack-plugin
       * Render index.html
       */
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: 'body',
        minify: BUILD,
      }),

      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files
      new ExtractTextPlugin('[name].[contenthash].css')
    );
  }

  // Add build specific plugins
  if (BUILD) {
    config.plugins.push(

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin(),

      // Reference: https://github.com/johnagan/clean-webpack-plugin
      // Empty the build folder before building
      new CleanWebpackPlugin(['public'])
    );
  }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './public',
    stats: {
      modules: false,
      cached: false,
      colors: true,
      chunk: false,
    },
  };

  return config;
};
