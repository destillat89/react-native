var _react10 = require('react');

var _react11 = _interopRequireDefault5(_react10);

var _index9 = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index10 = _interopRequireDefault5(_index9);

function _interopRequireDefault5(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components5 = {
  AnimatedOptionsContainer: {
    displayName: 'AnimatedOptionsContainer',
    isInFunction: true
  }
};

var _node_modulesReactTransformHmrLibIndexJs5 = (0, _index10.default)({
  filename: '/var/www/react-native/test/react-native-packager-cache-lGAeGH4aqTbBlqo33vJd2w2e1fE=/67/4bea02269a9d048c4440bb33ce80c1897b91a670c7939e65432e698cf42569778b78015c42e2576be650bd8e3cbe3222a4afe94a8b0b94fd6ae404239aa62bcdd0853a3fb949bd66a09cfdffmakeAnimatedOptionsContainer.js',
  components: _components5,
  locals: [module],
  imports: [_react11.default]
});

function _wrapComponent5(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs5(Component, id);
  };
}

var _react8 = require('react');

var _react9 = _interopRequireDefault4(_react8);

var _index7 = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index8 = _interopRequireDefault4(_index7);

function _interopRequireDefault4(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _components4 = {
  AnimatedOptionsContainer: {
    displayName: 'AnimatedOptionsContainer',
    isInFunction: true
  }
};

var _node_modulesReactTransformHmrLibIndexJs4 = (0, _index8.default)({
  filename: '/var/www/react-native/test/react-native-packager-cache-lGAeGH4aqTbBlqo33vJd2w2e1fE=/6e/70c7939e65432e698cf42569778b78015c42e2576be650bd8e3cbe3222a4afe94a8b0b94fd6ae404239aa62bcdd0853a3fb949bd66a09cfdffmakeAnimatedOptionsContainer.js',
  components: _components4,
  locals: [module],
  imports: [_react9.default]
});

function _wrapComponent4(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs4(Component, id);
  };
}

var _react6 = require('react');

var _react7 = _interopRequireDefault3(_react6);

var _index5 = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault3(_index5);

function _interopRequireDefault3(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _components3 = {
  AnimatedOptionsContainer: {
    displayName: 'AnimatedOptionsContainer',
    isInFunction: true
  }
};

var _node_modulesReactTransformHmrLibIndexJs3 = (0, _index6.default)({
  filename: '/var/www/react-native/test/react-native-packager-cache-lGAeGH4aqTbBlqo33vJd2w2e1fE=/8a/576be650bd8e3cbe3222a4afe94a8b0b94fd6ae404239aa62bcdd0853a3fb949bd66a09cfdffmakeAnimatedOptionsContainer.js',
  components: _components3,
  locals: [module],
  imports: [_react7.default]
});

function _wrapComponent3(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs3(Component, id);
  };
}

var _react4 = require('react');

var _react5 = _interopRequireDefault2(_react4);

var _index3 = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index4 = _interopRequireDefault2(_index3);

function _interopRequireDefault2(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

  var AnimatedOptionsContainer = _wrapComponent('_component')(_wrapComponent2('AnimatedOptionsContainer')(_wrapComponent3('AnimatedOptionsContainer')(_wrapComponent4('AnimatedOptionsContainer')(_wrapComponent5('AnimatedOptionsContainer')(React.createClass({
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
  }))))));

  return AnimatedOptionsContainer;
};