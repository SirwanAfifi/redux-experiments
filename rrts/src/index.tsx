import React from "react";
import ReactDOM from "react-dom";

interface AppProps {}

class App extends React.Component<AppProps> {
  render() {
    return <div>Hi There</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
