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
var _render = require('../../services/render');
var Render = _interopRequireWildcard(_render);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');
var _services = require('../../services');
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
function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
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
var HvOption = (function(_PureComponent) {
  _inherits(HvOption, _PureComponent);
  function HvOption() {
    var _ref;
    var _temp, _this, _ret;
    _classCallCheck(this, HvOption);
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref =
          HvOption.__proto__ || Object.getPrototypeOf(HvOption)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.state = { pressed: false }),
      (_this.triggerSelectBehaviors = function() {
        var _this$props = _this.props,
          element = _this$props.element,
          onUpdate = _this$props.onUpdate;
        var behaviorElements = (0, _services.getBehaviorElements)(element);
        var selectBehaviors = behaviorElements.filter(function(e) {
          return e.getAttribute('trigger') === 'select';
        });
        selectBehaviors.forEach(function(behaviorElement) {
          var href = behaviorElement.getAttribute('href');
          var action = behaviorElement.getAttribute('action');
          var verb = behaviorElement.getAttribute('verb');
          var targetId = behaviorElement.getAttribute('target');
          var showIndicatorIds = behaviorElement.getAttribute(
            'show-during-load',
          );
          var hideIndicatorIds = behaviorElement.getAttribute(
            'hide-during-load',
          );
          var delay = behaviorElement.getAttribute('delay');
          var once = behaviorElement.getAttribute('once');
          onUpdate(href, action, element, {
            verb: verb,
            targetId: targetId,
            showIndicatorIds: showIndicatorIds,
            hideIndicatorIds: hideIndicatorIds,
            delay: delay,
            once: once,
            behaviorElement: behaviorElement,
          });
        });
      }),
      (_this.triggerDeselectBehaviors = function() {
        var _this$props2 = _this.props,
          element = _this$props2.element,
          onUpdate = _this$props2.onUpdate;
        var behaviorElements = (0, _services.getBehaviorElements)(element);
        var deselectBehaviors = behaviorElements.filter(function(e) {
          return e.getAttribute('trigger') === 'deselect';
        });
        deselectBehaviors.forEach(function(behaviorElement) {
          var href = behaviorElement.getAttribute('href');
          var action = behaviorElement.getAttribute('action');
          var verb = behaviorElement.getAttribute('verb');
          var targetId = behaviorElement.getAttribute('target');
          var showIndicatorIds = behaviorElement.getAttribute(
            'show-during-load',
          );
          var hideIndicatorIds = behaviorElement.getAttribute(
            'hide-during-load',
          );
          var delay = behaviorElement.getAttribute('delay');
          var once = behaviorElement.getAttribute('once');
          onUpdate(href, action, element, {
            verb: verb,
            targetId: targetId,
            showIndicatorIds: showIndicatorIds,
            hideIndicatorIds: hideIndicatorIds,
            delay: delay,
            once: once,
            behaviorElement: behaviorElement,
          });
        });
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  _createClass(HvOption, [
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var element = this.props.element;
        var prevElement = prevProps.element;
        var selected = element.getAttribute('selected') === 'true';
        var prevSelected = prevElement.getAttribute('selected') === 'true';
        if (selected && !prevSelected) {
          this.triggerSelectBehaviors();
        }
        if (!selected && prevSelected) {
          this.triggerDeselectBehaviors();
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _props = this.props,
          element = _props.element,
          stylesheets = _props.stylesheets,
          animations = _props.animations,
          onUpdate = _props.onUpdate,
          options = _props.options;
        var pressed = this.state.pressed;
        var onSelect = options.onSelect,
          onToggle = options.onToggle;
        var value = element.getAttribute('value');
        var selected = element.getAttribute('selected') === 'true';
        var newOptions = _extends({}, options, {
          selected: selected,
          pressed: pressed,
          pressedSelected: pressed && selected,
        });
        var props = (0, _services.createProps)(
          element,
          stylesheets,
          animations,
          newOptions,
        );
        var outerProps = {
          onPressIn: function onPressIn() {
            return _this2.setState({ pressed: true });
          },
          onPressOut: function onPressOut() {
            return _this2.setState({ pressed: false });
          },
          onPress: function onPress() {
            if (!selected && onSelect) {
              onSelect(value);
            }
            if (onToggle) {
              onToggle(value);
            }
          },
          style: undefined,
        };
        if (props.style && props.style.flex) {
          outerProps.style = { flex: props.style.flex };
        }
        return _react2.default.createElement(
          _reactNative.TouchableWithoutFeedback,
          outerProps,
          _react2.default.createElement.apply(
            _react2.default,
            [_reactNative.View, props].concat(
              _toConsumableArray(
                Render.renderChildren(
                  element,
                  stylesheets,
                  animations,
                  onUpdate,
                  newOptions,
                ),
              ),
            ),
          ),
        );
      },
    },
  ]);
  return HvOption;
})(_react.PureComponent);
HvOption.namespaceURI = Namespaces.HYPERVIEW;
HvOption.localName = _types.LOCAL_NAME.OPTION;
exports.default = HvOption;
