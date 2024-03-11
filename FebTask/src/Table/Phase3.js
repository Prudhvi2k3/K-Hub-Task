import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tabs, Steps } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';
import {  Result, FloatButton } from 'antd';
import Highlighter from 'react-highlight-words';
import Plot from 'react-plotly.js';

const tableData3 = [
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

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
      width: '20%',
      ...getColumnSearchProps('Title'),
    },
    {
      title: 'Director',
      dataIndex: 'Director',
      key: 'Director',
      width: '15%',
      ...getColumnSearchProps('Director'),
    },
    {
      title: 'Cast',
      dataIndex: 'Cast',
      key: 'Cast',
      width: '20%',
      ...getColumnSearchProps('Cast'),
    },
    {
      title: 'Release Year',
      dataIndex: 'ReleaseYear',
      key: 'ReleaseYear',
      width: '10%',
      ...getColumnSearchProps('ReleaseYear'),
      sorter: (a, b) => a.ReleaseYear - b.ReleaseYear,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Rating',
      dataIndex: 'Rating',
      key: 'Rating',
      width: '10%',
      ...getColumnSearchProps('Rating'),
    },
    {
      title: 'Characters',
      dataIndex: 'Characters',
      key: 'Characters',
      width: '15%',
      ...getColumnSearchProps('Characters'),
    },
    {
      title: 'Movie Collection',
      dataIndex: 'MovieCollection',
      key: 'MovieCollection',
      width: '15%',
      ...getColumnSearchProps('MovieCollection'),
    },
    {
      title: 'Movie Link',
      dataIndex: 'MovieLink',
      key: 'MovieLink',
      width: '15%',
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
      <Table columns={columns} dataSource={tableData3} />
      <Tabs defaultActiveKey="1" centered style={{ marginTop: 20 }}>
      <Tabs.TabPane tab="Donut Plot" key="1">
        <DonutPlot data={tableData3} />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Rating Heatmap" key="2">
        <RatingHeatMap data={tableData3} />
      </Tabs.TabPane>
    </Tabs><Result
        icon={<SmileOutlined />}
        title="That's My Secret, Cap. I'm Always Angry. - Bruce Banner"
        extra={<Link to="/phase4"><Button type="primary">Next Phase 4</Button></Link>} />
        <FloatButton.BackTop /></>
  );
};

const DonutPlot = ({ data }) => {
  const releaseYears = data.map((item) => item.ReleaseYear);
  const yearCounts = releaseYears.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const plotData = [
    {
      values: Object.values(yearCounts),
      labels: Object.keys(yearCounts),
      type: 'pie',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Plot data={plotData} layout={{ title: 'Release Year Distribution' }} />
    </div>
  );
};

const RatingHeatMap = ({ data }) => {
  const ratings = data.map((item) => item.Rating);
  const ratingCounts = ratings.reduce((acc, rating) => {
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {});

  const plotData = [
    {
      z: [Object.values(ratingCounts)],
      x: Object.keys(ratingCounts),
      y: ['Rating'],
      type: 'heatmap',
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Plot data={plotData} layout={{ title: 'Rating Heatmap' }} />
    </div>
  );
};

export default App;
