'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('./webpack.config');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = require('webpack');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Admin on 09.02.2017.
 */
var app = (0, _express2.default)();

var compiler = (0, _webpack4.default)(_webpack2.default);
app.use((0, _webpackDevMiddleware2.default)(compiler, {
    stats: {
        colors: true
    }
}));

app.use((0, _webpackHotMiddleware2.default)(compiler));

app.get("/*", function (req, res) {
    res.sendFile(_path2.default.join(__dirname, "/public/index.html"));
});

app.listen(3000);
//# sourceMappingURL=app.js.map