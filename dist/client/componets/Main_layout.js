'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('../../etc/data.js');

var api = _interopRequireWildcard(_data);

var _Navbar = require('./Navbar.jsx');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _SignIn = require('./SignForms/SignIn.jsx');

var _SignIn2 = _interopRequireDefault(_SignIn);

var _Footer_form = require('./Footer_form.jsx');

var _Footer_form2 = _interopRequireDefault(_Footer_form);

require('./Main_l.less');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Admin on 09.02.2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Main_layout = function (_React$Component) {
    _inherits(Main_layout, _React$Component);

    function Main_layout() {
        _classCallCheck(this, Main_layout);

        return _possibleConstructorReturn(this, (Main_layout.__proto__ || Object.getPrototypeOf(Main_layout)).apply(this, arguments));
    }

    _createClass(Main_layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container_m' },
                api.Account.id ? _react2.default.createElement(
                    'section',
                    { className: 'selc' },
                    _react2.default.createElement(_Navbar2.default, null),
                    _react2.default.createElement(
                        'main',
                        { className: 'main_wrap' },
                        this.props.children
                    ),
                    _react2.default.createElement(_Footer_form2.default, null)
                ) : _react2.default.createElement(_SignIn2.default, null)
            );
        }
    }]);

    return Main_layout;
}(_react2.default.Component);

exports.default = Main_layout;


var MainPage = function MainPage(props) {
    return _react2.default.createElement(
        'div',
        null,
        ' ',
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(
            'div',
            { className: 'main_wrap' },
            undefined.props.children
        )
    );
};
//# sourceMappingURL=Main_layout.js.map