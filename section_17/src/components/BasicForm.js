import React from 'react';

import useInputs from '../hooks/use-input';

const inputIsNotEmpty = (value) => value.trim() !== '';
const inputIsValidEmail = (value) =>  value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
const inputIsValidDollarAmount = (value) => value.match(/^\d+(\.\d{2})?$/);
const inputIsValidNumber = (value) => value.match(/^\d+$/);
const inputIsValidPhone = (value) => value.match(/^\d{3}-\d{3}-\d{4}$/);
const inputIsValidUSPostalCode = (value) => value.match(/^\d{5}(-\d{4})?$/);
const inputIsValidURL = (value) => value.match(/^(ftp|http|https):\/\/[^ "]+$/);
const inputIsValidInteger = (value) => value.match(/^\d+$/);

const formFields = [
  { fieldName: "firstName", validateValue: inputIsNotEmpty, label: 'First Name', errorMessage: 'Please enter a first name.' },
  { fieldName: "lastName", validateValue: inputIsNotEmpty, label: 'Last Name', errorMessage: 'Please enter a last name.' },
  { fieldName: "email", validateValue: inputIsValidEmail, label: 'E-Mail Address', errorMessage: 'Please enter a valid email address.' }
];

const BasicForm = (props) => {
  const {fields, allValid} = useInputs(formFields);

  const submitHandler = event => {
    event.preventDefault();

    if (!allValid) {
      return;
    }

    console.log('Submitted!');
    fields.forEach(field => {
      console.log(`${field.fieldName}: ${field.value}`);
      field.reset();
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        {fields.map(({fieldName, value, hasError, valueChangeHandler, inputBlurHandler}, index) => {
          const classes = hasError ? 'form-control invalid' : 'form-control';
          const fieldProps = formFields.find(field => field.fieldName === fieldName);
          return (
            <div className={classes} key={index}>
              <label htmlFor={fieldName}>{fieldProps.label}</label>
              <input
                type='text'
                id={fieldName}
                value={value}
                onChange={valueChangeHandler}
                onBlur={inputBlurHandler}
              />
              {hasError && <p className="error-text">{fieldProps.errorMessage}</p>}
            </div>
          )
        })}
      </div>
      <div className='form-actions'>
        <button disabled={!allValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
