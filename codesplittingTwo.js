// How to do code-split

// React.lazy allows you to lazily load a component only when it is needed to render the page

// const OtherComponent = React.lazy(() => import('./OtherComponrnt'))

//  a good place to start is code-splititng 
// your routes

//This probably gives you some nice performance improvements,

// React.lazy only supports default exports. One solution here is to use an intermediate export file

// How to know if code-splitting works?

//Create a production build on slow networks to see if performance improves

// Check the network tab to see the different chunks coming in

// if you go to a lazily doaded route, should see the fallback component
