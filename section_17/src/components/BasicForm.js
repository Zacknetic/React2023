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
  { fieldName: "email", validateValue: inputIsValidEmail, label: 'E-Mail Address', errorMessage: 'Please enter a valid email address.' },
  { fieldName: "streetAddress", validateValue: inputIsNotEmpty, label: 'Street Address', errorMessage: 'Please enter a street address.' },
  { fieldName: "city", validateValue: inputIsNotEmpty, label: 'City', errorMessage: 'Please enter a city.' },
  { fieldName: "state", validateValue: inputIsNotEmpty, label: 'State', errorMessage: 'Please enter a state.' },
  { fieldName: "zipCode", validateValue: inputIsValidUSPostalCode, label: 'Zip Code', errorMessage: 'Please enter a valid zip code.' },
  { fieldName: "phoneNumber", validateValue: inputIsValidPhone, label: 'Phone Number', errorMessage: 'Please enter a valid phone number.' },
  { fieldName: "website", validateValue: inputIsValidURL, label: 'Website', errorMessage: 'Please enter a valid website.' },
  { fieldName: "age", validateValue: inputIsValidNumber, label: 'Age', errorMessage: 'Please enter a valid age.' },
  { fieldName: "salary", validateValue: inputIsValidDollarAmount, label: 'Salary', errorMessage: 'Please enter a valid salary.' },
  { fieldName: "yearsOfService", validateValue: inputIsValidInteger, label: 'Years of Service', errorMessage: 'Please enter a valid number of years of service.' },
  

];

const BasicForm = ({ onSubmit }) => {
  const {fields, allValid} = useInputs(formFields);

  const submitHandler = event => {
    event.preventDefault();

    if (!allValid) {
      return;
    }

    const userData = fields.reduce((data, field) => {
      data[field.fieldName] = field.value;
      return data;
    }, {});

    onSubmit(userData);

    fields.forEach(field => {
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
