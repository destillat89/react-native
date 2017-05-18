Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNavigation = require('react-navigation');

var _MainTabNavigator = require('./MainTabNavigator');

var _CalculatorScreen = require('../Calculator/CalculatorScreen');

var _CalculatorScreen2 = _interopRequireDefault(_CalculatorScreen);

var _NotepadScreen = require('../Notepad/NotepadScreen');

var _NotepadScreen2 = _interopRequireDefault(_NotepadScreen);

var _DetailsTab = require('./DetailsTab');

var _DetailsTab2 = _interopRequireDefault(_DetailsTab);

var _TranslatorScreen = require('../PizzaTranslator/TranslatorScreen');

var _TranslatorScreen2 = _interopRequireDefault(_TranslatorScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = exports.App = (0, _reactNavigation.DrawerNavigator)({
  Notepad: { screen: _NotepadScreen2.default },
  Calculator: { screen: _CalculatorScreen2.default },
  Animation: { screen: _MainTabNavigator.MainTabNavigator },
  PizzaTranslator: { screen: _TranslatorScreen2.default },
  Details: { screen: _DetailsTab2.default }
});