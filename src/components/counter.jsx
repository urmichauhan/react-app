import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.val,
    tags: ["angular", "node", "express", "mongoDB"]
    //imgurl: "https://picsum.photos/200/300?image=0"
  };

  /* constructor() {
    super();
    this.incr = this.incr.bind(this);
  } */

  styles = {
    fontSize: "5rem",
    marginLeft: "25vw"
  };

  rendertags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul className="list-group">
        {this.state.tags.map(tag => (
          <li className="list-group-item" key={this.state.tags.indexOf(tag)}>
            {this.state.tags.indexOf(tag) + 1} {tag}
          </li>
        ))}
      </ul>
    );
  }

  incr = () => {
    this.setState({ value: this.state.value + 1 });
  };

  /* doincr = () => {
    this.incr("Hello");
  }; */

  render() {
    React.createElement("div");
    console.log(this.props);

    return (
      <div
        className="container border-bottom border-dark"
        style={{ marginBottom: 10 + "px", padding: 10 + "px" }}
      >
        {/* <h1 style={this.styles} className="display-4">
          React Practice
        </h1> 
        {this.props.children}*/}
        <span className={this.getbadge()}>{this.formatcount()}</span>
        <br />
        <br />
        {/*  <img
          className="rounded mx-auto d-block"
          src={this.state.imgurl}
          alt="Oops"
        />  */}
        {/*  <br />
        {this.state.tags.length === 0 && "please create a new tag"}
        {this.rendertags()}
        <br /> */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-outline-success"
        >
          Add
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getbadge() {
    let classes = "badge badge-";
    classes += this.props.counter.val === 0 ? "danger" : "info";
    return classes;
  }

  formatcount() {
    const f = this.props.counter.val;
    return f === 0 ? <h5>No products</h5> : <h5>{f}</h5>;
  }
}

export default Counter;
