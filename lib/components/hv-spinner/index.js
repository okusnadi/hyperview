Object.defineProperty(exports, '__esModule', { value: true });
var _jsxFileName = 'src/components/hv-spinner/index.js';
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _namespaces = require('../../services/namespaces');
var Namespaces = _interopRequireWildcard(_namespaces);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');
var _types = require('../../types');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var HvSpinner = (function(_PureComponent) {
  _inherits(HvSpinner, _PureComponent);
  function HvSpinner() {
    _classCallCheck(this, HvSpinner);
    return _possibleConstructorReturn(
      this,
      (HvSpinner.__proto__ || Object.getPrototypeOf(HvSpinner)).apply(
        this,
        arguments,
      ),
    );
  }
  _createClass(HvSpinner, [
    {
      key: 'render',
      value: function render() {
        var element = this.props.element;
        var color = element.getAttribute('color') || undefined;
        return _react2.default.createElement(_reactNative.ActivityIndicator, {
          color: color,
          __source: { fileName: _jsxFileName, lineNumber: 25 },
        });
      },
    },
  ]);
  return HvSpinner;
})(_react.PureComponent);
HvSpinner.namespaceURI = Namespaces.HYPERVIEW;
HvSpinner.localName = _types.LOCAL_NAME.SPINNER;
exports.default = HvSpinner;
