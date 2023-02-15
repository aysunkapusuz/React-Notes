// What is the Virtual DOM in React?

// The DOM stands for Document Object Model 
// It represents your web page

// The virtual DOM (VDOM) is a representation of the actual DOM

//It is stored in memory and synced with the actual DOM by ReactDOM. This is called "Reconciliation" (important)

// Why?

// Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen

// Each time there is a change in the state of our app, the virtual DOM gets updated first instead of the real DOM

// Whenever there is a change in state a new Virtual DOM tree is created

// This new VDOM will get compared to the old VDOM (diffing) and React will find only the elements that need to be updated, and update those

// Reaxt can also make these updates in "batches" instead of updating everthing individually and needing the repaint the entire page each time

