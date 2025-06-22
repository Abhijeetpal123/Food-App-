/***
 * <div id="parent">
 * <div id="child">
 * <h1>i am an h1 tag</h1>
 * </div>
 * </div>
 *
 */
// https://chatgpt.com/canvas/shared/681ce0b000a08191a081b1d1470f5ff3

import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement("h1", { id: "abc" }, "Hey Every One This is Abhijeet  ");

// console.log(heading); //object

// JSX (transpiled before it reaches to JS) - PARCEL - BABEL
// JSX => React.createElement =>ReactElement-JS Object =>HTMLElemnt(render)
// JSX is a javascript XML.Its is not a HTML language It's Looks Like HTML or XML like (more familiar)
// Improves readability
// console.log(jsxHeading); // object


const Title = () =>(<h1 className="class" >Hello I am Abhijeet ❤️ (by JSx)</h1> )

// root.render(<Title/>);




// React Component
// 1. Functional Component(mordern ) -> A normal javascript function that  return some normal jsx code or react element .It can be nested

const HeadingComponent = () => (
<div id="container">
  {<Title/>}
 <h1 className="class">Hey I am functional Component  </h1>
</div>
)


const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<HeadingComponent />); 










/** another method to written function 
const HeadingComponent2 = () => (
  <div id="container ">
    <h1 className="class">Hey I am functional componet2 </h1>
  </div>
); */

// root.render(headingcomponent()) // It also works but not preffered it skips react internal mechanism likes props context hooks


// root.render(<HeadingComponent />); // it is a jsx syntax to render a react element



















//  ^ and ~ are the version control symbols in package.json .they help aintain stability while allowing safe updates.

// ^ => Caret Operator => allows update that do not change the left most non zero digit (give me all non-breaking updates within major 18 )
// eg =>18.2.1, 18.2.3(allowed )  19.0.0(not allowed )

// ~ => tilde operator => allows patch update only that can change only last digit (only bug fixing no new features )
// eg=> 18.2.1, 18.2.3 (allowed) 18.3.0 ,19.0.0(not allowed )
