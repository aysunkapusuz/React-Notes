// What is lifting state ?

// In React, data flows one way from parent to child component

//But, sometimes you will find that you need the same state in two different sibling components

// But the state is currently managed in just one of the siblings

// Since you do not want the other sibling to feel left out, you can then lift the state from the sibling component to the parent component, and then pass the data down to both siblings
// You do this because you can only pass data from parent to child, not from one sibling to another