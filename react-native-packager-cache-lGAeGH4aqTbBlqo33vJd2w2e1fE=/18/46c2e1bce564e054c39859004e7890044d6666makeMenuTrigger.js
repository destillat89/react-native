var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  MenuTrigger: {
    displayName: 'MenuTrigger',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-menu/src/menu/makeMenuTrigger.js',
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
  var model = _ref.model;
  var TouchableWithoutFeedback = ReactNative.TouchableWithoutFeedback,
      View = ReactNative.View;


  var MenuTrigger = _wrapComponent('MenuTrigger')(React.createClass({
    displayName: 'MenuTrigger',
    propTypes: {
      disabled: React.PropTypes.bool,
      renderTouchable: React.PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
      return { disabled: false };
    },

    contextTypes: {
      menuController: model.IMenuController,
      getClosestMenuName: React.PropTypes.func.isRequired
    },
    onPress: function onPress() {
      if (!this.props.disabled) {
        var _context = this.context,
            menuController = _context.menuController,
            getClosestMenuName = _context.getClosestMenuName;

        menuController.toggle(getClosestMenuName());
      }
    },
    render: function render() {
      if (this.props.renderTouchable) {
        return React.cloneElement(this.props.renderTouchable(), { onPress: this.onPress }, React.createElement(
          View,
          { style: this.props.style },
          this.props.children
        ));
      }
      return React.createElement(
        TouchableWithoutFeedback,
        _extends({ onPress: this.onPress }, this.props),
        React.createElement(
          View,
          { style: this.props.style },
          this.props.children
        )
      );
    }
  }));

  return MenuTrigger;
};