import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tabs } from 'antd';
import Highlighter from 'react-highlight-words';
import Buttons from './Buttons';

const { TabPane } = Tabs;

const App = () => {
  const [activeTabKey, setActiveTabKey] = useState('1');

  const handleButtonClick = (key) => {
    setActiveTabKey(key);
  };

  const handleDropdownItemClick = (key) => {
    setActiveTabKey(key);
  };

  const handleHomeButtonClick = () => {
    // Perform the logic to redirect to the home page
    // For example, you can use React Router: 
    // history.push('/') or window.location.href = '/';
    console.log('Redirect to home');
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
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
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
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
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

  const tableData1 = [
    {
      key: '1',
      Title: 'Iron Man',
      Director: 'Jon Favreau',
      Cast: 'Robert Downey Jr, Jon Favreau, Gwyneth Paltrow, Stan Lee',
      ReleaseYear: 2008,
    },
    {
      key: '2',
      Title: 'The Incredible Hulk',
      Director: 'Louis Leterrier',
      Cast: 'Edward Norton, Lou Ferrigno, Tim Roth, Liov Tyler',
      ReleaseYear: 2008,
    },
    {
      key: '3',
      Title: 'Iron Man 2',
      Director: 'Jon Favreau',
      Cast: 'Robert Downey Jr, Jon Favreau, Gwyneth Paltrow, Stan Lee, Scarlett Johansson',
      ReleaseYear: 2010,
    },
    {
      key: '4',
      Title: 'Thor',
      Director: 'Taika Waititi',
      Cast: 'Chris Hemsworth,Natalie Portman,Tom Hiddleston,Kat Dennings,Anthony Hopkins,Idris Elba, Jaimie Alexander',
      ReleaseYear: 2011,
    },
    {
      key: '5',
      Title: ' Captain America: The First Avenger',
      Director: 'Joe Johnston',
      Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
      ReleaseYear: 2011,
    },
    {
      key: '6',
      Title: 'Avengers',
      Director: 'Joss Whedon',
      Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
      ReleaseYear: 2012,
    },
  ];

  const tableData2 = [
    {
      key: '1',
      Title: 'Iron Man 3',
      Director: 'Shane Black',
      Cast: 'Robert Downey Jr, Rhodey Rhodes, Bruce Banner',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Thor: The Dark World',
      Director: 'Alan Taylor',
      Cast: 'Chris Hemsworth,Natalie Portman,Tom Hiddleston,Kat Dennings,Anthony Hopkins,Idris Elba, Jaimie Alexander',
      ReleaseYear: 2013,
    },
    {
      key: '3',
      Title: 'Captain America: The Winter Soldier',
      Director: 'Anthony Russo, Joe Russo',
      Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
      ReleaseYear: 2014,
    },
    {
      key: '4',
      Title: 'Guardians of the Galaxy',
      Director: 'James Gunn',
      Cast: 'Peter Quill, Gamora, Rocket, Groot',
      ReleaseYear: 2014,
    },
    {
      key: '5',
      Title: 'Avengers: Age of Ultron',
      Director: 'Joss Whedon',
      Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
      ReleaseYear: 2015,
    },
    {
      key: '6',
      Title: 'Ant-Man',
      Director: 'James Gunn',
      Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
      ReleaseYear: 2014,
    },
    
  ];

  const tableData3 = [
    {
      key: '1',
      Title: 'Iron Man 3',
      Director: 'Shane Black',
      Cast: 'Robert Downey Jr, Rhodey Rhodes, Bruce Banner',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Thor: The Dark World',
      Director: 'Alan Taylor',
      Cast: 'Chris Hemsworth,Natalie Portman,Tom Hiddleston,Kat Dennings,Anthony Hopkins,Idris Elba, Jaimie Alexander',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Captain America: The Winter Soldier',
      Director: 'Anthony Russo, Joe Russo',
      Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
      ReleaseYear: 2014,
    },
    {
      key: '4',
      Title: 'Guardians of the Galaxy',
      Director: 'James Gunn',
      Cast: 'Peter Quill, Gamora, Rocket, Groot',
      ReleaseYear: 2014,
    },
    {
      key: '5',
      Title: 'Avengers: Age of Ultron',
      Director: 'Joss Whedon',
      Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
      ReleaseYear: 2015,
    },
    {
      key: '6',
      Title: 'Ant-Man',
      Director: 'James Gunn',
      Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
      ReleaseYear: 2014,
    },
    
  ];

  const tableData4 = [
    {
      key: '1',
      Title: 'Iron Man 3',
      Director: 'Shane Black',
      Cast: 'Robert Downey Jr, Rhodey Rhodes, Bruce Banner',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Thor: The Dark World',
      Director: 'Alan Taylor',
      Cast: 'Chris Hemsworth,Natalie Portman,Tom Hiddleston,Kat Dennings,Anthony Hopkins,Idris Elba, Jaimie Alexander',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Captain America: The Winter Soldier',
      Director: 'Anthony Russo, Joe Russo',
      Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
      ReleaseYear: 2014,
    },
    {
      key: '4',
      Title: 'Guardians of the Galaxy',
      Director: 'James Gunn',
      Cast: 'Peter Quill, Gamora, Rocket, Groot',
      ReleaseYear: 2014,
    },
    {
      key: '5',
      Title: 'Avengers: Age of Ultron',
      Director: 'Joss Whedon',
      Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
      ReleaseYear: 2015,
    },
    {
      key: '6',
      Title: 'Ant-Man',
      Director: 'James Gunn',
      Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
      ReleaseYear: 2014,
    },
    
  ];

  const tableData5 = [
    {
      key: '1',
      Title: 'Iron Man 3',
      Director: 'Shane Black',
      Cast: 'Robert Downey Jr, Rhodey Rhodes, Bruce Banner',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Thor: The Dark World',
      Director: 'Alan Taylor',
      Cast: 'Chris Hemsworth,Natalie Portman,Tom Hiddleston,Kat Dennings,Anthony Hopkins,Idris Elba, Jaimie Alexander',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Captain America: The Winter Soldier',
      Director: 'Anthony Russo, Joe Russo',
      Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
      ReleaseYear: 2014,
    },
    {
      key: '4',
      Title: 'Guardians of the Galaxy',
      Director: 'James Gunn',
      Cast: 'Peter Quill, Gamora, Rocket, Groot',
      ReleaseYear: 2014,
    },
    {
      key: '5',
      Title: 'Avengers: Age of Ultron',
      Director: 'Joss Whedon',
      Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
      ReleaseYear: 2015,
    },
    {
      key: '6',
      Title: 'Ant-Man',
      Director: 'James Gunn',
      Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
      ReleaseYear: 2014,
    },
    
  ];

  const tableData6 = [
    {
      key: '1',
      Title: 'Iron Man 3',
      Director: 'Shane Black',
      Cast: 'Robert Downey Jr, Rhodey Rhodes, Bruce Banner',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Thor: The Dark World',
      Director: 'Alan Taylor',
      Cast: 'Chris Hemsworth,Natalie Portman,Tom Hiddleston,Kat Dennings,Anthony Hopkins,Idris Elba, Jaimie Alexander',
      ReleaseYear: 2013,
    },
    {
      key: '2',
      Title: 'Captain America: The Winter Soldier',
      Director: 'Anthony Russo, Joe Russo',
      Cast: 'Chris Evans,Hayley Atwell,Sebastian Stan,Joe Johnston',
      ReleaseYear: 2014,
    },
    {
      key: '4',
      Title: 'Guardians of the Galaxy',
      Director: 'James Gunn',
      Cast: 'Peter Quill, Gamora, Rocket, Groot',
      ReleaseYear: 2014,
    },
    {
      key: '5',
      Title: 'Avengers: Age of Ultron',
      Director: 'Joss Whedon',
      Cast: 'Scarlett Johansson,Robert Downey Jr,Mark Ruffalo,Chris Evans,Cobie Smulders,Maria Hill,Chris Hemsworth',
      ReleaseYear: 2015,
    },
    {
      key: '6',
      Title: 'Ant-Man',
      Director: 'James Gunn',
      Cast: 'Scott Lann, Hope Van Dyne, Hank Pym, Cassie',
      ReleaseYear: 2014,
    },
    
  ];
  const columns = [
    {
      title: 'Title',
      dataIndex: 'Title',
      key: 'Title',
      width: '30%',
      ...getColumnSearchProps('Title'),
    },
    {
      title: 'Director',
      dataIndex: 'Director',
      key: 'Director',
      width: '20%',
      ...getColumnSearchProps('Director'),
    },
    {
      title: 'Cast',
      dataIndex: 'Cast',
      key: 'Cast',
      ...getColumnSearchProps('Cast'),
    },
    {
      title: 'Release Year',
      dataIndex: 'ReleaseYear',
      key: 'ReleaseYear',
      ...getColumnSearchProps('ReleaseYear'),
      sorter: (a, b) => a.ReleaseYear - b.ReleaseYear,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  return (
    <>
      <Tabs activeKey={activeTabKey} onChange={setActiveTabKey}>
        <TabPane tab="Phase 1" key="1">
          <Table columns={columns} dataSource={tableData1} />
        </TabPane>
        <TabPane tab="Phase 2" key="2">
          <Table columns={columns} dataSource={tableData2} />
        </TabPane>
        <TabPane tab="Phase 3" key="3">
          <Table columns={columns} dataSource={tableData1} />
        </TabPane>
        <TabPane tab="Phase 4" key="4">
          <Table columns={columns} dataSource={tableData4} />
        </TabPane>
        <TabPane tab="Phase 5" key="5">
          <Table columns={columns} dataSource={tableData1} />
        </TabPane>
        <TabPane tab="Phase 6" key="6">
          <Table columns={columns} dataSource={tableData6} />
        </TabPane>
        {/* Add more TabPanes for other tables */}
      </Tabs>
      <div className='Buttons'><Buttons
      onButtonClick={handleButtonClick}
      onDropdownItemClick={handleDropdownItemClick} />
      </div>
      </>
  );
};

export default App;