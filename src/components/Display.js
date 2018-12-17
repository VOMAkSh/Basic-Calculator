import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Display extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "10vh",
          width: "230px",
          display: "inline-block",
          borderStyle: "solid",
          borderColor: "#1976d2",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "30px",
          backgroundColor: "#2196f3",
          color: "white",
          textAlign: "right"
        }}
        className="blue darken-1"
      >
        {this.props.store.display}
      </div>
    );
  }
}

export default Display;
