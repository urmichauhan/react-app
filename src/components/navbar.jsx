import React, { Component } from "react";

const Navbar = ({ totalcounters }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand">
        Counters &nbsp;
        <span className="badge badge-pill badge-light">{totalcounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
