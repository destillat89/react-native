

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ModalDropdown: {
    displayName: 'ModalDropdown'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native-modal-dropdown/components/ModalDropdown.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var TOUCHABLE_ELEMENTS = ['TouchableHighlight', 'TouchableOpacity', 'TouchableWithoutFeedback', 'TouchableWithNativeFeedback'];

var ModalDropdown = _wrapComponent('ModalDropdown')((_temp = _class = function (_Component) {
  _inherits(ModalDropdown, _Component);

  function ModalDropdown(props) {
    _classCallCheck(this, ModalDropdown);

    var _this = _possibleConstructorReturn(this, (ModalDropdown.__proto__ || Object.getPrototypeOf(ModalDropdown)).call(this, props));

    _this._button = null;
    _this._buttonFrame = null;
    _this._nextValue = null;
    _this._nextIndex = null;

    _this.state = {
      disabled: props.disabled,
      accessible: props.accessible !== false,
      loading: props.options == null,
      showDropdown: false,
      buttonText: props.defaultValue,
      selectedIndex: props.defaultIndex
    };
    return _this;
  }

  _createClass(ModalDropdown, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var buttonText = this._nextValue == null ? this.state.buttonText : this._nextValue.toString();
      var selectedIndex = this._nextIndex == null ? this.state.selectedIndex : this._nextIndex;
      if (selectedIndex < 0) {
        selectedIndex = nextProps.defaultIndex;
        if (selectedIndex < 0) {
          buttonText = nextProps.defaultValue;
        }
      }
      this._nextValue = null;
      this._nextIndex = null;

      this.setState({
        disabled: nextProps.disabled,
        loading: nextProps.options == null,
        buttonText: buttonText,
        selectedIndex: selectedIndex
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        this.props,
        this._renderButton(),
        this._renderModal()
      );
    }
  }, {
    key: '_updatePosition',
    value: function _updatePosition(callback) {
      var _this2 = this;

      if (this._button && this._button.measure) {
        this._button.measure(function (fx, fy, width, height, px, py) {
          _this2._buttonFrame = { x: px, y: py, w: width, h: height };
          callback && callback();
        });
      }
    }
  }, {
    key: 'show',
    value: function show() {
      var _this3 = this;

      this._updatePosition(function () {
        _this3.setState({
          showDropdown: true
        });
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.setState({
        showDropdown: false
      });
    }
  }, {
    key: 'select',
    value: function select(idx) {
      var value = this.props.defaultValue;
      if (idx == null || this.props.options == null || idx >= this.props.options.length) {
        idx = this.props.defaultIndex;
      }

      if (idx >= 0) {
        value = this.props.options[idx].toString();
      }

      this._nextValue = value;
      this._nextIndex = idx;

      this.setState({
        buttonText: value,
        selectedIndex: idx
      });
    }
  }, {
    key: '_renderButton',
    value: function _renderButton() {
      var _this4 = this;

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        { ref: function ref(button) {
            return _this4._button = button;
          },
          disabled: this.props.disabled,
          accessible: this.props.accessible,
          onPress: this._onButtonPress.bind(this) },
        this.props.children || _react3.default.createElement(
          _reactNative.View,
          { style: styles.button },
          _react3.default.createElement(
            _reactNative.Text,
            { style: [styles.buttonText, this.props.textStyle],
              numberOfLines: 1 },
            this.state.buttonText
          )
        )
      );
    }
  }, {
    key: '_onButtonPress',
    value: function _onButtonPress() {
      if (!this.props.onDropdownWillShow || this.props.onDropdownWillShow() !== false) {
        this.show();
      }
    }
  }, {
    key: '_renderModal',
    value: function _renderModal() {
      if (this.state.showDropdown && this._buttonFrame) {
        var frameStyle = this._calcPosition();
        var animationType = this.props.animated ? 'fade' : 'none';
        return _react3.default.createElement(
          _reactNative.Modal,
          { animationType: animationType,
            transparent: true,
            onRequestClose: this._onRequestClose.bind(this),
            supportedOrientations: ['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'] },
          _react3.default.createElement(
            _reactNative.TouchableWithoutFeedback,
            { accessible: this.props.accessible,
              onPress: this._onModalPress.bind(this) },
            _react3.default.createElement(
              _reactNative.View,
              { style: styles.modal },
              _react3.default.createElement(
                _reactNative.View,
                { style: [styles.dropdown, this.props.dropdownStyle, frameStyle] },
                this.state.loading ? this._renderLoading() : this._renderDropdown()
              )
            )
          )
        );
      }
    }
  }, {
    key: '_calcPosition',
    value: function _calcPosition() {
      var dimensions = _reactNative.Dimensions.get('window');
      var windowWidth = dimensions.width;
      var windowHeight = dimensions.height;

      var dropdownHeight = this.props.dropdownStyle && _reactNative.StyleSheet.flatten(this.props.dropdownStyle).height || _reactNative.StyleSheet.flatten(styles.dropdown).height;

      var bottomSpace = windowHeight - this._buttonFrame.y - this._buttonFrame.h;
      var rightSpace = windowWidth - this._buttonFrame.x;
      var showInBottom = bottomSpace >= dropdownHeight || bottomSpace >= this._buttonFrame.y;
      var showInLeft = rightSpace >= this._buttonFrame.x;

      var style = {
        height: dropdownHeight,
        top: showInBottom ? this._buttonFrame.y + this._buttonFrame.h : Math.max(0, this._buttonFrame.y - dropdownHeight)
      };

      if (showInLeft) {
        style.left = this._buttonFrame.x;
      } else {
        var dropdownWidth = this.props.dropdownStyle && _reactNative.StyleSheet.flatten(this.props.dropdownStyle).width || this.props.style && _reactNative.StyleSheet.flatten(this.props.style).width || -1;
        if (dropdownWidth !== -1) {
          style.width = dropdownWidth;
        }
        style.right = rightSpace - this._buttonFrame.w;
      }

      if (this.props.adjustFrame) {
        style = this.props.adjustFrame(style) || style;
      }

      return style;
    }
  }, {
    key: '_onRequestClose',
    value: function _onRequestClose() {
      if (!this.props.onDropdownWillHide || this.props.onDropdownWillHide() !== false) {
        this.hide();
      }
    }
  }, {
    key: '_onModalPress',
    value: function _onModalPress() {
      if (!this.props.onDropdownWillHide || this.props.onDropdownWillHide() !== false) {
        this.hide();
      }
    }
  }, {
    key: '_renderLoading',
    value: function _renderLoading() {
      return _react3.default.createElement(_reactNative.ActivityIndicator, { size: 'small' });
    }
  }, {
    key: '_renderDropdown',
    value: function _renderDropdown() {
      return _react3.default.createElement(_reactNative.ListView, { style: styles.list,
        dataSource: this._dataSource,
        renderRow: this._renderRow.bind(this),
        renderSeparator: this.props.renderSeparator || this._renderSeparator.bind(this),
        automaticallyAdjustContentInsets: false,
        showsVerticalScrollIndicator: this.props.showsVerticalScrollIndicator
      });
    }
  }, {
    key: '_renderRow',
    value: function _renderRow(rowData, sectionID, rowID, highlightRow) {
      var _this5 = this;

      var key = 'row_' + rowID;
      var highlighted = rowID == this.state.selectedIndex;
      var row = !this.props.renderRow ? _react3.default.createElement(
        _reactNative.Text,
        { style: [styles.rowText, highlighted && styles.highlightedRowText] },
        rowData
      ) : this.props.renderRow(rowData, rowID, highlighted);
      var preservedProps = {
        key: key,
        accessible: this.props.accessible,
        onPress: function onPress() {
          return _this5._onRowPress(rowData, sectionID, rowID, highlightRow);
        }
      };
      if (TOUCHABLE_ELEMENTS.find(function (name) {
        return name == row.type.displayName;
      })) {
        var props = _extends({}, row.props);
        props.key = preservedProps.key;
        props.onPress = preservedProps.onPress;
        switch (row.type.displayName) {
          case 'TouchableHighlight':
            {
              return _react3.default.createElement(
                _reactNative.TouchableHighlight,
                props,
                row.props.children
              );
            }
            break;
          case 'TouchableOpacity':
            {
              return _react3.default.createElement(
                _reactNative.TouchableOpacity,
                props,
                row.props.children
              );
            }
            break;
          case 'TouchableWithoutFeedback':
            {
              return _react3.default.createElement(
                _reactNative.TouchableWithoutFeedback,
                props,
                row.props.children
              );
            }
            break;
          case 'TouchableWithNativeFeedback':
            {
              return _react3.default.createElement(
                _reactNative.TouchableWithNativeFeedback,
                props,
                row.props.children
              );
            }
            break;
          default:
            break;
        }
      }
      return _react3.default.createElement(
        _reactNative.TouchableHighlight,
        preservedProps,
        row
      );
    }
  }, {
    key: '_onRowPress',
    value: function _onRowPress(rowData, sectionID, rowID, highlightRow) {
      if (!this.props.onSelect || this.props.onSelect(rowID, rowData) !== false) {
        highlightRow(sectionID, rowID);
        this._nextValue = rowData;
        this._nextIndex = rowID;
        this.setState({
          buttonText: rowData.toString(),
          selectedIndex: rowID
        });
      }
      if (!this.props.onDropdownWillHide || this.props.onDropdownWillHide() !== false) {
        this.setState({
          showDropdown: false
        });
      }
    }
  }, {
    key: '_renderSeparator',
    value: function _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
      var key = 'spr_' + rowID;
      return _react3.default.createElement(_reactNative.View, { style: styles.separator,
        key: key
      });
    }
  }, {
    key: '_dataSource',
    get: function get() {
      var ds = new _reactNative.ListView.DataSource({
        rowHasChanged: function rowHasChanged(r1, r2) {
          return r1 !== r2;
        }
      });
      return ds.cloneWithRows(this.props.options);
    }
  }]);

  return ModalDropdown;
}(_react2.Component), _class.propTypes = {
  disabled: _react2.PropTypes.bool,
  defaultIndex: _react2.PropTypes.number,
  defaultValue: _react2.PropTypes.string,
  options: _react2.PropTypes.array,

  accessible: _react2.PropTypes.bool,
  animated: _react2.PropTypes.bool,
  showsVerticalScrollIndicator: _react2.PropTypes.bool,

  style: _react2.PropTypes.oneOfType([_react2.PropTypes.number, _react2.PropTypes.object, _react2.PropTypes.array]),
  textStyle: _react2.PropTypes.oneOfType([_react2.PropTypes.number, _react2.PropTypes.object, _react2.PropTypes.array]),
  dropdownStyle: _react2.PropTypes.oneOfType([_react2.PropTypes.number, _react2.PropTypes.object, _react2.PropTypes.array]),

  adjustFrame: _react2.PropTypes.func,
  renderRow: _react2.PropTypes.func,
  renderSeparator: _react2.PropTypes.func,

  onDropdownWillShow: _react2.PropTypes.func,
  onDropdownWillHide: _react2.PropTypes.func,
  onSelect: _react2.PropTypes.func
}, _class.defaultProps = {
  disabled: false,
  defaultIndex: -1,
  defaultValue: 'Please select...',
  options: null,
  animated: true,
  showsVerticalScrollIndicator: true
}, _temp));

exports.default = ModalDropdown;


var styles = _reactNative.StyleSheet.create({
  button: {
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 12
  },
  modal: {
    flexGrow: 1
  },
  dropdown: {
    position: 'absolute',
    height: (33 + _reactNative.StyleSheet.hairlineWidth) * 5,
    borderWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    borderRadius: 2,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  loading: {
    alignSelf: 'center'
  },
  list: {},
  rowText: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    fontSize: 11,
    color: 'gray',
    backgroundColor: 'white',
    textAlignVertical: 'center'
  },
  highlightedRowText: {
    color: 'black'
  },
  separator: {
    height: _reactNative.StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray'
  }
});