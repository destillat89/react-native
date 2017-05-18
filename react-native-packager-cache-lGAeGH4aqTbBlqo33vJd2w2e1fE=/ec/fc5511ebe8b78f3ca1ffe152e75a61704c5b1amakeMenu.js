var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Menu: {
    displayName: 'Menu',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-menu/src/menu/makeMenu.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var TimerMixin = require('react-timer-mixin');

module.exports = function (React, ReactNative, _ref) {
  var constants = _ref.constants,
      model = _ref.model,
      styles = _ref.styles;
  var UIManager = ReactNative.NativeModules.UIManager,
      View = ReactNative.View;


  var Menu = _wrapComponent('Menu')(React.createClass({
    displayName: 'Menu',
    propTypes: {
      name: React.PropTypes.string,
      onSelect: React.PropTypes.func,
      onOpen: React.PropTypes.func,
      onClose: React.PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
      return {
        onSelect: function onSelect() {},
        onOpen: function onOpen() {},
        onClose: function onClose() {}
      };
    },

    contextTypes: {
      menuController: model.IMenuController
    },
    childContextTypes: {
      getClosestMenuName: React.PropTypes.func
    },
    getChildContext: function getChildContext() {
      var _this = this;

      return { getClosestMenuName: function getClosestMenuName() {
          return _this._name;
        } };
    },
    componentWillMount: function componentWillMount() {
      this._name = this.props.name || this.context.menuController.makeName();
    },
    componentWillUnmount: function componentWillUnmount() {
      this.context.menuController.unregisterMenu(this._name);
    },
    getName: function getName() {
      return this._name;
    },
    _register: function _register(ref) {
      var _this2 = this;

      this.context.menuController.registerMenu(this._name, {
        ref: ref,
        didOpen: function didOpen() {
          return _this2.didOpen();
        },
        didClose: function didClose() {
          return _this2.didClose();
        }
      });
    },
    onSelect: function onSelect(value) {
      var shouldClose = this.props.onSelect(value) !== false;
      if (shouldClose) {
        this.context.menuController.close();
      }
    },
    didOpen: function didOpen() {
      this.props.onOpen();
    },
    didClose: function didClose() {
      this.props.onClose();
    },
    render: function render() {
      var _this3 = this;

      var children = this.props.children;


      if (React.Children.count(children) < 2) {
        throw new Error('Menu component is missing required children components MenuTrigger and MenuOptions.');
      }

      var _children$reduce = children.reduce(function (accum, child) {
        switch (child.type.displayName) {
          case 'MenuOptions':
            if (accum.options) {
              throw new Error('Menu component has two MenuOptions children, but it can only use one. Please remove one of them.');
            }
            accum.options = React.cloneElement(child, { onSelect: _this3.onSelect });
            break;
          default:
            accum.rest.push(child);
        }
        return accum;
      }, { options: null, rest: [] }),
          rest = _children$reduce.rest,
          options = _children$reduce.options;

      if (!options) {
        throw new Error('Menu component is missing required child component MenuOptions.');
      }

      this.context.menuController.registerOptionsElement(this._name, options);

      return React.createElement(
        View,
        { style: this.props.style, ref: this._register, collapsable: false },
        rest
      );
    }
  }));

  return Menu;
};