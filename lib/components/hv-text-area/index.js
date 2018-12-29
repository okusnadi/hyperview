Object.defineProperty(exports, '__esModule', { value: true });
var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
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
var _types = require('../../types');
var _reactNative = require('react-native');
var _services = require('../../services');
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
var HvTextArea = (function(_PureComponent) {
  _inherits(HvTextArea, _PureComponent);
  function HvTextArea(props) {
    _classCallCheck(this, HvTextArea);
    var element = props.element;
    var _this = _possibleConstructorReturn(
      this,
      (HvTextArea.__proto__ || Object.getPrototypeOf(HvTextArea)).call(
        this,
        props,
      ),
    );
    _this.state = {
      focused: false,
      value: element.getAttribute('value') || '',
    };
    return _this;
  }
  _createClass(HvTextArea, [
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _props = this.props,
          element = _props.element,
          stylesheets = _props.stylesheets,
          animations = _props.animations,
          options = _props.options;
        if (element.getAttribute('hide') === 'true') {
          return null;
        }
        var focused = this.state.focused;
        var keyboardType = element.getAttribute('keyboard-type') || undefined;
        var props = _extends(
          {},
          (0, _services.createProps)(
            element,
            stylesheets,
            animations,
            _extends({}, options, { focused: focused }),
          ),
          {
            ref: options.registerInputHandler,
            multiline: true,
            value: this.state.value,
            keyboardType: keyboardType,
            onFocus: function onFocus() {
              return _this2.setState({ focused: true });
            },
            onBlur: function onBlur() {
              return _this2.setState({ focused: false });
            },
            onChangeText: function onChangeText(value) {
              _this2.setState({ value: value });
              element.setAttribute('value', value);
            },
          },
        );
        return _react2.default.createElement(_reactNative.TextInput, props);
      },
    },
  ]);
  return HvTextArea;
})(_react.PureComponent);
HvTextArea.namespaceURI = Namespaces.HYPERVIEW;
HvTextArea.localName = _types.LOCAL_NAME.TEXT_AREA;
exports.default = HvTextArea;
