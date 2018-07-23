const redux = require('redux');

// this is a function that execute not yet
const createStore = redux.createStore;

const initialState = {
    counter: 0
};
// Reducer
const rootReducer = (state = initialState, action) => {
    return state;
};
// Store

const store = createStore(rootReducer);

console.log(store.getState());



// Dispatching Action 

// Subscription