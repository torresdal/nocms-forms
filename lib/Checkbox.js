'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function Checkbox(props) {
  var controlGroupClass = props.controlGroupClass,
      successWrapperClass = props.successWrapperClass,
      inlineLabel = props.inlineLabel,
      type = props.type,
      errorText = props.errorText,
      errorTextClass = props.errorTextClass,
      errorWrapperClass = props.errorWrapperClass,
      inlineLabelClass = props.inlineLabelClass,
      checkboxClass = props.checkboxClass,
      labelId = props.labelId,
      labelClass = props.labelClass,
      label = props.label,
      required = props.required,
      requiredClass = props.requiredClass,
      requiredMark = props.requiredMark,
      notRequiredClass = props.notRequiredClass,
      notRequiredMark = props.notRequiredMark,
      name = props.name,
      disabled = props.disabled,
      value = props.value;


  var containerClasses = controlGroupClass + ' ' + checkboxClass;
  if (props.isValid && props.isValidated) {
    containerClasses += ' ' + successWrapperClass;
  }
  if (!props.isValid) {
    containerClasses += ' error-node ' + errorWrapperClass;
  }
  if (inlineLabel) {
    containerClasses += ' ' + inlineLabelClass;
  }
  return _react2.default.createElement(
    'div',
    { className: containerClasses },
    inlineLabel && errorText && !props.isValid ? _react2.default.createElement(
      'div',
      { className: errorTextClass },
      errorText
    ) : null,
    _react2.default.createElement(
      'label',
      { id: labelId },
      _react2.default.createElement('input', {
        type: type,
        autoComplete: 'off',
        name: name,
        checked: value,
        value: props.value ? 'true' : '',
        disabled: disabled ? true : null,
        'aria-invalid': !props.isValid,
        'aria-required': required,
        onChange: props.handleChange,
        onKeyDown: props.handleKeyDown,
        onBlur: props.validate
      }),
      _react2.default.createElement(
        'span',
        { className: labelClass },
        label,
        required && requiredMark ? _react2.default.createElement(
          'span',
          { className: requiredClass },
          requiredMark
        ) : null,
        !required && notRequiredMark ? _react2.default.createElement(
          'span',
          { className: notRequiredClass },
          notRequiredMark
        ) : null
      ),
      !inlineLabel && errorText && !props.isValid ? _react2.default.createElement(
        'div',
        { className: errorTextClass },
        errorText
      ) : null
    )
  );
};

Checkbox.propTypes = {
  handleChange: _propTypes2.default.func,
  isValid: _propTypes2.default.bool,
  isValidated: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string,
  value: _propTypes2.default.bool,
  successWrapperClass: _propTypes2.default.string,
  errorTextClass: _propTypes2.default.string,
  errorWrapperClass: _propTypes2.default.string,
  labelClass: _propTypes2.default.string,
  controlGroupClass: _propTypes2.default.string,
  required: _propTypes2.default.bool,
  requiredClass: _propTypes2.default.string,
  notRequiredClass: _propTypes2.default.string,
  notRequiredMark: _propTypes2.default.string,
  validate: _propTypes2.default.func,
  handleKeyDown: _propTypes2.default.func,
  inlineLabel: _propTypes2.default.bool,
  inlineLabelClass: _propTypes2.default.string,
  checkboxClass: _propTypes2.default.string,
  errorText: _propTypes2.default.string,
  label: _propTypes2.default.string,
  requiredMark: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  labelId: _propTypes2.default.string
};

Checkbox.defaultProps = {
  successWrapperClass: 'form__control-group--success',
  errorWrapperClass: 'form__control-group--error',
  requiredMark: '*',
  notRequiredMark: null,
  type: 'text',
  errorTextClass: 'form__error-text',
  labelClass: 'form__label',
  controlGroupClass: 'form__control-group',
  inlineLabelClass: '',
  requiredClass: 'form__label--required',
  notRequiredClass: 'form__label--not-required',
  required: false,
  disabled: false,
  value: false
};

exports.default = Checkbox;
module.exports = exports['default'];
//# sourceMappingURL=Checkbox.js.map