import React, { useState } from "react"
import { 
  Button,
  Col,
  DatePicker, 
  Form, 
  Input, 
  InputNumber,
  Row,
  Select,
  Typography,
} from 'antd';
import dayjs from 'dayjs';
import PriceCard from "./PriceCard";
import SubmitModal from "./SubmitModal";
import PageHeader from "./PageHeader";

const RequestForm = (props) => {
  const [form] = Form.useForm();
  const [cost, setCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState();

  const onFinish = (values) => {
    values["service_cost"] = cost;
    setFormValues(values);
    showModal();
  };

  const onValuesChange = (changedValues, allValues) => {
    if(updateCost(changedValues, allValues)) {
      calculateCost(allValues).then(function(results){
        setCost(results["service_cost"]);
      });
    }
  }

  const updateCost = (changedValues, allValues) => {
    const updatedOption = ("service_hours" in changedValues || "animal_type" in changedValues);
    const valuesPresent = (allValues["service_hours"] !== undefined && allValues["animal_type"] !== undefined);
    return updatedOption && valuesPresent;
  }

  const calculateCost = async (values) => {
    const url = "calculate_cost"
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(values)
    });
    return request.json();
  }

  const createBooking = async (values) => {
    const url = "create_booking"
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(values)
    });
    return request;
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  
  const handleOk = () => {
    createBooking(formValues).then(function(results){
      if (results.status >= 400) {
        setIsModalOpen(false);
        alert("There was a problem submitting your request. Please try again.");
      } else {
        window.location.href = '/'; //would like to setup react router in the future
      }
    })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <PageHeader />
      <SubmitModal
        isModalOpen={isModalOpen} 
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <Row justify="center">
        <Typography.Title level={3}>
            Animal Sitting Request Form
        </Typography.Title>
      </Row>
      <Row justify="center">
        <Col span={8}>
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
            onFinish={onFinish}
            onValuesChange={onValuesChange}
            initialValues={null}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="first_name"
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
              name="last_name"
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
              name="animal_name"
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
              name="animal_type"
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
              name="service_hours"
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
              name="service_date"
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
        </Col>
        <Col span={4}>
          <PriceCard cost={cost}/>
        </Col>
      </Row>
    </>
  )
}

export default RequestForm
