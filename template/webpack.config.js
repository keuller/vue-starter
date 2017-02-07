var path = require('path')
  , webpack = require('webpack')
  , ExtractTextPlugin = require("extract-text-webpack-plugin")

var cssLoader = ExtractTextPlugin.extract({
    loader: 'css-loader!less-loader',
    fallbackLoader: 'vue-style-loader'
})

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['vue', 'vue-router', 'vuelm']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: cssLoader
          }
        }
      },
      {
        test: /\.css$/,
        loader: cssLoader
      },
      {
        test: /\.less$/,
        loader: cssLoader
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ["es2015", { "modules": false }]
          ]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },

  devServer: {
    historyApiFallback: true,
    noInfo: true
  },

  plugins: [
    new webpack.NoemitOnErrorsPlugin(),
    new ExtractTextPlugin("css/app.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      warnings: false
    })
  ]
}


if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: false,
      compress: {
        conitionals: true,
        warnings: false,
        dead_code: true,
        unused: true,
        evaluate: true,
        if_return: true,
        join_vers: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
