import React from 'react';
import { Table, Typography } from 'antd';
import dayjs from 'dayjs';
import PageHeader from './PageHeader';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Animal Name',
    dataIndex: 'animal_name',
    key: 'animal_name',
  },
  {
    title: 'Animal Type',
    dataIndex: 'animal_type',
    key: 'animal_type',
  },
  {
    title: 'Service Hours',
    dataIndex: 'service_hours',
    key: 'service_hours',
  },
  {
    title: 'Service Date',
    dataIndex: 'service_date',
    key: 'service_date',
    render: (_, record) => (
        <span>{dayjs(record.service_date).format('MM/DD/YYYY')}</span>
    ),
  },
  {
    title: 'Service Cost',
    dataIndex: 'service_cost',
    key: 'service_cost',
    render: (_, record) => (
        <span>${record.service_cost}</span>
    ),
  }
];

const Bookings = (props) => {
  return (
      <>
        <PageHeader />
        <Typography.Title level={3}>
            Animal Sitting Requests
        </Typography.Title>
        <Table columns={columns} dataSource={props.bookings} />
      </>
  )
}


export default Bookings
