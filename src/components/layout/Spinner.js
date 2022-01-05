import React, { Component } from "react";
import loader from "../../assets/loader.gif";

export default class Spinner extends Component {
  render() {
    //console.log("loader", loader);
    return (
      <div>
        <img
          src={loader}
          alt="Loading..."
          style={{ width: "200px", margin: "40px auto", display: "block" }}
        />
      </div>
    );
  }
}
