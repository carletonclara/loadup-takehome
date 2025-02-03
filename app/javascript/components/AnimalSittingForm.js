import React from "react"
import PropTypes from "prop-types"
import { 
  Button, 
  DatePicker, 
  Form, 
  Input, 
  InputNumber, 
  Select,
  Col, 
  Row,
  Typography,
  Modal
} from 'antd';
import dayjs from 'dayjs';

const AnimalSittingForm = (props) => {
  const [form] = Form.useForm();

  return (
    <>
      <Typography.Title level={3}>
          Animal Sitting Request Form
      </Typography.Title>
      <Form
        form={form}
        name="service request"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        initialValues={null}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: 'Please input your first name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your last name!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Animal Name"
          name="animalname"
          rules={[
            {
              required: true,
              message: 'Please input the name of your animal!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
          label="Animal Type"
          name="animaltype"
          rules={[
            {
              required: true,
              message: 'Please select the type of your animal!',
            },
          ]}
        >
          <Select>
            <Select.Option id ="animal_type_dog" value="dog">Dog</Select.Option>
            <Select.Option id ="animal_type_cat" value="cat">Cat</Select.Option>
            <Select.Option id ="animal_type_pig" value="pig">Pig</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
          label="Sitting Duration"
          name="servicehours"
          rules={[
            {
              required: true,
              message: 'Please select an amount of hours between 2 and 8',
            },
          ]}
        >
            <InputNumber 
              suffix="hours" 
              min={2} 
              max={8} 
              style={{ width: '100%' }} 
            />
        </Form.Item>

        <Form.Item 
          label="Date of Service"
          name="servicedate"
          rules={[
            {
              required: true,
              message: 'Please select a date for your request!',
            },
          ]}
        >
          <DatePicker 
            minDate={dayjs().add(1, "day")}
            maxDate={dayjs().add(30, "day")}
            style={{ width: '100%' }}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

AnimalSittingForm.propTypes = {
  greeting: PropTypes.string
};

export default AnimalSittingForm
