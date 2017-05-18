Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  FadeInView: {
    displayName: 'FadeInView'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/src/containers/App/FadeInView.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var FadeInView = _wrapComponent('FadeInView')(function (_Component) {
  _inherits(FadeInView, _Component);

  function FadeInView(props) {
    _classCallCheck(this, FadeInView);

    var _this = _possibleConstructorReturn(this, (FadeInView.__proto__ || Object.getPrototypeOf(FadeInView)).call(this, props));

    _this.state = {
      fadeAnim: new _reactNative.Animated.Value(0)
    };
    return _this;
  }

  _createClass(FadeInView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _reactNative.Animated.timing(this.state.fadeAnim, {
        toValue: 1,
        duration: 5000
      }).start();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.Animated.View,
        {
          style: _extends({}, this.props.style, {
            opacity: this.state.fadeAnim,
            transform: [{
              translateY: this.state.fadeAnim.interpolate({
                inputRange: [0, 0.5, 0.7, 0.9, 1],
                outputRange: [150, 300, 500, -50, 0] })
            }, {
              rotate: this.state.fadeAnim.interpolate({
                inputRange: [0, 0.5, 0.7, 0.9, 1],
                outputRange: ['0deg', '90deg', '180deg', '270deg', '0deg'] })
            }],
            backgroundColor: this.state.fadeAnim.interpolate({
              inputRange: [0, 0.5, 0.7, 0.9, 1],
              outputRange: [this.props.style.backgroundColor, 'green', 'orange', 'purple', this.props.style.backgroundColor]
            })
          })
        },
        this.props.children
      );
    }
  }]);

  return FadeInView;
}(_react2.Component));

exports.default = FadeInView;