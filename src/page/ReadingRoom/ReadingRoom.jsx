import React, { Component } from 'react';
import { Form, Button } from 'antd';

@Form.create()

export default class ReadingRoom extends Component {

    state = {};

    handelClick = () => {
        this.props.history.push('/frame')
    };

    render () {
        return (
            <div>
                <Button onClick={this.handelClick}>系统页面</Button>
            </div>
        )
    }

}