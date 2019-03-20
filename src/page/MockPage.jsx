import React from 'react'
import { Form, Button } from 'antd'
import { Containerization } from '../component/Container';
import { addTodo } from '../redux/actions';
import { ActionCreator } from '../request/Middleware';
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

    getModels = (data) => ActionCreator("ADD_TODO_S",`/api/接口`,'get')();
    handelSearch = () => {
       http.get(`/api/接口`)
    };

    handelRedux = () => {
        console.log("withRouter",this.props)
        this.props.dispatch(this.getModels({pageSize:10}))
    };

    render() {
        return (
                <div stylename="box">
                    <Button onClick={this.handelSearch}>接口</Button>
                    <Button onClick={this.handelRedux}>redux异步</Button>
                    <Button onClick={this.handelClick}>dispatch</Button>
                    <p>{this.props.selectsData}</p>
                </div>
        )
    }
}

