import React, {Component} from 'react'
import { Form, Input, Button, notification, Icon, message, Row, Col } from 'antd'
import createHistory from 'history/createHashHistory'

const FormItem = Form.Item;
const history = createHistory();

@Form.create()
export default class Login extends Component {
    static getDerivedStateFromProps(){
        console.log(1)
    }



    render() {
        console.log(2)
        const { form } = this.props;
        return (
                <div stylename="box">
                    <p>小仙女才能登陆的系统</p>
                </div>
        )
    }
}

