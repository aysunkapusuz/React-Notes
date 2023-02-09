// React Props
// 1) What are props?

// how you pass arguments to functions, you pass props into components
//It is how you create dynamic, reusable components

// 2)How do they work?

// You pass props like you would an HTML attribute

// React passes props as an object. The properties on that object are going to be the arguments
// to the component you are using the attribute on ("props")

function Person(props){
    return (
    <>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    </>
    )
}
// Note: You can only pass props from parent to child, not vice versa

function App (){
    return (
        <>
        <Person name="Mike" age={20} />
        <Person name="Jennifer" age={40} />
        </>
    )
}

// It is also common to destructure within a component

//Props must be read-only, you can not mutate your props

function Person ({details}){
    details.name = 'Aysun'
    return (
        <>
        <h1>{details.name}</h1>
        <p>{details.age}</p>
        </>
    )
}

function App (){
    const person = {name: 'Mike', age: 25}
    const anotherPerson = {name: 'Sue', age: 27}
    return (
        <>
        <Person details={person} />
        <Person details={anotherPerson} />
        </>
    )
}

// props.children

//Same as props, but you pass children in the opening and closing JSX tags
// example <ReactComponent>Children Go Here </ReactComponent>