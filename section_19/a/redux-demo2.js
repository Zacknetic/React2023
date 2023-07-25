
const demo = require('./redux-demo.js');

const store = demo.default;
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });



