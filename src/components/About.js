import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log(" parent constructor");
  }

  componentDidMount() {
    console.log("parent Component Did Mount ");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About (Class Component)</h1>
        <h1>This is Our Food Delivery App </h1>
        {/* <User name="Abhijeet" /> */}
        <UserClass name={"Abhijeet"} contact={"abhijeetpal0307@gmail.com"} />
      </div>
    );
  }
}

export default About;

/**
 * -parent constructor
 *    - parent render
 *
 *        - First child constructor
 *       - First child render
 *
 *                      -Second child Contructor
 *                      -Second Child Render
 *
 *       - First CompounddidMount
 *       -Second Compund Did Munt
 *
 * - Parent CompoundDid Mount
 *
 *
 */
