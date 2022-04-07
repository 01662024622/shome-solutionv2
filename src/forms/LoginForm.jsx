import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function LoginForm() {
  return (
    <>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          autoComplete="off"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Câu trả lời của bạn...',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mật khẩu"
          autoComplete="off"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Ghi nhớ mật khẩu</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Quên mật khẩu
        </a>
      </Form.Item>
    </>
  );
}
