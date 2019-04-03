import React, { Component } from 'react';
import { Form } from 'antd';

@Form.create()

export default class Error404 extends Component {

    render () {
        return (
            <h1 style={{color: "#6c6f717a",margin: "20% 0 0 28%"}}>
                oh!小主真可怜未找到该页面（404）
            </h1>
        )
    }

}