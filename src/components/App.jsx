import { Component } from "react";
import { Form } from "./Form/Form";

export class App extends Component {
  state = {
  contacts: [],
  name: ''
}

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Form />
      </div>
    );
  }
};
