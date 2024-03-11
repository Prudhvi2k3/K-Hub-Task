import React from 'react';
import { Tabs } from 'antd';
import { Table, FloatButton, Steps } from 'antd';
import { Line, RadialBar } from '@ant-design/charts';
import { useLocation, Link } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const { TabPane } = Tabs;

const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
    width: 100,
    fixed: 'left',
  },
  {
    title: 'Director',
    dataIndex: 'Director',
    key: 'Director',
    width: 150,
  },
  {
    title: 'Cast',
    dataIndex: 'Cast',
    key: 'Cast',
    width: 200,
  },
  {
    title: 'Release Year',
    dataIndex: 'ReleaseYear',
    key: 'ReleaseYear',
    width: 120,
  },
  {
    title: 'Rating',
    dataIndex: 'Rating',
    key: 'Rating',
    width: 100,
  },
  {
    title: 'Characters',
    dataIndex: 'Characters',
    key: 'Characters',
    width: 150,
  },
  {
    title: 'Movie Collection',
    dataIndex: 'MovieCollection',
    key: 'MovieCollection',
    width: 150,
  },
  {
    title: 'Movie Link',
    dataIndex: 'MovieLink',
    key: 'MovieLink',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const tableData2 = [
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

const movieReleaseData = tableData2.reduce((acc, curr) => {
  const releaseYear = curr.ReleaseYear;
  acc[releaseYear] = (acc[releaseYear] || 0) + 1;
  return acc;
}, {});

const ratingCountData = tableData2.reduce((acc, curr) => {
  const rating = curr.Rating;
  acc[rating] = (acc[rating] || 0) + 1;
  return acc;
}, {});

const movieReleaseChartConfig = {
  data: Object.entries(movieReleaseData).map(([year, count]) => ({ year, count })),
  xField: 'year',
  yField: 'count',
};

const ratingCountChartConfig = {
  data: Object.entries(ratingCountData).map(([rating, count]) => ({ rating, count })),
  xField: 'rating',
  yField: 'count',
  radius: 0.9,
  label: {
    style: {
      fill: '#b11313',
      opacity: 0.6,
    },
  },
};


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
  <Table columns={columns} dataSource={tableData2} scroll={{ x: 1500, y: 900 }} />
  <Tabs defaultActiveKey="1" centered>
    <TabPane tab="Movies Released" key="1">
      <div style={{ marginBottom: '20px' }}>
        <Line {...movieReleaseChartConfig} />
      </div>
    </TabPane>
    <TabPane tab="Rating Counts" key="2">
      <div style={{ marginBottom: '20px' }}>
        <RadialBar {...ratingCountChartConfig} />
      </div>
    </TabPane>
  </Tabs>
  <Result
        icon={<SmileOutlined />}
        title="I Am Iron Man - Tony Stark"
        extra={<Link to="/phase3"><Button type="primary">Next Phase 3</Button></Link>}
      />
    <FloatButton.BackTop />  
      </>
);
    }
export default App;
