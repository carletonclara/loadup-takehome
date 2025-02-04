import React from "react"
import { Menu } from 'antd';

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
      <Menu
        theme="light"
        mode="horizontal"
        items={items}
      />
  );
};
export default PageHeader;