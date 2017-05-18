var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  MenuContext: {
    displayName: 'MenuContext',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-menu/src/menu/makeMenuContext.js',
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

var nextID = 1;

module.exports = function (React, ReactNative, _ref) {
  var constants = _ref.constants,
      model = _ref.model,
      styles = _ref.styles;
  var UIManager = ReactNative.NativeModules.UIManager,
      TouchableWithoutFeedback = ReactNative.TouchableWithoutFeedback,
      ScrollView = ReactNative.ScrollView,
      View = ReactNative.View;

  var AnimatedOptionsContainer = require('./makeAnimatedOptionsContainer')(React, ReactNative);

  var once = function once(fn) {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        fn.apply(undefined, arguments);
      }
    };
  };

  var defaultOptionsContainerRenderer = function defaultOptionsContainerRenderer(options) {
    return React.createElement(
      ScrollView,
      null,
      options
    );
  };

  var makeOptions = function makeOptions(options, _ref2) {
    var top = _ref2.top,
        right = _ref2.right;
    var _options$props = options.props,
        optionsContainerStyle = _options$props.optionsContainerStyle,
        _options$props$render = _options$props.renderOptionsContainer,
        renderOptionsContainer = _options$props$render === undefined ? defaultOptionsContainerRenderer : _options$props$render;

    return React.createElement(
      AnimatedOptionsContainer,
      { style: [styles.optionsContainer, optionsContainerStyle, { top: top, right: right }] },
      renderOptionsContainer(options)
    );
  };

  var NULL_HOOKS = {
    didOpen: function didOpen() {},
    didClose: function didClose() {}
  };

  var MenuContext = _wrapComponent('MenuContext')(React.createClass({
    displayName: 'MenuContext',
    mixins: [TimerMixin],

    isMenuOpen: function isMenuOpen() {
      return this.state.openedMenu;
    },
    openMenu: function openMenu(name) {
      var _this = this;

      var handle = ReactNative.findNodeHandle(this._menus[name].ref);
      UIManager.measure(handle, function (x, y, w, h, px, py) {
        _this._menus[name].measurements = { x: x, y: y, w: w, h: h, px: px, py: py };

        _this.setState({
          openedMenu: name,
          menuOptions: _this._makeAndPositionOptions(name, _this._menus[name].measurements),
          backdropWidth: _this._ownMeasurements.w
        });

        _this._activeMenuHooks = _this._menus[name];
        _this._activeMenuHooks && _this._activeMenuHooks.didOpen();
      });
    },
    closeMenu: function closeMenu() {
      this.setState({
        openedMenu: '',
        menuOptions: null
      });

      this._activeMenuHooks && this._activeMenuHooks.didClose();
      this._activeMenuHooks = NULL_HOOKS;
    },
    toggleMenu: function toggleMenu(name) {
      if (this.state.openedMenu === name) {
        this.closeMenu(name);
      } else {
        this.openMenu(name);
      }
    },
    getInitialState: function getInitialState() {
      return {
        openedMenu: '',
        menuOptions: null,
        optionsTop: 0,
        optionsRight: 0,
        backdropWidth: 0
      };
    },

    childContextTypes: {
      menuController: model.IMenuController
    },
    getChildContext: function getChildContext() {
      var menuController = {
        open: this.openMenu,
        close: this.closeMenu,
        toggle: this.toggleMenu,
        registerMenu: this._registerMenu,
        unregisterMenu: this._unregisterMenu,
        registerOptionsElement: this._registerOptionsElement,
        makeName: this._makeName
      };
      return { menuController: menuController };
    },
    componentWillMount: function componentWillMount() {
      this._menus = {};
      this._options = {};

      this.onLayout = once(this.onLayout);
    },
    onLayout: function onLayout() {
      var _this2 = this;

      var handle = ReactNative.findNodeHandle(this.refs.Container);
      UIManager.measure(handle, function (x, y, w, h, px, py) {
        _this2._ownMeasurements = { x: x, y: y, w: w, h: h, px: px, py: py };
      });
    },
    _registerMenu: function _registerMenu(name, hooks) {
      if (this._menus[name]) {
        console.warn('Menu ' + name + ' has already been registered in this context. Please provide a different name.');
      }
      this._menus[name] = hooks;
    },
    _unregisterMenu: function _unregisterMenu(name) {
      delete this._menus[name];
      delete this._options[name];
    },
    _registerOptionsElement: function _registerOptionsElement(name, options) {
      var _this3 = this;

      if (this.state.menuOptions === options) {
        return;
      }
      this._options[name] = options;

      this.setTimeout(function () {
        if (_this3.state.openedMenu === name) {
          _this3.setState({ menuOptions: _this3._makeAndPositionOptions(name, _this3._menus[name].measurements) });
        }
      }, 16);
    },
    _makeName: function _makeName() {
      return 'menu-' + nextID++;
    },
    _makeAndPositionOptions: function _makeAndPositionOptions(name, menuMeasurements) {
      var options = this._options[name];
      var menuWidth = menuMeasurements.w,
          menuPX = menuMeasurements.px,
          menuPY = menuMeasurements.py;
      var _ownMeasurements = this._ownMeasurements,
          ownWidth = _ownMeasurements.w,
          ownPX = _ownMeasurements.px,
          ownPY = _ownMeasurements.py;

      var optionsTop = menuPY - ownPY;
      var optionsRight = ownWidth + ownPX - menuPX - menuWidth;
      return makeOptions(options, { top: optionsTop, right: optionsRight });
    },
    render: function render() {
      return React.createElement(
        View,
        { ref: 'Container', onLayout: this.onLayout, style: { flex: 1 } },
        React.createElement(
          View,
          { style: this.props.style },
          this.props.children
        ),
        React.createElement(
          TouchableWithoutFeedback,
          { onPress: this.closeMenu },
          React.createElement(View, { style: [styles.backdrop, this.state.openedMenu ? { width: this.state.backdropWidth, top: 0, bottom: 0 } : null] })
        ),
        this.state.menuOptions
      );
    }
  }));

  return MenuContext;
};