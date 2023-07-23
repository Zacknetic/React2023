import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  switch(action.type) {
    case 'INPUT':
      return { ...state, [action.fieldName]: { value: action.value, isTouched: state[action.fieldName].isTouched } };
    case 'BLUR':
      return { ...state, [action.fieldName]: { isTouched: true, value: state[action.fieldName].value } };
    case 'RESET':
      return { ...state, [action.fieldName]: { isTouched: false, value: '' } };
    default:
      return state;
  }
};

const useInputs = (inputFields) => {
  const initialState = inputFields.reduce((state, field) => {
    return {...state, [field.fieldName]: initialInputState}
  }, {});
  
  const [inputStates, dispatch] = useReducer(
    inputStateReducer,
    initialState
  );

  const valueChangeHandler = (fieldName) => (event) => {
    dispatch({ type: 'INPUT', fieldName, value: event.target.value });
  };

  const inputBlurHandler = (fieldName) => (event) => {
    dispatch({ type: 'BLUR', fieldName });
  };

  const reset = (fieldName) => () => {
    dispatch({ type: 'RESET', fieldName });
  };

  const fields = inputFields.map(({fieldName, validateValue}) => {
    const state = inputStates[fieldName];
    const isValid = validateValue(state.value);
    const hasError = !isValid && state.isTouched;

    return {
      fieldName,
      value: state.value,
      isValid,
      hasError,
      valueChangeHandler: valueChangeHandler(fieldName),
      inputBlurHandler: inputBlurHandler(fieldName),
      reset: reset(fieldName),
    };
  });

  const allValid = fields.every(field => field.isValid);

  return { fields, allValid };
};

export default useInputs;
