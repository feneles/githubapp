// Import Core
import React from 'react';
// Import Components from Material-UI
import { SvgIcon } from '@material-ui/core';

const IconStar = ({ fill }) => {
  return (
    <SvgIcon viewBox="0 0 17 16">
      <path
        d="M8.500,0.000 L11.301,5.028 L16.999,6.112 L13.033,10.302 L13.753,16.000 L8.500,13.561 L3.247,16.000 L3.967,10.302 L0.001,6.112 L5.699,5.028 L8.500,0.000 "
        fill={fill}
      />
    </SvgIcon>
  );
};

export default IconStar;
