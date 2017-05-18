

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  AppContainer: {
    displayName: 'AppContainer'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native/Libraries/ReactNative/AppContainer.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var EmitterSubscription = require('EmitterSubscription');
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var React = require('React');
var ReactNative = require('ReactNative');
var StyleSheet = require('StyleSheet');
var View = require('View');

var AppContainer = _wrapComponent('AppContainer')((_temp2 = _class = function (_React$Component) {
  _inherits(AppContainer, _React$Component);

  function AppContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      inspector: null,
      mainKey: 1
    }, _this._subscription = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppContainer, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        rootTag: this.props.rootTag
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (__DEV__) {
        this._subscription = RCTDeviceEventEmitter.addListener('toggleElementInspector', function () {
          var Inspector = require('Inspector');
          var inspector = _this2.state.inspector ? null : React.createElement(Inspector, {
            inspectedViewTag: ReactNative.findNodeHandle(_this2._mainRef),
            onRequestRerenderApp: function onRequestRerenderApp(updateInspectedViewTag) {
              _this2.setState(function (s) {
                return { mainKey: s.mainKey + 1 };
              }, function () {
                return updateInspectedViewTag(ReactNative.findNodeHandle(_this2._mainRef));
              });
            }
          });
          _this2.setState({ inspector: inspector });
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._subscription) {
        this._subscription.remove();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var yellowBox = null;
      if (__DEV__) {
        var YellowBox = require('YellowBox');
        yellowBox = React.createElement(YellowBox, null);
      }

      return React.createElement(
        View,
        { style: styles.appContainer, pointerEvents: 'box-none' },
        React.createElement(
          View,
          {
            collapsable: !this.state.inspector,
            key: this.state.mainKey,
            pointerEvents: 'box-none',
            style: styles.appContainer, ref: function ref(_ref2) {
              _this3._mainRef = _ref2;
            } },
          this.props.children
        ),
        yellowBox,
        this.state.inspector
      );
    }
  }]);

  return AppContainer;
}(React.Component), _class.childContextTypes = {
  rootTag: React.PropTypes.number
}, _temp2));

var styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});

module.exports = AppContainer;