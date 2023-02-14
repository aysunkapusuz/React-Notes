// A hook in React that "memoizes" a (callback) function

// memozation is an optimization technique used to speed up programs by storing the result of expensive function calls and returning the cached result when the same inputs occur again

// This can be helpful for preventing React from re-initializing functions

// If a function is not re-initialized, then it maintains the same function reference across renders

// This ca be particularly useful if there is parts of your app that will re-render if a value changes 
// a function getting re-initialized 

// So, if the function is a dependency in useEffect or a prop being passes it will maintain the same reference across re-renders and won't trigger the useEffect to re-run or the child componnet to re-render

// 2) How's it work? 

let a = 10
let b = 20

const memoizedFunction = useCallback (
    () => {
        a + b;
    },
    [a,b],
);

// 3) When would you use this?

//Anytime you're worried about "referential equality" useEffect dependencies
