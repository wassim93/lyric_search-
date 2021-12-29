import React, { Component } from "react";

const Context = React.createContext();
export class Provider extends Component {
  state = {
    track_list: [
      { track: { track_name: "track1" } },
      { track: { track_name: "track2" } },
    ],
    heading: "top 10 songs",
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
