// 1) What is an event?

// An event represents some action the user takes, 
// like clicking a button, submitting a form, dragging anelement,
// they are look like an object
// You capture this event and perform some action to make your app reactive to what the user does


// 2) Are React events the same as HTML events?

// Kind of. React uses what is called a "synthetic event"
//It is a cross-browser warepper around the native HTML event.

// It will have a similar interface as a native event, but it works the same across all browsers

//Not all events are named the same

// 3) How do you handle events in React?

// Usually, you do not need to call addEventListener
// Instead of that, just provide an event listener within your JSX, when that element's rendered.

function App (){
    const [count, setCount] = useState(0)

    const handleChangeCount = (e) => {
        console.log(e)
        setCount((currCount)=> currCount +1)
    }
    return (
        <main style={mainStyles}>
            <h1>{count}</h1>
            {
                <button onClick={handleChangeCount}>
                    Change it
                </button>
            }
            </main>
    )
}
export default App;
