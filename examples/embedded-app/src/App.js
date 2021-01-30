import React from "react";
// import { hot } from 'react-hot-loader/root';
import { Button } from '@material-ui/core';

import { SimpleComponent } from 'mylib';
import { add } from 'mylib';

console.log('add', add(3,3));

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <Button variant="contained">This is a material UI App (button)</Button>
        <SimpleComponent name={name}></SimpleComponent>
      </>
    );
  }
}

export default App;//hot(App);
