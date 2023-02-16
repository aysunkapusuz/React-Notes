// What is useEffect?

// It is a hook that is used when you need to do a task that has side effect

// A side effect is whne you code influences something outside of the function in which that code is written 

// Example of side effects include API requests, setting up a sub, manually manipulating the DOM,

// Effects can be categorized into ones that require cleanup, and ones that don't

// For instance, if you set an interval, you probably wnat to clean up
// but if you just make an API request, there may not be anything to cleanup.

// The useEffect hook will allow you to cleanup when the component unmounts. 

//
// The useEffect hook takes a function as its first argument by default, it runs the the passed in function after each render

// This can be problematic if you update state within useEffect, triggering re-renders

// You can pass a second argument to useEffect, an array of deps when one of the deps change, 
// React will run the function you passed as the first arument again.

//Return a function from passed in function to cleanupon unmount or to cleanup before the useEffect gets called again.

// 

// Try to just do one task within each useEffect

//Pay extra attention when you have a value passed by reference in your dep [] 
// And when possible, keep it primitive val


// Avoid useEffect if you can
//For instance, if you can just update state right away when a user clicks on a button then do that, and do not write a useEffect hook that runs everytime the button isClicked
