
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BatchedBridge = require('BatchedBridge');

var invariant = require('fbjs/lib/invariant');

var levelsMap = {
  log: 'log',
  info: 'info',
  warn: 'warn',
  error: 'error',
  fatal: 'error'
};

var RCTLog = function () {
  function RCTLog() {
    _classCallCheck(this, RCTLog);
  }

  _createClass(RCTLog, null, [{
    key: 'logIfNoNativeHook',
    value: function logIfNoNativeHook() {
      if (typeof global.nativeLoggingHook === 'undefined') {
        RCTLog.logToConsole.apply(RCTLog, arguments);
      }

      return true;
    }
  }, {
    key: 'logToConsole',
    value: function logToConsole(level) {
      var _console;

      var logFn = levelsMap[level];
      invariant(logFn, 'Level "' + level + '" not one of ' + Object.keys(levelsMap));

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_console = console)[logFn].apply(_console, args);

      return true;
    }
  }]);

  return RCTLog;
}();

BatchedBridge.registerCallableModule('RCTLog', RCTLog);

module.exports = RCTLog;