import React, { useState } from 'react';
import { Button, Space, Table, Tabs } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {  Result, FloatButton, Steps } from 'antd';
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
    Rating: 'PG-5',
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
    Rating: 'PG-5',
    Characters: 'IronMan,Captain AM=merica,Hulk, Black widow,THor',
    MovieCollection: 'Avengers Series',
    MovieLink: 'https://example.com/Avengers',
  },
  {
    key: '6',
    Title: 'Ant-Man',
    Director: 'James Gunn',
    Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
    ReleaseYear: 2014,
    Rating: 'PG-5',
    Characters: 'Antman',
    MovieCollection: 'Antman Series',
    MovieLink: 'https://example.com/AntMan',
  },
];

const App = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setReleaseYearSort = () => {
    setSortedInfo({
      order: 'descend',
      columnKey: 'ReleaseYear',
    });
  };

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
      sorter: (a, b) => a.ReleaseYear - b.ReleaseYear,
      sortOrder: sortedInfo.columnKey === 'ReleaseYear' ? sortedInfo.order : null,
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
      filters: [
        { text: 'Iron Man', value: 'Iron Man' },
        { text: 'Thor', value: 'Thor' },
        { text: 'Captain America', value: 'Captain America' },
        { text: 'Guardian', value: 'Guardian' },
        { text: 'Antman', value: 'Antman' },
        // Add more as needed
      ],
      filteredValue: filteredInfo.Characters || null,
      onFilter: (value, record) => record.Characters.includes(value),
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
      render: (text) => <a href={text}>{text}</a>,
    },
  ];

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
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setReleaseYearSort}>Sort by Release Year</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table columns={columns} dataSource={tableData4} onChange={handleChange} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="Range Bar Plot" key="2">
            <RangeBarPlot />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Waterfall Plot" key="3">
            <WaterfallPlot />
          </Tabs.TabPane>
        </Tabs>
      </div>
      <Result
        icon={<SmileOutlined />}
        title="They Called Me Mad Man. - Thanos"
        extra={<Link to="/phase5"><Button type="primary">Next Phase 5</Button></Link>} />
        <FloatButton.BackTop />
    </>
  );
};

const RangeBarPlot = () => {
  const data = [
    {
      type: 'bar',
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, 14, 23],
    },
  ];

  const layout = {
    title: 'Basic Range Bar Plot',
  };

  return <Plot data={data} layout={layout} />;
};

const WaterfallPlot = () => {
  const data = [
    {
      type: 'waterfall',
      x: ['Initial', 'A', 'B', 'C', 'D', 'Total'],
      y: [20, 30, 40, -20, 10, 40],
    },
  ];

  const layout = {
    title: 'Waterfall Plot Example',
  };

  return <Plot data={data} layout={layout} />;
};

export default App;
