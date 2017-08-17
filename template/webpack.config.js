let path = require('path')
  , webpack = require('webpack')
  , CleanWebpackPlugin = require('clean-webpack-plugin')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')

let extractCSS = new ExtractTextPlugin("css/app.css")

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: ['vue', 'vue-router', 'vuelm']
  },
  
  output: {
    path: path.join(__dirname, 'dist'),
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
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            'css': extractCSS.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader' ])
      },{
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
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  
  devServer: {
    historyApiFallback: true,
    port: 5000,
    noInfo: true
  },
  
  performance: {
    hints: false
  },
  
  devtool: '#eval-source-map',

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(['dist']),
    extractCSS,
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      warnings: false
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
