import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("child component did dmount");
  }
  render() {
    console.log("child render");
    const { name, contact } = this.props;
    const { count } = this.state;
    return (
      <div className="classcomp">
        <h3>Count:{count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          -
        </button>
        <h3>Name:{name}</h3>
        <h3>Contact:{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
