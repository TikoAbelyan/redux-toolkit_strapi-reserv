import React from "react";
import { Button, Checkbox, Form, Input, notification } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useNavigate } from "react-router";
import { AlertMessage } from "./Alert";

const Login = () => {
  const user = useSelector((state: RootState) => state.oauth);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    if (
      values.username === user.value[0].username &&
      values.password === user.value[0].password
    ) {
      notification.open({
        message: AlertMessage({ type: "success", message: "Login success" }),
      });
      navigate("/reservation");
    } else {
      notification.open({
        message: AlertMessage({
          type: "warning",
          message: "Login/Password not exist",
        }),
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="wraper-login">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
