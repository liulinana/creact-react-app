import React from 'react'
import { Form, Button } from 'antd'
import {Containerization} from '../component/container';
import {addTodo} from '../redux/actions';
import http from '../axios/axios';

@Containerization(
    state => ({
        selectsData: state.todos.selectsData,
    })
)
@Form.create()
export default class MockPage extends React.Component {
    // static getDerivedStateFromProps(){}

    handelClick = () => {
        this.props.dispatch(addTodo("ddddddd"))
    };

    handelSearch = () => {
    };

    render() {
        return (
                <div stylename="box">
                    <Button onClick={this.handelSearch}>接口</Button>
                    <Button onClick={this.handelClick}>dispatch</Button>
                    <p>{this.props.selectsData}</p>
                </div>
        )
    }
}

