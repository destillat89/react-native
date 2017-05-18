var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  MenuOption: {
    displayName: 'MenuOption',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-menu/src/menu/makeMenuOption.js',
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
  var model = _ref.model,
      styles = _ref.styles;
  var View = ReactNative.View,
      TouchableWithoutFeedback = ReactNative.TouchableWithoutFeedback;


  var MenuOption = _wrapComponent('MenuOption')(React.createClass({
    displayName: 'MenuOption',
    contextTypes: {
      menuController: model.IMenuController
    },
    onPress: function onPress() {
      !this.props.disabled && this.props.onPress(this.props.value);
    },
    render: function render() {
      if (this.props.renderTouchable) {
        return React.cloneElement(this.props.renderTouchable(), { onPress: this.onPress }, React.createElement(
          View,
          { style: [styles.option, this.props.style] },
          this.props.children
        ));
      }
      return React.createElement(
        TouchableWithoutFeedback,
        { onPress: this.onPress },
        React.createElement(
          View,
          { style: [styles.option, this.props.style] },
          this.props.children
        )
      );
    }
  }));

  return MenuOption;
};