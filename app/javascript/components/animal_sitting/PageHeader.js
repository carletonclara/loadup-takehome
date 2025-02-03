import React from "react"
import { Menu, Layout } from 'antd';
const { Header } = Layout;

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

const items = [
    getItem(<a href="http://127.0.0.1:3000/"><span>Home</span></a>, '1'),
    getItem(<a href="http://127.0.0.1:3000/request_form"><span>Request Form</span></a>, '2'),
    getItem(<a href="http://127.0.0.1:3000/bookings"><span>Admin View</span></a>, '3')
  ];

const PageHeader = () => {
  return (
    <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
  );
};
export default PageHeader;