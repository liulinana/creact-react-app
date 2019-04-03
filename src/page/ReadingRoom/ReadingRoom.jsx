import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';

@Form.create()

export default class ReadingRoom extends Component {

    state = {};

    handelClick = () => {
        this.props.history.push('/frame')
    };

    render () {
        const layout = {
            sx: 24,
            sm:12,
            md: 8
        };
        const formLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                md: {
                    span: 8
                },
                sm: {
                    span: 5
                }
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                md: {
                    span: 16
                },
                sm: {
                    span: 19
                }
            }
        };
        return (
            <div>
                <Row>
                    <Col {...layout}>
                        <Form.Item {...formLayout}></Form.Item>
                    </Col>
                </Row>
                <Button onClick={this.handelClick}>系统页面</Button>
            </div>
        )
    }

}