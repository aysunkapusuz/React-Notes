// What is JSX?

// JSX stands for Javascript XML. It is JS that looks like HTML
// JSX makes code easier to read, more maintainable


// 6 Rules of JSX 

// 1) JSX attributes are camelCase

function MyComponent (){
    return (
        <h1 onClick={handleClick}>
            Hello World
        </h1>
    )
}

// 2) Some JSX attributes have name collisions because of JS keywords

function NameCollisions(){
    return (
        <div className="container">
            <label htmlFor="firstName">Input Label</label>
            <input type="text" id="firstName" name="firstName" />

        </div>
    )
}

// 3) You must close all tags e.g. <input ... />

function CloseTags(){
    return (
        <div className="container">
            <label htmlFor="firstName">Input Label</label>
            <input type="text" id="firstName" name="firstName" />

        </div>
    )
}

// 4) You can only return one parent element 

//Do not do this
// function InvalidJsx(){
//     return (
//         <h1>
//             Hello
//         </h1>
//         <p>
//             Good morning
//         </p>
//     )
// }

//Do this instead but try to avoid div's for semantics
 function InvalidJsx(){
     return (
         <section>
            <h1>
             Hello
         </h1>
         <p>
             Good morning
         </p>

         </section>
     )
 }
 
 //or use React fragment

 function InvalidJsx(){
    return (
        <>
           <h1>
            Hello
        </h1>
        <p>
            Good morning
        </p>

        </>
    )
}
function InvalidJsx(){
    return (
        <React.Fragment>
           <h1>
            Hello
        </h1>
        <p>
            Good morning
        </p>

        </React.Fragment>
    )
}

 // 5) You place JS expressions within {}

 function CurlyBraces (){
    const title= 'Hello';
    const paragraph = 'short intro';
    return (
        <section>
            <h1 onClick={someFunction}>
                {`my title is: ${title}`}
            </h1>
            <p>
                {`my paragraph is ${paragraph}`}
            </p>
        </section>
    )
 }

 // 6) you can not loop within JS

 // function CurlyBraces (){
 //    const title= 'Hello';
 //    const paragraph = 'short intro';
 //    const shouldShowTitle = true
 //    return (
 //        <section>
 //            <h1>
 //                {shouldShowTitle && title}
 //            </h1>
 //            <p>
 //                {`my paragraph is ${paragraph}`}
 //            </p>
 //            {
 //            for(const char of title)
 //            //do something
 //            } 
 //        </section>
 //    )
 // }

 function CurlyBraces (){
    const title= 'Hello';
    const paragraph = 'short intro';
    const shouldShowTitle = true
    const myArray = [1,2,23,4,5]
    return (
        <section>
            <h1>
                {shouldShowTitle && title}
            </h1>
            <p>
                {`my paragraph is ${paragraph}`}
            </p>
            {
            myArray.map((value)=> value)
            } 
        </section>
    )
 }


