// What is context?

// Context allows us to pass data through the component without needed to pass a prop from parent to child at every level

// It makes it usefull for passing data ascross siblings

// 2) When to use context?

// Contetxt is designed to share data that can be considered "global" throughout your component tree.
// exapmle: theme, preferred language

//Before using context, make sure you have many components that need to actually use the data within context

// Because using data from context can make components less reusable

// But when it comes to sharing data that changes pretty frequently across your app, look toward a state management library like recoil or redux

// How it works?

// 1) Create a context object

// 2) Wrap the component you want to consume with the created context Provider
//    The context Provider accepts a value prop, which is the value that will be shared within that context

// 3) Within a component that is wrapped in the context Provider the useContext hook can be used to access the value of the context

