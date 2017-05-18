
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  InspectorPanel: {
    displayName: 'InspectorPanel'
  },
  Button: {
    displayName: 'Button'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native/Libraries/Inspector/InspectorPanel.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ElementProperties = require('ElementProperties');
var NetworkOverlay = require('NetworkOverlay');
var PerformanceOverlay = require('PerformanceOverlay');
var React = require('React');
var ScrollView = require('ScrollView');
var StyleSheet = require('StyleSheet');
var Text = require('Text');
var TouchableHighlight = require('TouchableHighlight');
var View = require('View');

var PropTypes = React.PropTypes;

var InspectorPanel = _wrapComponent('InspectorPanel')(function (_React$Component) {
  _inherits(InspectorPanel, _React$Component);

  function InspectorPanel() {
    _classCallCheck(this, InspectorPanel);

    return _possibleConstructorReturn(this, (InspectorPanel.__proto__ || Object.getPrototypeOf(InspectorPanel)).apply(this, arguments));
  }

  _createClass(InspectorPanel, [{
    key: 'renderWaiting',
    value: function renderWaiting() {
      if (this.props.inspecting) {
        return React.createElement(
          Text,
          { style: styles.waitingText },
          'Tap something to inspect it'
        );
      }
      return React.createElement(
        Text,
        { style: styles.waitingText },
        'Nothing is inspected'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var contents = void 0;
      if (this.props.inspected) {
        contents = React.createElement(
          ScrollView,
          { style: styles.properties },
          React.createElement(ElementProperties, {
            style: this.props.inspected.style,
            frame: this.props.inspected.frame,
            source: this.props.inspected.source,
            hierarchy: this.props.hierarchy,
            selection: this.props.selection,
            setSelection: this.props.setSelection
          })
        );
      } else if (this.props.perfing) {
        contents = React.createElement(PerformanceOverlay, null);
      } else if (this.props.networking) {
        contents = React.createElement(NetworkOverlay, null);
      } else {
        contents = React.createElement(
          View,
          { style: styles.waiting },
          this.renderWaiting()
        );
      }
      return React.createElement(
        View,
        { style: styles.container },
        !this.props.devtoolsIsOpen && contents,
        React.createElement(
          View,
          { style: styles.buttonRow },
          React.createElement(Button, {
            title: 'Inspect',
            pressed: this.props.inspecting,
            onClick: this.props.setInspecting
          }),
          React.createElement(Button, { title: 'Perf',
            pressed: this.props.perfing,
            onClick: this.props.setPerfing
          }),
          React.createElement(Button, { title: 'Network',
            pressed: this.props.networking,
            onClick: this.props.setNetworking
          }),
          React.createElement(Button, { title: 'Touchables',
            pressed: this.props.touchTargetting,
            onClick: this.props.setTouchTargetting
          })
        )
      );
    }
  }]);

  return InspectorPanel;
}(React.Component));

InspectorPanel.propTypes = {
  devtoolsIsOpen: PropTypes.bool,
  inspecting: PropTypes.bool,
  setInspecting: PropTypes.func,
  inspected: PropTypes.object,
  perfing: PropTypes.bool,
  setPerfing: PropTypes.func,
  touchTargetting: PropTypes.bool,
  setTouchTargetting: PropTypes.func,
  networking: PropTypes.bool,
  setNetworking: PropTypes.func
};

var Button = _wrapComponent('Button')(function (_React$Component2) {
  _inherits(Button, _React$Component2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        TouchableHighlight,
        { onPress: function onPress() {
            return _this3.props.onClick(!_this3.props.pressed);
          }, style: [styles.button, this.props.pressed && styles.buttonPressed] },
        React.createElement(
          Text,
          { style: styles.buttonText },
          this.props.title
        )
      );
    }
  }]);

  return Button;
}(React.Component));

var styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    margin: 2,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPressed: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    margin: 5
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  properties: {
    height: 200
  },
  waiting: {
    height: 100
  },
  waitingText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
    color: 'white'
  }
});

module.exports = InspectorPanel;