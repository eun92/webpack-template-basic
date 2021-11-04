// node js 환경에서 동작
const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  // entry : 파일을 읽어들이기 시작하는 진입점 설정
  entry: "./js/main.js", // html 대신 js로 사용

  // output : 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, "dist"), // 절대겅로를 명시! 따로 명시하지 않아도 dist/main.js로 번들링 됨..
    // filename: "main.js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // 정규표현식 ? - 있을수도 있고 없을수도 있음
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"], // 순서 중요! style-loader가 가장 마지막 (오른쪽에서 왼쪽으로 실행)
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  // plugins : 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),

    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  devServer: {
    host: "localhost",
  },
}
