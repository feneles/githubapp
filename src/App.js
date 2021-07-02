//Import Core
import React, { useState, useEffect } from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import Material UI
import { Container, Paper, List } from '@material-ui/core';
//Import Components
import SideMenuListItem from './components/SideMenuListItem';
import SideMenuTopSection from './components/SideMenuTopSection';
import TaskField from './components/TaskField';
//Import Icons and Images
import background from './assets/background.jpg';
import icon_closed from './assets/icon-closed-issue.svg';
import icon_github from './assets/icon-github.svg';
import icon_open from './assets/icon-open-issue.svg';
//Import DummyData
import data from './data.json';

const dummyDataSections = [
  {
    sectionName: 'All',
    icon: icon_github
  },
  {
    sectionName: 'Open',
    icon: icon_open
  },
  {
    sectionName: 'Closed',
    icon: icon_closed
  }
];

const StyledWrapper = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${background});
    background-position: center;
    height: 100vh;
  }
`;

const StyledRightBox = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    height: 53.5vh;
    width: 26vw;
    background-color: #f6f6f6;
    border-radius: 0 11px 11px 0;
    z-index: 2;
    ::-webkit-scrollbar {
      width: 17px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #d6dee1;
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #a8bbbf;
    }
  }
`;

const StyledLeftBox = styled(Paper)`
  && {
    height: 53.5vh;
    width: 8vw;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(7px);
    border-radius: 11px 0 0 11px;
  }
`;

const StyledList = styled(List)`
  && {
    padding: 0;
  }
`;

const App = () => {
  const [isActive, setIsActive] = useState('All');
  const [activeTasks, setActiveTasks] = useState([]);

  console.log(data.length);
  console.log(data.filter(el => el.status === isActive));

  useEffect(() => {
    if (isActive === 'All') {
      setActiveTasks(data);
    } else {
      setActiveTasks(data.filter(el => el.status === isActive));
    }
  }, [isActive]);

  return (
    <StyledWrapper maxWidth="md">
      <StyledLeftBox elevation={13}>
        <SideMenuTopSection />
        <StyledList>
          {dummyDataSections.map((el, index) => (
            <SideMenuListItem
              key={el.sectionName + index}
              icon={el.icon}
              sectionName={el.sectionName}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
        </StyledList>
      </StyledLeftBox>
      <StyledRightBox elevation={13}>
        {activeTasks.map((el, index) => (
          <TaskField key={el.name + index} taskName={el.name} fav={el.fav} />
        ))}
      </StyledRightBox>
    </StyledWrapper>
  );
};

export default App;
