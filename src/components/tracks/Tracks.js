import React from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
const Tracks = () => {
  return (
    <Consumer>
      {(value) => {
        console.log(value);
        const { track_list, heading } = value;
        if (track_list.length === 0 || track_list === undefined) {
          return <Spinner />;
        } else {
          return <h1>Tracks</h1>;
        }
      }}
    </Consumer>
  );
};

export default Tracks;
