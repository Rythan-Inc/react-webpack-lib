
import React from "react";
import { Button } from '@material-ui/core';

class SimpleComponent extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Welcome {name}
        </h1>
        <Button variant="contained">This is a material UI library (button)</Button>
      </>
    );
  }
}

export default SimpleComponent;
