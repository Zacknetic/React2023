import React from "react";
import classes from "./Checkout.module.css";

import useInputs from "../../hooks/use-input";

const inputIsNotEmpty = (value) => value.trim() !== "";
// const inputIsValidEmail = (value) =>  value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
// const inputIsValidDollarAmount = (value) => value.match(/^\d+(\.\d{2})?$/);
// const inputIsValidNumber = (value) => value.match(/^\d+$/);
// const inputIsValidPhone = (value) => value.match(/^\d{3}-\d{3}-\d{4}$/);
const inputIsValidUSPostalCode = (value) => value.match(/^\d{5}(-\d{4})?$/);
// const inputIsValidURL = (value) => value.match(/^(ftp|http|https):\/\/[^ "]+$/);
// const inputIsValidInteger = (value) => value.match(/^\d+$/);

const formFields = [
  {
    fieldName: "name",
    validateValue: inputIsNotEmpty,
    label: "Your Name",
    errorMessage: "Please enter a name.",
  },
  {
    fieldName: "street",
    validateValue: inputIsNotEmpty,
    label: "Street",
    errorMessage: "Please enter a street.",
  },
  {
    fieldName: "postalCode",
    validateValue: inputIsValidUSPostalCode,
    label: "Postal Code",
    errorMessage: "Please enter a postal code.",
  },
  {
    fieldName: "city",
    validateValue: inputIsNotEmpty,
    label: "City",
    errorMessage: "Please enter a city.",
  },
];

const Checkout = ({ onSubmit, onCancel }) => {
  const { fields, allValid } = useInputs(formFields);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!allValid) {
      return;
    }

    const userData = fields.reduce((data, field) => {
      data[field.fieldName] = field.value;
      return data;
    }, {});

    onSubmit(userData);

    fields.forEach((field) => {
      field.reset();
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        {fields.map(
          (
            {
              fieldName,
              value,
              hasError,
              valueChangeHandler,
              inputBlurHandler,
            },
            index
          ) => {
            const classes = hasError ? "form-control invalid" : "form-control";
            const fieldProps = formFields.find(
              (field) => field.fieldName === fieldName
            );
            return (
              <div className={classes} key={index}>
                <label htmlFor={fieldName}>{fieldProps.label}</label>
                <input
                  type="text"
                  id={fieldName}
                  value={value}
                  onChange={valueChangeHandler}
                  onBlur={inputBlurHandler}
                />
                {hasError && (
                  <p className="error-text">{fieldProps.errorMessage}</p>
                )}
              </div>
            );
          }
        )}
      </div>
      <div className="form-actions">
        <button onClick={onCancel}>Cancel</button>
        <button disabled={!allValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
