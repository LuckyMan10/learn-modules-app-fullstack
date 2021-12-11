import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Styled from 'styled-components';
import React from 'react';

const AuthModal: React.FC = () => {

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
      };

    const StyledForm = Styled.div`
        h1 {
            font-size: 1.9em;
            text-align: center;
        }
        background: white;
        padding: 10px;
        display: flex;
        align-items: center;
        width: 60%;
        flex-direction: column;
        .forms {
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: start;
        }
        .form-wrapper {
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            position: relative;
            form {
              display: flex;
              justify-content: center;
              flex-direction: column;
              width: 80%;
              button[type="submit"] {
                  display: flex;
                  justify-content: center;
                  width: 100%;
              }
            }
        }
        @media (max-width: 1000px) {
            width: 80%;
        }
        @media (max-width: 800px) {
            width: 95%;
        }
        @media (max-width: 600px) {
            h1 {
                font-size: 1.5em;
            }
            .forms {
                flex-direction: column;
            }
        }
        @media (max-width: 400px) {
            .form-wrapper form {
                width: 100%;
            }
        }
    `

    return (
        <StyledForm>
            <h1>Чтобы использовать приложение, нужно зарегистрироваться или авторизоваться.</h1>
            <div className="forms">
            <div className="form-wrapper">
                <h2>Авторизация</h2>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Введите email' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="form-wrapper">
            <h2>Регистрация</h2>
                <Form
                    name="normal_register"
                    className="reg-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Введите email' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Введите пароль' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password_confirm"
                        rules={[{ required: true, message: 'Подтвердите пароль' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Подтвердите пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить меня</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            </div>
        </StyledForm>
    );
}

export {
    AuthModal
}