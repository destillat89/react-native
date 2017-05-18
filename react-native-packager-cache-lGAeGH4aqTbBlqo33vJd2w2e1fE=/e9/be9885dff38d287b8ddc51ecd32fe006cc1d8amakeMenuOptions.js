var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  MenuOptions: {
    displayName: 'MenuOptions',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-menu/src/menu/makeMenuOptions.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

module.exports = function (React, ReactNative, _ref) {
  var styles = _ref.styles;
  var TouchableWithoutFeedback = ReactNative.TouchableWithoutFeedback,
      View = ReactNative.View;


  var MenuOptions = _wrapComponent('MenuOptions')(React.createClass({
    displayName: 'MenuOptions',
    onSelect: function onSelect(value) {
      this.props.onSelect(value);
    },
    render: function render() {
      var _this = this;

      return React.createElement(
        TouchableWithoutFeedback,
        { style: [styles.options, this.props.style] },
        React.createElement(
          View,
          null,
          React.Children.map(this.props.children, function (x) {
            return React.cloneElement(x, { onPress: _this.onSelect });
          })
        )
      );
    }
  }));

  return MenuOptions;
};