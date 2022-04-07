import React from 'react';
import { Form, Input, Button, Radio, Select, Switch } from 'antd';
import { DatePicker, TimePicker, Calendar } from '@/components/CustomAntd';

export default function EmployeeForm() {
  return (
    <>
      <Form.Item
          label="Tên"
          name="name"
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
          name=""
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
          label="Sinh ngày"
          name="birthday"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <DatePicker format={'DD/MM/YYYY'} />
      </Form.Item>
      <Form.Item
          label="Quê quán"
          name="birthplace"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
          label="Giới tính"
          name="gender"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Select.Option value="men">Nam</Select.Option>
          <Select.Option value="women">Nữ</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
          label="E-mail"
          name="email"
        rules={[
          {
            type: 'email',
            message: 'Email không hợp lệ',
          },
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
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
          label="Phòng ban"
          name="department"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
          label="Vai trò, vị trí"
          name="position"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
          label="Địa chỉ"
          name="address"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
          label="Tình trạng"
          name="state"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
