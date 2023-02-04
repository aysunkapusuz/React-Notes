//COMPONENTS
//What are React components?

//JS functions that returns React Elements
//describing wht the user sees on the screen

// Why do we use them?
// Components allow you to split your user interface into separate, independent pieces,
// where you can use each piece in isolation whereever you want
// You can break a complex app down into small, reusbled pieces

// 3)How do they work?
// You just define a JS function that returns React elements
// It should be title case
// you only must return one parent element within components

function SayHello(){
    return (
        <h1>Hey</h1>
    )
}


//you render components jsut as you would reunder react elements
//components can render other components (component composition)

function SayHello(){
    return (
        <h1>Hey</h1>
    )
}

function RootComponent(){
    return (
        <>
        <SayHello />
        </>
        
    )
}