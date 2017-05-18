
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('React');
var View = require('View');
var VirtualizedList = require('VirtualizedList');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var VirtualizedSectionList = function (_React$PureComponent) {
  _inherits(VirtualizedSectionList, _React$PureComponent);

  _createClass(VirtualizedSectionList, [{
    key: '_subExtractor',
    value: function _subExtractor(index) {
      var itemIndex = index;
      var defaultKeyExtractor = this.props.keyExtractor;
      for (var ii = 0; ii < this.props.sections.length; ii++) {
        var _section = this.props.sections[ii];
        var _key = _section.key;
        warning(_key != null, 'VirtualizedSectionList: A `section` you supplied is missing the `key` property.');
        itemIndex -= 1;
        if (itemIndex >= _section.data.length) {
          itemIndex -= _section.data.length;
        } else if (itemIndex === -1) {
          return { section: _section, key: _key, index: null };
        } else {
          var _keyExtractor = _section.keyExtractor || defaultKeyExtractor;
          return {
            section: _section,
            key: _key + ':' + _keyExtractor(_section.data[itemIndex], itemIndex),
            index: itemIndex
          };
        }
      }
    }
  }, {
    key: '_getSeparatorComponent',
    value: function _getSeparatorComponent(index, info) {
      info = info || this._subExtractor(index);
      if (!info) {
        return null;
      }
      var ItemSeparatorComponent = info.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent;
      var SectionSeparatorComponent = this.props.SectionSeparatorComponent;

      var isLastItemInList = index === this.state.childProps.getItemCount() - 1;
      var isLastItemInSection = info.index === info.section.data.length - 1;
      if (SectionSeparatorComponent && isLastItemInSection && !isLastItemInList) {
        return SectionSeparatorComponent;
      }
      if (ItemSeparatorComponent && !isLastItemInSection && !isLastItemInList) {
        return ItemSeparatorComponent;
      }
      return null;
    }
  }, {
    key: '_computeState',
    value: function _computeState(props) {
      var offset = props.ListHeaderComponent ? 1 : 0;
      var stickyHeaderIndices = [];
      var itemCount = props.sections.reduce(function (v, section) {
        stickyHeaderIndices.push(v + offset);
        return v + section.data.length + 1;
      }, 0);
      return {
        childProps: _extends({}, props, {
          renderItem: this._renderItem,
          ItemSeparatorComponent: undefined,
          data: props.sections,
          getItemCount: function getItemCount() {
            return itemCount;
          },
          getItem: getItem,
          keyExtractor: this._keyExtractor,
          onViewableItemsChanged: props.onViewableItemsChanged ? this._onViewableItemsChanged : undefined,
          stickyHeaderIndices: props.stickySectionHeadersEnabled ? stickyHeaderIndices : undefined
        })
      };
    }
  }]);

  function VirtualizedSectionList(props, context) {
    _classCallCheck(this, VirtualizedSectionList);

    var _this = _possibleConstructorReturn(this, (VirtualizedSectionList.__proto__ || Object.getPrototypeOf(VirtualizedSectionList)).call(this, props, context));

    _this._keyExtractor = function (item, index) {
      var info = _this._subExtractor(index);
      return info && info.key || String(index);
    };

    _this._convertViewable = function (viewable) {
      invariant(viewable.index != null, 'Received a broken ViewToken');
      var info = _this._subExtractor(viewable.index);
      if (!info) {
        return null;
      }
      var keyExtractor = info.section.keyExtractor || _this.props.keyExtractor;
      return _extends({}, viewable, {
        index: info.index,
        key: keyExtractor(viewable.item, info.index),
        section: info.section
      });
    };

    _this._onViewableItemsChanged = function (_ref) {
      var viewableItems = _ref.viewableItems,
          changed = _ref.changed;

      if (_this.props.onViewableItemsChanged) {
        _this.props.onViewableItemsChanged({
          viewableItems: viewableItems.map(_this._convertViewable, _this).filter(Boolean),
          changed: changed.map(_this._convertViewable, _this).filter(Boolean)
        });
      }
    };

    _this._renderItem = function (_ref2) {
      var item = _ref2.item,
          index = _ref2.index;

      var info = _this._subExtractor(index);
      if (!info) {
        return null;
      } else if (info.index == null) {
        var _renderSectionHeader = _this.props.renderSectionHeader;

        return _renderSectionHeader ? _renderSectionHeader({ section: info.section }) : null;
      } else {
        var _renderItem = info.section.renderItem || _this.props.renderItem;
        var SeparatorComponent = _this._getSeparatorComponent(index, info);
        invariant(_renderItem, 'no renderItem!');
        return React.createElement(
          View,
          null,
          _renderItem({ item: item, index: info.index || 0 }),
          SeparatorComponent && React.createElement(SeparatorComponent, null)
        );
      }
    };

    _this.state = _this._computeState(props);
    return _this;
  }

  _createClass(VirtualizedSectionList, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this._computeState(nextProps));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(VirtualizedList, this.state.childProps);
    }
  }]);

  return VirtualizedSectionList;
}(React.PureComponent);

VirtualizedSectionList.defaultProps = _extends({}, VirtualizedList.defaultProps, {
  data: []
});


function getItem(sections, index) {
  if (!sections) {
    return null;
  }
  var itemIdx = index - 1;
  for (var ii = 0; ii < sections.length; ii++) {
    if (itemIdx === -1) {
      return sections[ii];
    } else if (itemIdx < sections[ii].data.length) {
      return sections[ii].data[itemIdx];
    } else {
      itemIdx -= sections[ii].data.length + 1;
    }
  }
  return null;
}

module.exports = VirtualizedSectionList;