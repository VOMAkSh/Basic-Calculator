import React, { Component } from "react";
import { inject } from "mobx-react";

const styles = {
  buttonStyle: {
    paddingTop: "10px"
  },
  individualButtonStyle: {
    marginRight: "10px",
    height: "50px",
    width: "50px",
    fontSize: "18px"
  },
  clearButtonStyle: {
    marginRight: "10px",
    height: "50px",
    width: "110px",
    fontSize: "18px"
  }
};

@inject("store")
class ButtonGrid extends Component {
  onClickHandler = event => {
    this.props.store.enterValueToDisplay(event.target.textContent);
  };

  render() {
    return (
      <div
        style={{
          marginLeft: "10px"
        }}
      >
        <div style={styles.buttonStyle}>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            9
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            8
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            7
          </button>
          <button
            className="btn blue darken-4"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            +
          </button>
        </div>
        <div style={styles.buttonStyle}>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            6
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            5
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            4
          </button>
          <button
            className="btn blue darken-4"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            -
          </button>
        </div>
        <div style={styles.buttonStyle}>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            3
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            2
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            1
          </button>
          <button
            className="btn blue darken-4"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            *
          </button>
        </div>
        <div style={styles.buttonStyle}>
          <button
            className="btn yellow darken-4"
            style={styles.clearButtonStyle}
            onClick={this.onClickHandler}
          >
            CE
          </button>
          <button
            className="btn blue"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            0
          </button>
          <button
            className="btn blue darken-4"
            style={styles.individualButtonStyle}
            onClick={this.onClickHandler}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonGrid;
