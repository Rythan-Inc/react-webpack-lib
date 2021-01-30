
import React from "react";
import { Button } from '@material-ui/core';

import styled from '@emotion/styled';

const color = 'white';

const StyledHeader = styled.h1`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: ${color};
  }
`;
class SimpleComponent extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <StyledHeader>
          Welcome {name}
        </StyledHeader>
        <Button variant="contained">This is a material UI library (button)</Button>
      </>
    );
  }
}

export default SimpleComponent;
