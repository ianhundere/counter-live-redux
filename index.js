const { createStore } = require('redux');

// #1 write out an example/default version of app state

const defaultState = {
    count: 0
};

// #2a describe the ways that state can change
// - count can go up by one
// - count can go down by one
// #2b - find single words or short phrsases for those changes
// - increment
// - decrement
// #2c - translate those into objects

const ACTION_INC = {
    type: 'INCREMENT' // common to all-caps type
};
const ACTION_DEC = {
    type: 'DECREMENT'
};

// #3 - write a pure function that accepts the current state and an action,
// then returns the new version state

const counterReducerFunc = (state = defaultState, action) => {
    // check the action.type (don't compare to string)
    switch (action.type) {
        // if (action.type === ACTION_INC.type) {}
        case ACTION_INC.type:
            // if it's 'INCREMENT', return a new state object with the count + 1
            return {
                count: state.count + 1
            };
        // break: no need to break, since we're returning
        // if you're not returning, use break to make sure other cases
        // aren't triggered
        case ACTION_DEC.type:
            // if it's 'DECREMENT', return a new state object with the count - 1
            return {
                count: state.count - 1
            };
        default:
            // else return the state as-is
            return state;
    }
};

// #4 - create your store that knows how to use your reducer function
const store = createStore(counterReducerFunc);

// You can subscribe to notifications of any changes to the state
store.subscribe(() => {
    const theState = store.getState();
    console.log(`The state is now: ${theState}`);
});

module.exports = {
    store,
    ACTION_INC,
    ACTION_DEC
};
