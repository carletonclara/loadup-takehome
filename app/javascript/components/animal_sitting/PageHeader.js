import React from "react";
import { Menu } from 'antd';

function getItem(label, key) {
    return {
      key,
      label,
    };
  }

const getUrl = (path) => {
  const baseUrl = "http://localhost:3000/";
  return baseUrl + path;
}

const items = [
    getItem(<a href={getUrl("")}><span>Home</span></a>, '1'),
    getItem(<a href={getUrl("request_form")}><span>Request Form</span></a>, '2'),
    getItem(<a href={getUrl("bookings")}><span>Admin View</span></a>, '3')
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