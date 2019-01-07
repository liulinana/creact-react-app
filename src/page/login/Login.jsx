import React from 'react'
import { Form, Input, Button, message, Row, Col } from 'antd'
import './Login.less'

const FormItem = Form.Item;

@Form.create()
export default class Login extends React.Component {
    static getDerivedStateFromProps(){}

    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        this.props.form.validateFields((err) => {
            if (!err) {
                if (n === '123' && p === '123') {
                    // 表单的路由处理
                    message.success("登陆成功!")
                    this.props.history.push('/frame');
                } else if (n === '123' && p !== '123') {
                    message.error("请输入正确的密码！")
                } else {
                    message.error("请输入正确的用户名字！")
                }
            }
        });

    };

    render() {
        console.log(2)
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div stylename="loginpagewrap">
                <div stylename="box">
                    <p>小仙女才能登陆的系统</p>
                    <div stylename="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input placeholder="Username：123" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" placeholder="Password：123" />,
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                            <Row style={{marginTop: 20, marginLeft: 15, color:"#aaaaaa"}}>
                                <Col span={14}>username:123 </Col>
                                <Col span={9}>password:123 </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

