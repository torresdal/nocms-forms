import React, { PropTypes } from 'react';

const Select = (props) => {
  const {
    controlGroupClass,
    successWrapperClass,
    errorText,
    errorTextClass,
    errorWrapperClass,
    labelClass,
    label,
    name,
    options,
    required,
    requiredClass,
    requiredMark,
    emptyLabel,
  } = props;

  let containerClasses = controlGroupClass;
  if (props.isValid && props.isValidated) {
    containerClasses += ` ${successWrapperClass}`;
  }
  if (!props.isValid) {
    containerClasses += ` ${errorWrapperClass}`;
  }

  const emptyOption = emptyLabel ? [<option key="empty" value="">{emptyLabel}</option>] : [];
  const optionsList = emptyOption.concat(options.map((o, index) => {
    let option = o;
    if (typeof option === 'string') {
      option = { label: option, value: option };
    }
    return <option key={index} value={option.value}>{option.label}</option>;
  }));

  return (
    <div className={containerClasses}>
      <label>
        <span className={labelClass}>
          {label}
          {required ? <span className={requiredClass}>{requiredMark}</span> : null}
        </span>
        <select
          name={name}
          value={props.value}
          aria-invalid={!props.isValid}
          aria-required={required}
          onChange={props.handleChange}
          onKeyDown={props.handleKeyDown}
          onBlur={props.handleChange}
        >
          {optionsList}
        </select>
        {errorText && !props.isValid ?
          <div className={errorTextClass}>{errorText}</div>
        : null}
      </label>
    </div>
  );
};

Select.propTypes = {
  isValid: PropTypes.bool,
  isValidated: PropTypes.bool,
  requiredMark: PropTypes.string,
  value: PropTypes.string,
  errorTextClass: PropTypes.string,
  errorWrapperClass: PropTypes.string,
  successWrapperClass: PropTypes.string,
  labelClass: PropTypes.string,
  controlGroupClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  emptyLabel: PropTypes.string,
  options: PropTypes.array,
  errorText: PropTypes.string,
  handleChange: PropTypes.func,
  required: PropTypes.bool,
  requiredClass: PropTypes.string,
  handleKeyDown: PropTypes.func,
  label: PropTypes.string,
};

Select.defaultProps = {
  requiredMark: '*',
  value: '',
  errorWrapperClass: 'form__control-group--error',
  successWrapperClass: 'form__control-group--success',
  errorTextClass: 'form__error-text',
  labelClass: 'form__label',
  controlGroupClass: 'form__control-group',
};

export default Select;
