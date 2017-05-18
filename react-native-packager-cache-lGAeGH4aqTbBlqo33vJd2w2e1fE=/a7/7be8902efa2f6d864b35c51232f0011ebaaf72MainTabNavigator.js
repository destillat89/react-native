Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainTabNavigator = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNavigation = require('react-navigation');

var _MainScreen = require('./MainScreen');

var _MainScreen2 = _interopRequireDefault(_MainScreen);

var _DetailsTab = require('./DetailsTab');

var _DetailsTab2 = _interopRequireDefault(_DetailsTab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainTabNavigator = exports.MainTabNavigator = (0, _reactNavigation.TabNavigator)({
  MainTab: { screen: _MainScreen2.default },
  DetailsTab: { screen: _DetailsTab2.default }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      padding: 0,
      margin: 0
    },
    style: {
      backgroundColor: '#AAAAEE'
    },
    activeTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'orange'
    }
  }
});
MainTabNavigator.navigationOptions = {
  title: 'Animation'
};