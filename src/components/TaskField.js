//Import Core
import React, { useState } from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import Material UI
import { Box, Typography } from '@material-ui/core';
//Import Icons
import IconStar from '../assets/IconStar';

const StyledBox = styled(Box)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    height: 40px;
    width: 90%;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    margin: 5px;
    background-color: #fff;
  }
`;

const StyledText = styled(Typography)`
  && {
    color: #181617;
    font-size: 15px;
  }
`;

const StyledIconBox = styled(Box)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    svg {
      height: 17px;
    }
    :hover {
      cursor: pointer;
    }
  }
`;

const TaskField = ({ fav, taskName }) => {
  const [isOpen, setIsOpen] = useState(fav);

  let fill;
  if (!isOpen) {
    fill = '#21223E';
  } else {
    fill = '#eee';
  }
  return (
    <StyledBox>
      <StyledText>{taskName}</StyledText>
      <StyledIconBox onClick={() => setIsOpen(!isOpen)}>
        <IconStar fill={fill} />
      </StyledIconBox>
    </StyledBox>
  );
};

export default TaskField;
