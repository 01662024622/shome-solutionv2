import React from 'react';
import { Form, Input, Select } from 'antd';
import SelectAsync from '@/components/SelectAsync';
import AutoCompleteAsync from '@/components/AutoCompleteAsync';

export default function AdminForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="Nhân viên"
        name="employee"
        rules={[
          {
            required: true,
            message: 'This Field is required',
          },
        ]}
      >
        <AutoCompleteAsync
          entity={'employee'}
          displayLabels={['name', 'surname']}
          searchFields={'name,surame'}
        />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <SelectAsync entity={'role'} displayLabels={['displayName']}></SelectAsync>
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Hãy nhập Email!',
          },
        ]}
      >
        <Input autoComplete="off" />
      </Form.Item>
      {!isUpdateForm && (
        <Form.Item
          label="Mật Khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: 'Hãy nhập mật khẩu!',
            },
          ]}
        >
          <Input type="password" autoComplete="off" />
        </Form.Item>
      )}
    </>
  );
}
