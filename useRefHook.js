// 1) What is useRef in React?

// useRef is a hook in React, allows you to crate an object that will persisted across the lifetime of a component

// The persisted value will be held on the current property of the returned object from useRef

// The ref object will not be re-initialized on every re-render. So you will have the same ref object on each render.

// Because of that, you mutate the current property in useRef, it will not trigger a re-render of the component it's within

// useRef is commonly used to access an element on the DOM, or to gain a "reference" to a DOM element

// However, you can use the useRef anytime you want to persist some value across renders, but you do not need react to re-render if that value changes

