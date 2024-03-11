import React from 'react';
import { Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Maincontent.css';

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="avatar-container">
        <Avatar size={64} icon={<UserOutlined />} />
      </div>
      <Link to="/phase1">
        <Card title="PHASE-1" style={{ width: 300, margin: '0 16px 16px 0'}}>
          {/* Content for Table 1 */}
        </Card>
      </Link>
      <Link to="/phase2">
        <Card title="PHASE-2" style={{ width: 300, margin: '0 16px 16px 0' }}>
          {/* Content for Table 2 */}
        </Card>
      </Link>
      <Link to="/phase3">
        <Card title="PHASE-3" style={{ width: 300, margin: '0 16px 16px 0' }}>
          {/* Content for Table 3 */}
        </Card>
      </Link>
      <Link to="/phase4">
        <Card title="PHASE-4" style={{ width: 300, margin: '0 16px 16px 0' }}>
          {/* Content for Table 4 */}
        </Card>
      </Link>
      <Link to="/phase5">
        <Card title="PHASE-5" style={{ width: 300, margin: '0 16px 16px 0' }}>
          {/* Content for Table 5 */}
        </Card>
      </Link>
      <Link to="/phase6">
        <Card title="PHASE-6" style={{ width: 300, margin: '0 16px 16px 0' }}>
          {/* Content for Table 6 */}
        </Card>
      </Link>
    </div>
  );
};

export default MainContent;
