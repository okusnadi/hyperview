Object.defineProperty(exports, '__esModule', { value: true });
exports.getRegistry = undefined;
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
var _hvList = require('../../components/hv-list');
var _hvList2 = _interopRequireDefault(_hvList);
var _hvOption = require('../../components/hv-option');
var _hvOption2 = _interopRequireDefault(_hvOption);
var _hvSectionList = require('../../components/hv-section-list');
var _hvSectionList2 = _interopRequireDefault(_hvSectionList);
var _hvSelectMultiple = require('../../components/hv-select-multiple');
var _hvSelectMultiple2 = _interopRequireDefault(_hvSelectMultiple);
var _hvSelectSingle = require('../../components/hv-select-single');
var _hvSelectSingle2 = _interopRequireDefault(_hvSelectSingle);
var _hvSpinner = require('../../components/hv-spinner');
var _hvSpinner2 = _interopRequireDefault(_hvSpinner);
var _hvTextArea = require('../../components/hv-text-area');
var _hvTextArea2 = _interopRequireDefault(_hvTextArea);
var _hvTextField = require('../../components/hv-text-field');
var _hvTextField2 = _interopRequireDefault(_hvTextField);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
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
var HYPERVIEW_COMPONENTS = [
  _hvList2.default,
  _hvOption2.default,
  _hvSectionList2.default,
  _hvSelectMultiple2.default,
  _hvSelectSingle2.default,
  _hvSpinner2.default,
  _hvTextArea2.default,
  _hvTextField2.default,
];
var getRegistry = (exports.getRegistry = function getRegistry() {
  var components =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return []
    .concat(HYPERVIEW_COMPONENTS, _toConsumableArray(components))
    .reduce(function(registry, component) {
      return _extends(
        {},
        registry,
        _defineProperty(
          {},
          component.namespaceURI,
          _extends(
            {},
            registry[component.namespaceURI],
            _defineProperty({}, component.localName, component),
          ),
        ),
      );
    }, {});
});
