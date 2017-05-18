var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-menu/src/menu/makeAnimatedOptionsContainer.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

module.exports = function (React, ReactNative) {
  var Animated = ReactNative.Animated;

  var TimerMixin = require('react-timer-mixin');

  var AnimatedOptionsContainer = _wrapComponent('_component')(React.createClass({
    displayName: 'AnimatedOptionsContainer',

    mixins: [TimerMixin],
    getInitialState: function getInitialState() {
      return { scaleAnim: new Animated.Value(0.001) };
    },
    componentDidMount: function componentDidMount() {
      var _this = this;

      this.setTimeout(function () {
        Animated.timing(_this.state.scaleAnim, {
          duration: 60,
          toValue: 1
        }).start();
      }, 16);
    },
    render: function render() {
      return React.createElement(
        Animated.View,
        { style: [this.props.style, { transform: [{ scale: this.state.scaleAnim }] }] },
        this.props.children
      );
    }
  }));

  return AnimatedOptionsContainer;
};