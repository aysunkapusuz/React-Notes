// What is a React Fragment ? 

// you can only return one parent elemnet within React

//A Fragment allows  you to group a list of children elements without needing to add extra elements to the DOM

// There aare two ways to create a Fragments

// You can use <React.Fragment></React.Fragment> or <></>

// Use React.Fragment if you need to use a key prop on the returned parent element

// For example

function App (){
    return (
        <React.Fragment>
        <h1>Hello</h1>
        <p>Add an article</p>
        </React.Fragment>
    )
}

function App (){
    return (
        <>
        <h1>Hello</h1>
        <p>Add an article</p>
        </>
    )
}