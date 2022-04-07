import React from 'react';
import { Button, Form, Input } from 'antd';

export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Công ty"
        name="company"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Họ"
        name="managerSurname"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Tên"
        name="managerName"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
          label="SĐT"
          name="phone"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Email không hợp lê!',
          },
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
