import React from "react";
import HomeHeader from "./components/HomeHeader";
import { Input, Segment } from "semantic-ui-react";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "kriztiank",
      name: "Home",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, data) {
    // console.log(event);
    // console.log(data);
    console.log(data.value);
    this.setState({
      name: data.value,
    });
  }

  render() {
    return (
      <div>
        <HomeHeader author={this.state.author} name={this.state.name} />
        <Segment basic>
          <Input
            label={"Input Form"}
            onChange={this.onChange}
            value={this.state.name}
          />
        </Segment>
      </div>
    );
  }
}

export default App;