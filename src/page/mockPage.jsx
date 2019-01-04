import React from 'react'
import { Form, Input, Button, notification, Icon, message, Row, Col } from 'antd'
import createHistory from 'history/createHashHistory'
import {Containerization} from '../component/container';
import {addTodo} from '../redux/actions';
import http from '../axios/axios';

const FormItem = Form.Item;
const history = createHistory();
@Containerization(
    state => ({
        selectsData: state.todos.selectsData,
    })
)
@Form.create()
export default class MockPage extends React.Component {
    // static getDerivedStateFromProps(){}

    handelClick = () => {
        http.get(`/rcsapi/jdRisk/find?pageNum=${1}&pageSize=${10}`)
        // this.props.dispatch(addTodo("ddddddd"))
    }
    render() {
        const { form } = this.props;
        return (
                <div stylename="box">
                    <Button onClick={this.handelClick}>dispatch</Button>
                    <p>{this.props.selectsData}</p>
                </div>
        )
    }
}

