var _react4 = require('react');

var _react5 = _interopRequireDefault2(_react4);

var _index3 = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index4 = _interopRequireDefault2(_index3);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components2 = {
  AnimatedOptionsContainer: {
    displayName: 'AnimatedOptionsContainer',
    isInFunction: true
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index4.default)({
  filename: '/var/www/react-native/test/react-native-packager-cache-lGAeGH4aqTbBlqo33vJd2w2e1fE=/da/e404239aa62bcdd0853a3fb949bd66a09cfdffmakeAnimatedOptionsContainer.js',
  components: _components2,
  locals: [module],
  imports: [_react5.default]
});

function _wrapComponent2(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

  var AnimatedOptionsContainer = _wrapComponent('_component')(_wrapComponent2('AnimatedOptionsContainer')(React.createClass({
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
      return React.createElement(Animated.View, { style: [this.props.style, { transform: [{ scale: this.state.scaleAnim }] }] }, this.props.children);
    }
  })));

  return AnimatedOptionsContainer;
};