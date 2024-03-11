import React, { useState } from 'react';
import { Table, Tabs } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {  Result, FloatButton, Steps, Button } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import Plot from 'react-plotly.js';

const tableData4 = [
  {
    key: '1',
    Title: 'Iron Man 3',
    Director: 'Shane Black',
    Cast: 'Robert Downey Jr, Rhodey Rhodes, Bruce Banner',
    ReleaseYear: 2013,
    Rating: 'PG-13',
    Characters: 'Iron Man, War Machine',
    MovieCollection: 'Iron Man Series',
    MovieLink: 'https://example.com/iron-man-3',
  },
  {
    key: '2',
    Title: 'Thor: The Dark World',
    Director: 'Alan Taylor',
    Cast: 'Chris Hemsworth, Natalie Portman, Tom Hiddleston, Kat Dennings, Anthony Hopkins, Idris Elba, Jaimie Alexander',
    ReleaseYear: 2013,
    Rating: 'PG-13',
    Characters: 'Thor, Loki',
    MovieCollection: 'Thor Series',
    MovieLink: 'https://example.com/thor-dark-world',
  },
  {
    key: '3',
    Title: 'Captain America: The Winter Soldier',
    Director: 'Anthony Russo, Joe Russo',
    Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
    ReleaseYear: 2014,
    Rating: 'PG-13',
    Characters: 'Captain America,Bucky',
    MovieCollection: 'Captain America Series',
    MovieLink: 'https://example.com/captain America',
  },
  {
    key: '4',
    Title: 'Guardians of the Galaxy',
    Director: 'James Gunn',
    Cast: 'Peter Quill, Gamora, Rocket, Groot',
    ReleaseYear: 2014,
    Characters: 'Guardian , Rocket, Groot',
    MovieCollection: 'Galaxy Series',
    MovieLink: 'https://example.com/guardians of galaxy',
  },
  {
    key: '5',
    Title: 'Avengers: Age of Ultron',
    Director: 'Joss Whedon',
    Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
    ReleaseYear: 2015,
    Characters: 'IronMan,Captain America,Hulk, Black widow, Thor',
    MovieCollection: 'Avengers Series',
    MovieLink: 'https://example.com/Avengers',
  },
  {
    key: '6',
    Title: 'Ant-Man',
    Director: 'James Gunn',
    Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
    ReleaseYear: 2014,
    Characters: 'Antman',
    MovieCollection: 'Antman Series',
    MovieLink: 'https://example.com/AntMan',
  },
];


const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
  },
  {
    title: 'Director',
    dataIndex: 'Director',
    key: 'Director',
  },
  {
    title: 'Cast',
    dataIndex: 'Cast',
    key: 'Cast',
  },
  {
    title: 'Release Year',
    dataIndex: 'ReleaseYear',
    key: 'ReleaseYear',
  },
  {
    title: 'Rating',
    dataIndex: 'Rating',
    key: 'Rating',
  },
  {
    title: 'Characters',
    dataIndex: 'Characters',
    key: 'Characters',
  },
  {
    title: 'Movie Collection',
    dataIndex: 'MovieCollection',
    key: 'MovieCollection',
  },
  {
    title: 'Movie Link',
    dataIndex: 'MovieLink',
    key: 'MovieLink',
  },
];

const App = () => {
  const location = useLocation();
  
  // Determine the current phase based on the URL
  const getCurrentPhase = () => {
    switch (location.pathname) {
      case '/phase1':
        return 0;
      case '/phase2':
        return 1;
      case '/phase3':
        return 2;
      case '/phase4':
        return 3;
      case '/phase5':
        return 4;
      case '/phase6':
        return 5;
      default:
        return 0;
    }
  };
  const [dataSource, setDataSource] = useState(tableData4);

  const scatterPlotData = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    type: 'scatter',
    marker: { color: 'red' },
  };

  const rangeBarPlotData = {
    x: ['A', 'B', 'C', 'D'],
    y: [[1, 3], [2, 4], [3, 5], [4, 6]],
    type: 'bar',
    marker: { color: 'black' },
  };

  return (
    <>
    <Steps
      size="middle"
      current={getCurrentPhase()}
      items={[
        {
          title: 'Phase 1',
        },
        {
          title: 'Phase 2',
        },
        {
          title: 'Phase 3',
        },
        {
          title: 'Phase 4',
        },
        {
          title: 'Phase 5',
        },
        {
          title: 'Phase 6',
        },
      ]}
    />
    <Table
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <Tabs defaultActiveKey="1" centered>
        <Tabs.TabPane tab="Scatter Plot" key="1">
          <Plot data={[scatterPlotData]} layout={{ title: 'Scatter Plot' }} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Range Bar Plot" key="2">
          <Plot data={[rangeBarPlotData]} layout={{ title: 'Range Bar Plot' }} />
        </Tabs.TabPane>
      </Tabs>
      <Result
        icon={<SmileOutlined />}
        title="Love You 3000! - Morgan Stark"
        extra={<Link to="/phase6"><Button type="primary">Next Phase 6</Button></Link>} />
        <FloatButton.BackTop />
    </>
  );
};

export default App;
