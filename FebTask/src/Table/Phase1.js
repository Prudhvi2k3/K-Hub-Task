import React from 'react';
import { Tabs, Table } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result, FloatButton } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart } from '@mui/x-charts/PieChart';
import { Steps } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import './Piecharts.css';

const { TabPane } = Tabs;

const tableData1 = [
  {
    key: '1',
    Title: 'Iron Man',
    Director: 'Jon Favreau',
    Cast: 'Robert Downey Jr, Jon Favreau, Gwyneth Paltrow, Stan Lee',
    ReleaseYear: 2008,
    Rating: 'PG-13',
    Characters: 'Iron Man',
    MovieCollection: 'Iron Man Collection',
    MovieLink: 'https://example.com/Iron-Man',
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
    Characters: 'Antman',
    MovieCollection: 'Antman Series',
    MovieLink: 'https://example.com/AntMan',
  },
];

const movieCollectionData = [
  { label: 'Iron Man Series', value: 3 },
  { label: 'Thor Series', value: 2 },
  { label: 'Captain America Series', value: 1 },
  { label: 'Galaxy Series', value: 1 },
  { label: 'Avengers Series', value: 1 },
  { label: 'Antman Series', value: 1 },
];

const ratingDistributionData = [
  { label: 'PG-13', value: 6 },
  { label: 'PG-5', value: 3 },
];

const ReleaseYearData = [
  { label: '2008', value: 2 },
  { label: '2010', value: 1 },
  { label: '2011', value: 2 },
  { label: '2012', value: 1 },
];

const expandedRowRender = (record) => {
  const innerColumns = [
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
      title: 'Characters',
      key: 'Characters',
      render: () => (
        <span>
          <a>Character 1</a>
          <a style={{ marginLeft: 8 }}>Character 2</a>
          {/* Add more characters as needed */}
        </span>
      ),
    },
    {
      title: 'Movie Collection',
      dataIndex: 'MovieCollection',
      key: 'MovieCollection',
    },
    {
      title: 'Movie Link',
      key: 'MovieLink',
      render: () => <a href="#">Link</a>,
    },
  ];

  const innerData = [record];

  return <Table columns={innerColumns} dataSource={innerData} pagination={false} />;
};

const CustomBarChart = ({ title, data }) => {
  return (
    <div className="bar-chart-container">
      <h2 className="chart-heading">{title}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#b11313" /> {/* MCU Red */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomPieChart = ({ title, data, height }) => {
  return (
    <div className="pie-chart-container">
      <h2 className="chart-heading">{title}</h2>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        height={height}
        className="pie-chart"
        colorScheme={['#ed1d24', '#ffd700', '#4169e1', '#b22222', '#808080', '#008000']} // MCU Red, Gold, Blue, Crimson, Silver, Green
      />
    </div>
  );
};

const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
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
    render: (text) => text ? text : 'N/A',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <a>Publish</a>
    ),
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
      expandable={{ expandedRowRender }}
      dataSource={tableData1} /><Tabs defaultActiveKey="1" centered>
        <TabPane tab="Pie Charts" key="1">
          <div className="pie-charts-container">
            <CustomPieChart title="Movie Collection" data={movieCollectionData} height={200} />
            <CustomPieChart title="Rating Distribution" data={ratingDistributionData} height={200} />
          </div>
        </TabPane>
        <TabPane tab="Bar Chart" key="2">
          <CustomBarChart title="Release Year Distribution" data={ReleaseYearData} />
        </TabPane>
      </Tabs>
      <Result
        icon={<SmileOutlined />}
        title="Great, I can do this all Day! Avengers Assemble - Captain America"
        extra={<Link to="/phase2"><Button type="primary">Next Phase 2</Button></Link>}
      />
      <FloatButton.BackTop />
  </>
  );
};

export default App;
