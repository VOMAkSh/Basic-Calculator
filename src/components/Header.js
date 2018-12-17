import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="black darken-3">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            Calculator
          </a>
        </div>
      </nav>
    );
  }
}
