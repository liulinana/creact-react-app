import React from 'react'
import { Form, Button, Table, Row, Col, Input } from 'antd';
import { NavBar, Icon } from 'antd-mobile';
import { Containerization } from '../component/Container';
import { addTodo } from '../redux/actions';
import { ActionCreator } from '../request/Middleware';
import http from '../axios/axios';
import * as QrCode from 'qrcode.react';
import * as Barcode from 'jsbarcode';
import '../style/style.less'
import Zmage from 'react-zmage'
import background from '../images/d9c59dcb17dacafac0aa06510ea23c52.jpg';

const FormItem =  Form.Item;
@Containerization(
    state => ({
        selectsData: state.todos.selectsData,
    })
)
@Form.create()
export default class MockPage extends React.Component {
    // static getDerivedStateFromProps(){}

    state = {
        dataSource: []
    };

    columns = [{
        title: "序号",
        dataIndex: "id"
    },{
        title: "年龄",
        dataIndex: "age"
    },{
        title: "名字",
        dataIndex: "name"
    }];
    /**
     * @条形码barcode
     * @二维码QrCode
     */
    barcode;
    componentDidMount() {
        Barcode(this.barcode, "aa", {
            displayValue: false,
            width: 1,
            height: 35,
            margin: 0,
        })
    }
    handelClick = () => {
        this.props.dispatch(addTodo("ddddddd"))
    };

    getModels = (data) => ActionCreator("ADD_TODO_S",`/api/接口`,'get')();

    handelSearch = () => {
        const vo = {
            id: "fff"
        };
        let id = this.props.form.getFieldValue("id");
        http.get(`/show?id=${id}`, vo).then(
           res => {
               this.setState({
                   dataSource: res.data.record
               });
           }
       )
    };

    handelRedux = () => {
        console.log("withRouter",this.props);
        this.props.dispatch(this.getModels({pageSize:10}))
    };

    render() {
        const { dataSource } = this.state;
        const { getFieldDecorator } = this.props.form;
        const layout = {
            xs: 24,
            sm: 12,
            md: 6
        };
        const formItemLayout = {
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
            },
        };
        return (
                <div>
                    <Form className="container">
                        <Row>
                            <Col {...layout}>
                                <FormItem
                                    label="ID"
                                    {...formItemLayout}
                                    hasFeedback
                                >
                                    {getFieldDecorator("id",{
                                        initialValue: ""
                                    })(
                                        <Input/>
                                    )}
                                </FormItem>
                            </Col>
                            <div style={{float: 'right', marginBottom: 20 }}>
                                <Button
                                    type="primary"
                                    style={{width: 100}}
                                    onClick={
                                        () => {
                                            this.setState({
                                                    pageNum:1,
                                                },
                                                () => this.handelSearch()
                                            )
                                        }
                                    }
                                >
                                    查询
                                </Button>
                            </div>
                        </Row>
                    </Form>
                    <div style={{margin: "15px 20px"}}>
                        <Table
                            columns={this.columns}
                            dataSource={dataSource}
                            pagination={false}
                            scroll={{ y: 340 }}
                            rowKey={record => record.id}
                        />
                    </div>
                    <Button onClick={this.handelRedux}>redux异步</Button>
                    <Button onClick={this.handelClick}>dispatch</Button>
                    <p>{this.props.selectsData}</p>
                    <QrCode value={"aa"} size={120} />
                    <div className="barcode-box">
                        <svg
                            ref={ref => {
                                this.barcode = ref
                            }}
                        />
                    </div>
                    <div style={{width: 100, height: 100, overflow: "hidden", margin: '40px 0'}}>
                        <Zmage src={background} alt="图片介绍文字"/>
                    </div>
                    <p>h5应用</p>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >NavBar</NavBar>
                </div>
        )
    }
}

