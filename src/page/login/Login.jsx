import React from 'react';
import { Form, Input, Button, message, Row, Col, Icon } from 'antd';
import './Login.less';
import { isAuthenticated, setCurrentLoginUser } from '../../component/Container';

const FormItem = Form.Item;

@Form.create()
export default class Login extends React.Component {
    // static getDerivedStateFromProps(){}

    state = {
        status: "Log in",
        register: "register now!",
        forgotPassword: 'Forgot password',
        msgPassword: "Password"
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const  { username, password } = this.props.form.getFieldsValue();
        this.props.form.validateFields((err) => {
            if (!err) {
                const res = {
                    username,
                    password
                };
                if(this.state.status === "Log in"){
                    setCurrentLoginUser(res)
                }
                if (username === '123' && password === '123') {
                    // 表单的路由处理
                    if(isAuthenticated()) {
                        this.props.history.push('/frame')
                        message.success("登陆成功!");
                    }

                } else if (username === '123' && password !== '123') {
                    message.error("请输入正确的密码！")
                } else {
                    message.error("请输入正确的用户名字！")
                }
            }
        });

    };

    handelRegister = () => {
        this.props.form.resetFields();
        const { register } = this.state;
        if(register === "register now!"){
            this.setState({status:"register", register:"Log in", msgPassword:"Password"})
        }else{
            this.setState({status:"Log in", register:"register now!", msgPassword:"Password", forgotPassword: 'Forgot password'})
        }

    };

    handelPassword = () => {
        this.props.form.resetFields();
        this.setState({status:"reset password", register:"Log in", forgotPassword: "", msgPassword:"newPassword"})
    };

    regType = (rule, value, callback) => {
        /* eslint-disable */
        const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        /* eslint-enable */
        if (value && value !== '') {
            if (rule.field === "email") {  //身份证号码
                if (!reg.test(value)) {
                    callback('邮箱格式不正确!');
                    return;
                }
            }
        }
        callback();
    };

    render() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        const { status, register, forgotPassword, msgPassword } = this.state;
        return (
                <div className="login">
                    {/*<img src={require("../../images/a19ee33c5a26acf618411a4c96224837.jpg")} />*/}
                    <div className="box">
                        <p>小仙女才能登陆的系统</p>
                        <br/>
                        <div className="loginWrap">
                            <Form className="login-form" onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '请输入用户名!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                               placeholder="Username"
                                        />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: status === "reset password"?"请输入新密码!":"请输入密码!" }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                               type="password" placeholder={msgPassword}
                                        />,
                                    )}
                                </FormItem>
                                {
                                    status === "Log in" ? null :
                                        <FormItem>
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: '请输入邮箱!' },
                                                    { validator: this.regType}
                                                ],
                                            })(
                                                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                       type="email" placeholder="Email"
                                                />,
                                            )}
                                        </FormItem>
                                }
                                <Row>
                                    <Col span={12} style={{textAlign: "left"}}>
                                        <a onClick={this.handelPassword}>{forgotPassword}</a>
                                    </Col>
                                    <Col span={12} style={{textAlign: "right"}}>
                                        <a onClick={this.handelRegister}>{register}</a>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Button type="primary"
                                            htmlType="submit"
                                            className="login-form-button"
                                            style={{width: "100%"}}
                                    >
                                        {status}
                                    </Button>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
        )
    }
}

