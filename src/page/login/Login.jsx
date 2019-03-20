import React, { Component } from 'react';
import { Form, Input, Button, message, Row, Col, Icon } from 'antd';
import './Login.less';
import { isAuthenticated, setCurrentLoginUser } from '../../component/Container';
import background from '../../images/d9c59dcb17dacafac0aa06510ea23c52.jpg';
import http from '../../axios/axios';

const FormItem = Form.Item;
const loginStyle = {
    background:`url(${background})`,
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    height: document.body.offsetHeight
}
@Form.create()
export default class Login extends Component {
    // static getDerivedStateFromProps(){}

    state = {
        status: "Log in",
        register: "register now!",
        forgotPassword: 'Forgot password',
        msgPassword: "Password"
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const  { loginName, passwd, email, nickname } = this.props.form.getFieldsValue();
        const { status } = this.state;
        const res = {
            loginname:loginName,
            loginpw:passwd,
            email,
            nickname
        };
        const param = {
            loginName,
            passwd,
            email,
            nickname
        };
        this.props.form.validateFields((err) => {
            if (!err) {
                if(this.state.status === "Log in"){
                    setCurrentLoginUser(param)
                }
                if(status === "Log in"){
                    // http.post(`/princess/login`,param).then(
                    //     res => {
                    //
                    //     }
                    // )
                }else if(status === "register now!"){
                    // http.post(`/princess/register`,res).then(
                    //     res => {
                    //
                    //     }
                    // )
                }else{
                    // http.get(`/princess/getuserinfo?loginName=${loginName}&passwd=${passwd}&email=${email}&nickname=${nickname}`).then(
                    //     res => {
                    //
                    //     }
                    // )
                }
                if (loginName === '123' && passwd === '123') {
                    // 表单的路由处理
                    if(isAuthenticated()) {
                        this.props.history.push('/read')
                        message.success("登陆成功!");
                    }

                } else if (loginName === '123' && passwd !== '123') {
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
            this.setState({
                status:"register",
                register:"Log in",
                msgPassword:"Password"
            })
        }else{
            this.setState({
                status:"Log in",
                register:"register now!",
                msgPassword:"Password",
                forgotPassword: 'Forgot password'
            })
        }
    };

    handelPassword = () => {
        this.props.form.resetFields();
        this.setState({
            status:"reset password",
            register:"Log in",
            forgotPassword: "",
            msgPassword:"newPassword"
        })
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
                <div style={loginStyle}>
                    <div className="box">
                        <p>小仙女才能登陆的系统</p>
                        <br/>
                        <div className="loginWrap">
                            <Form className="login-form" onSubmit={this.handleSubmit}>
                                <FormItem>
                                    {getFieldDecorator('loginName', {
                                        rules: [{ required: true, message: '请输入用户名!' }],
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Username"
                                        />
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('passwd', {
                                        rules: [{ required: true, message: status === "reset password"?"请输入新密码!":"请输入密码!" }],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            type="password" placeholder={msgPassword}
                                        />,
                                    )}
                                </FormItem>
                                {
                                    status === "Log in" ?null: status !== "register" ?
                                        <FormItem>
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: '请输入邮箱!' },
                                                    { validator: this.regType}
                                                ],
                                            })(
                                                <Input
                                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="email" placeholder="Email"
                                                />,
                                            )}
                                        </FormItem>
                                        :
                                        <div>
                                            <FormItem>
                                                {getFieldDecorator('email', {
                                                    rules: [{ required: true, message: '请输入邮箱!' },
                                                        { validator: this.regType}
                                                    ],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        placeholder="Email"
                                                    />,
                                                )}
                                            </FormItem>
                                            <FormItem>
                                                {getFieldDecorator('nickname', {
                                                    rules: [{ required: true, message: '请输入昵称!' },
                                                        { validator: this.regType}
                                                    ],
                                                })(
                                                    <Input
                                                        prefix={<Icon type="heart-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                        placeholder="nickname"
                                                    />,
                                                )}
                                            </FormItem>
                                        </div>


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
                                    <Button
                                        type="primary"
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

