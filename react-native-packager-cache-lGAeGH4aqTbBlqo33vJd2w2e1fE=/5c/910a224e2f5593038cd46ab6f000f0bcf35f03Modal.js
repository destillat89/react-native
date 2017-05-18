
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _container;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Modal: {
    displayName: 'Modal'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native/Libraries/Modal/Modal.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var AppContainer = require('AppContainer');
var I18nManager = require('I18nManager');
var Platform = require('Platform');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var deprecatedPropType = require('deprecatedPropType');
var requireNativeComponent = require('requireNativeComponent');
var RCTModalHostView = requireNativeComponent('RCTModalHostView', null);

var PropTypes = React.PropTypes;

var Modal = _wrapComponent('Modal')((_temp = _class = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      if (this.props.visible === false) {
        return null;
      }

      var containerStyles = {
        backgroundColor: this.props.transparent ? 'transparent' : 'white'
      };

      var animationType = this.props.animationType;
      if (!animationType) {
        animationType = 'none';
        if (this.props.animated) {
          animationType = 'slide';
        }
      }

      var innerChildren = __DEV__ ? React.createElement(
        AppContainer,
        { rootTag: this.context.rootTag },
        this.props.children
      ) : this.props.children;

      return React.createElement(
        RCTModalHostView,
        {
          animationType: animationType,
          transparent: this.props.transparent,
          hardwareAccelerated: this.props.hardwareAccelerated,
          onRequestClose: this.props.onRequestClose,
          onShow: this.props.onShow,
          style: styles.modal,
          onStartShouldSetResponder: this._shouldSetResponder,
          supportedOrientations: this.props.supportedOrientations,
          onOrientationChange: this.props.onOrientationChange
        },
        React.createElement(
          View,
          { style: [styles.container, containerStyles] },
          innerChildren
        )
      );
    }
  }, {
    key: '_shouldSetResponder',
    value: function _shouldSetResponder() {
      return true;
    }
  }]);

  return Modal;
}(React.Component), _class.propTypes = {
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),

  transparent: PropTypes.bool,

  hardwareAccelerated: PropTypes.bool,

  visible: PropTypes.bool,

  onRequestClose: Platform.OS === 'android' ? PropTypes.func.isRequired : PropTypes.func,

  onShow: PropTypes.func,
  animated: deprecatedPropType(PropTypes.bool, 'Use the `animationType` prop instead.'),

  supportedOrientations: PropTypes.arrayOf(PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'])),

  onOrientationChange: PropTypes.func
}, _class.defaultProps = {
  visible: true,
  hardwareAccelerated: false
}, _class.contextTypes = {
  rootTag: React.PropTypes.number
}, _temp));

var side = I18nManager.isRTL ? 'right' : 'left';
var styles = StyleSheet.create({
  modal: {
    position: 'absolute'
  },
  container: (_container = {
    position: 'absolute'
  }, _defineProperty(_container, side, 0), _defineProperty(_container, 'top', 0), _container)
});

module.exports = Modal;