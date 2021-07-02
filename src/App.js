//Import Core
import React, { useState } from 'react';
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

const dummyDataTasks = [
  {
    date: '19-07-2016',
    name: 'Page changes',
    fav: false,
    open: true
  },
  {
    date: '19-07-2016',
    name: 'Review of last issues',
    fav: false,
    open: false
  },
  {
    date: '18-07-2016',
    name: 'Visual UI Update Review',
    fav: true,
    open: false
  },
  {
    date: '18-07-2016',
    name: 'Sidebar changes',
    fav: true,
    open: true
  },
  {
    date: '15-07-2016',
    name: 'Crash update',
    fav: true,
    open: false
  },
  {
    date: '15-07-2016',
    name: 'Page visual UI Update Review',
    fav: false,
    open: false
  },
  {
    date: '15-07-2016',
    name: 'Sidebar update',
    fav: true,
    open: false
  },
  {
    date: '14-07-2016',
    name: 'Crash issue',
    fav: false,
    open: true
  },
  {
    date: '14-07-2016',
    name: 'Visual update & Crash resolve',
    fav: false,
    open: false
  },
  {
    date: '14-07-2016',
    name: 'Sidebar update',
    fav: true,
    open: false
  },
  {
    date: '12-07-2016',
    name: 'Review page changes',
    fav: true,
    open: true
  },
  {
    date: '12-07-2016',
    name: 'Page improves',
    fav: false,
    open: false
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
        {dummyDataTasks.map((el, index) => (
          <TaskField key={el.name + index} taskName={el.name} fav={el.fav} />
        ))}
      </StyledRightBox>
    </StyledWrapper>
  );
};

export default App;
