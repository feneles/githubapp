//Import Core
import React from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import Material UI
import { Box } from '@material-ui/core';

const StyledDots = styled.div`
  && {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 5px;
    :hover {
      cursor: pointer;
    }
  }
`;

const StyledBox = styled(Box)`
  && {
    width: 100%;
    background-color: #111022;
    display: flex;
    align-items: center;
    height: 30px;
    padding: 5px 10px;
    border-radius: 11px 0 0 0;
  }
`;

const colors = ['#FE5A4E', '#FDBE1B', '#00CE48'];

const SideMenuTopSection = () => {
  return (
    <StyledBox>
      {colors.map((el, index) => (
        <StyledDots key={el + index} style={{ backgroundColor: el }} />
      ))}
    </StyledBox>
  );
};

export default SideMenuTopSection;
