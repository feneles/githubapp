//Import Core
import React, { useState, useEffect } from 'react';
//Import Styled Components
import styled from 'styled-components';
//Import Material UI
import { Container, Paper, List, Typography, Box } from '@material-ui/core';
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

const StyledWrapper = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
`;

const StyledRightBox = styled(Paper)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    height: 500px;
    width: 500px;
    background-color: #f6f6f6;
    border-radius: 0 11px 11px 0;
    z-index: 2;
    padding: 5px 10px;
    box-sizing: border-box;
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
    height: 500px;
    width: 150px;
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

const StyledTaskDate = styled(Typography)`
  && {
    color: #a8a6b1;
    font-size: 12px;
  }
`;

const StyledTaskDateBox = styled(Box)`
  && {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 5px 0;
  }
`;

const App = () => {
  const [isActive, setIsActive] = useState('All');
  const [activeTasks, setActiveTasks] = useState([]);
  const [sortedData, setSortedData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      if (isActive === 'All') {
        setActiveTasks(data);
      } else {
        setActiveTasks(data.filter(el => el.status === isActive));
      }
    };
    fetchData();
    const sortData = () => {
      let groupDataByDate = {};
      activeTasks.forEach(task => {
        if (groupDataByDate[task.date]) {
          groupDataByDate[task.date].push(task);
        } else {
          groupDataByDate[task.date] = [task];
        }
      });
      const groupArrays = Object.keys(groupDataByDate).map(date => {
        return {
          date,
          tasks: groupDataByDate[date]
        };
      });
      setSortedData(groupArrays);
    };
    sortData();
  }, [isActive, activeTasks]);

  const getAllItems = data.length;
  const getOpenItems = data.filter(el => el.status === 'Open').length;
  const getClosedItems = data.filter(el => el.status === 'Closed').length;
  const sections = [
    {
      sectionName: 'All',
      icon: icon_github,
      value: getAllItems
    },
    {
      sectionName: 'Open',
      icon: icon_open,
      value: getOpenItems
    },
    {
      sectionName: 'Closed',
      icon: icon_closed,
      value: getClosedItems
    }
  ];

  return (
    <StyledWrapper>
      <StyledLeftBox elevation={13}>
        <SideMenuTopSection />
        <StyledList>
          {sections.map((el, index) => (
            <SideMenuListItem
              key={el.sectionName + index}
              icon={el.icon}
              sectionName={el.sectionName}
              isActive={isActive}
              setIsActive={setIsActive}
              value={el.value}
            />
          ))}
        </StyledList>
      </StyledLeftBox>
      <StyledRightBox elevation={13}>
        {sortedData.length > 1 &&
          sortedData.map((el, index) => {
            return (
              <Box minWidth="100%" key={el.date + index}>
                <StyledTaskDateBox>
                  <StyledTaskDate>{el.date}</StyledTaskDate>
                </StyledTaskDateBox>

                {el.tasks.map((element, index) => (
                  <TaskField
                    key={element.name + index}
                    taskName={element.name}
                    fav={element.fav}
                  />
                ))}
              </Box>
            );
          })}
      </StyledRightBox>
    </StyledWrapper>
  );
};

export default App;
