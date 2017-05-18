
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SwipeableListView: {
    displayName: 'SwipeableListView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/var/www/react-native/test/node_modules/react-native/Libraries/Experimental/SwipeableRow/SwipeableListView.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ListView = require('ListView');
var React = require('React');
var SwipeableListViewDataSource = require('SwipeableListViewDataSource');
var SwipeableRow = require('SwipeableRow');

var PropTypes = React.PropTypes;

var SwipeableListView = _wrapComponent('SwipeableListView')((_temp = _class = function (_React$Component) {
  _inherits(SwipeableListView, _React$Component);

  _createClass(SwipeableListView, null, [{
    key: 'getNewDataSource',
    value: function getNewDataSource() {
      return new SwipeableListViewDataSource({
        getRowData: function getRowData(data, sectionID, rowID) {
          return data[sectionID][rowID];
        },
        getSectionHeaderData: function getSectionHeaderData(data, sectionID) {
          return data[sectionID];
        },
        rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        },
        sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
          return s1 !== s2;
        }
      });
    }
  }]);

  function SwipeableListView(props, context) {
    _classCallCheck(this, SwipeableListView);

    var _this = _possibleConstructorReturn(this, (SwipeableListView.__proto__ || Object.getPrototypeOf(SwipeableListView)).call(this, props, context));

    _this._listViewRef = null;
    _this._shouldBounceFirstRowOnMount = false;

    _this._onScroll = function (e) {
      if (_this.props.dataSource.getOpenRowID()) {
        _this.setState({
          dataSource: _this.state.dataSource.setOpenRowID(null)
        });
      }
      _this.props.onScroll && _this.props.onScroll(e);
    };

    _this._renderRow = function (rowData, sectionID, rowID) {
      var slideoutView = _this.props.renderQuickActions(rowData, sectionID, rowID);

      if (!slideoutView) {
        return _this.props.renderRow(rowData, sectionID, rowID);
      }

      var shouldBounceOnMount = false;
      if (_this._shouldBounceFirstRowOnMount) {
        _this._shouldBounceFirstRowOnMount = false;
        shouldBounceOnMount = rowID === _this.props.dataSource.getFirstRowID();
      }

      return React.createElement(
        SwipeableRow,
        {
          slideoutView: slideoutView,
          isOpen: rowData.id === _this.props.dataSource.getOpenRowID(),
          maxSwipeDistance: _this._getMaxSwipeDistance(rowData, sectionID, rowID),
          key: rowID,
          onOpen: function onOpen() {
            return _this._onOpen(rowData.id);
          },
          onClose: function onClose() {
            return _this._onClose(rowData.id);
          },
          onSwipeEnd: function onSwipeEnd() {
            return _this._setListViewScrollable(true);
          },
          onSwipeStart: function onSwipeStart() {
            return _this._setListViewScrollable(false);
          },
          shouldBounceOnMount: shouldBounceOnMount },
        _this.props.renderRow(rowData, sectionID, rowID)
      );
    };

    _this._shouldBounceFirstRowOnMount = _this.props.bounceFirstRowOnMount;
    _this.state = {
      dataSource: _this.props.dataSource
    };
    return _this;
  }

  _createClass(SwipeableListView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.dataSource.getDataSource() !== nextProps.dataSource.getDataSource()) {
        this.setState({
          dataSource: nextProps.dataSource
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(ListView, _extends({}, this.props, {
        ref: function ref(_ref) {
          _this2._listViewRef = _ref;
        },
        dataSource: this.state.dataSource.getDataSource(),
        onScroll: this._onScroll,
        renderRow: this._renderRow
      }));
    }
  }, {
    key: '_setListViewScrollable',
    value: function _setListViewScrollable(value) {
      if (this._listViewRef && typeof this._listViewRef.setNativeProps === 'function') {
        this._listViewRef.setNativeProps({
          scrollEnabled: value
        });
      }
    }
  }, {
    key: 'getScrollResponder',
    value: function getScrollResponder() {
      if (this._listViewRef && typeof this._listViewRef.getScrollResponder === 'function') {
        return this._listViewRef.getScrollResponder();
      }
    }
  }, {
    key: '_getMaxSwipeDistance',
    value: function _getMaxSwipeDistance(rowData, sectionID, rowID) {
      if (typeof this.props.maxSwipeDistance === 'function') {
        return this.props.maxSwipeDistance(rowData, sectionID, rowID);
      }

      return this.props.maxSwipeDistance;
    }
  }, {
    key: '_onOpen',
    value: function _onOpen(rowID) {
      this.setState({
        dataSource: this.state.dataSource.setOpenRowID(rowID)
      });
    }
  }, {
    key: '_onClose',
    value: function _onClose(rowID) {
      this.setState({
        dataSource: this.state.dataSource.setOpenRowID(null)
      });
    }
  }]);

  return SwipeableListView;
}(React.Component), _class.propTypes = {
  bounceFirstRowOnMount: PropTypes.bool.isRequired,

  dataSource: PropTypes.instanceOf(SwipeableListViewDataSource).isRequired,

  maxSwipeDistance: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  renderRow: PropTypes.func.isRequired,

  renderQuickActions: PropTypes.func.isRequired
}, _class.defaultProps = {
  bounceFirstRowOnMount: false,
  renderQuickActions: function renderQuickActions() {
    return null;
  }
}, _temp));

module.exports = SwipeableListView;