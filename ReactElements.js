// React Elements

// 1)What is a React Element?

// An element is the smallest building block of a React App
// React elements represent what the user will see on the page

// This is JSX
const reactElement = <h1>Hello World</h1>

// It looks quite similar to  HTML element,
// but in React, it is actually just a JS Object that represents on HTML element

//React DOM(library) will then take this JS object to update the actual DOM with the matching HTML element

// React elements are not components. However, components are made of React elements and components will render out React elements to the DOM

// 2) Rendering Elements

// in most React apps, you render the React elements within one "root" element (not necessary)

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

    // 3)Updating Elements

    // React elements are immutable(not chancgeable)
    //the only way to change is to create a new element.
    // this does not mean you need to keep calling root.render()
    // React allows components to contain state,  which will allow for dynamic elements

    // React only updates what is necessary
    