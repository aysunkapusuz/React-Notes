// React Elements

// 1)What is a React Element?

// An element is the smallest building block of a React App
// React elements represent what the user will see on the page

// This is JSX
const reactElement = <h1>Code Ryan</h1>

// It looks quite similar to  HTML element,
// but in React, it is actually just a JS Object that represents on HTML element

//React DOM will then take this JS object to update the actual DOM with the matching HTML element

// React elements are not componeNts. However, components are made of React elements and components will render out React elements to the DOM

// 2) Rendering Elements

// in most React apps, you render the React elements within one "root" element

// You first need to create this root element to render React elements within

// React DOM will then manage everything within the root element

// To create the root element, you pass it to ReactDOM.createRoot()

// This assumes you have an element with an ID of 'root'
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );

    //After creating the root element, you can then render your element
    // by passing it into the render method on your newly created root element

    // root.render(reactElement)
    