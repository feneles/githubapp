//Import Core
import React from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import Material UI
import { ListItem, Box, Typography } from '@material-ui/core';

const StyledListItem = styled(ListItem)`
  && {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 15px;
    height: 50px;
    transition: 0.5s;
    :hover {
      cursor: pointer;
      background-color: rgba(41, 42, 72, 0.5);
    }
  }
`;

const StyledIconImage = styled.img`
  && {
    height: 100%;
    width: fit-content;
    margin-right: 9px;
  }
`;

const StyledSectionName = styled(Typography)`
  && {
    font-size: 13px;
    color: #fff;
  }
`;

const StyledValue = styled(Typography)`
  && {
    font-size: 14px;
    color: #777688;
  }
`;

const StyledBox = styled(Box)`
  && {
    display: flex;
    align-items: center;
  }
`;

const SideMenuListItem = ({
  icon,
  sectionName,
  value,
  isActive,
  setIsActive
}) => {
  let backgroundColor;
  if (isActive === sectionName) {
    backgroundColor = '#292A48';
  }
  return (
    <StyledListItem
      onClick={() => setIsActive(sectionName)}
      style={{ backgroundColor }}
    >
      <StyledBox>
        <StyledIconImage src={icon} />
        <StyledSectionName>{sectionName}</StyledSectionName>
      </StyledBox>
      <StyledValue>{value}</StyledValue>
    </StyledListItem>
  );
};

export default SideMenuListItem;
