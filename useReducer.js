// What is useReduce in React? 

// It is a hook, alternative to useState

//It is preferable to useState when you have more complex state logic involving several realted values or when the next state depends on the prev state

// What is a reducer?

// Reducer is a function that takees multiple things and returns one thing 

// for instance, array.reduce in JS takes a collection of elements and returns one value

// As similar, the useReducer will accept some data and state, and will reduce that state into one final state based on the data that is passed in 

// How does it work?

// useReducer takes 2 arguments. The first one is reducer function and the second is the initial state

// useReducer returns an array of 2 elemets. The first element is the state and the second element is a function to update the state (dispatch function)

//The dispatch function will not change over rerenders

// Reducer function will take two arguments. The first one is the previous state, and the second is an object(an action) to determine what to reduce the new state into

//React automatically passes the previous state to your reducer function


