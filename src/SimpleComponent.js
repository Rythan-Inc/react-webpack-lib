
import React from "react";
import { useState } from "react";
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
function SimpleComponent(props) {
  const { name } = props;
  const [ value, setValue ] = useState('not loaded');

  const handleClick2 = function (event) {
    console.log('importing util');
    import("./Util").then(util => {
      setValue(util.add(16, 26));
      console.log(util.add(16, 26));
    }).catch(error => {
      console.log(error);
      setValue('error loading');
    });
  }

  console.log(value);
  return (
    <>
      <StyledHeader>
        Welcome {name}
      </StyledHeader>
      <Button
        variant="contained"
        onClick={handleClick2}
      >This is a material UI library ({value})</Button>
    </>
  );
}

export default SimpleComponent;
