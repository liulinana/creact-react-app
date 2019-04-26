import React from 'react'
import { Form, Button } from 'antd';
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

@Containerization(
    state => ({
        selectsData: state.todos.selectsData,
    })
)
@Form.create()
export default class MockPage extends React.Component {
    // static getDerivedStateFromProps(){}

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
       http.get(`/api/接口`)
    };

    handelRedux = () => {
        console.log("withRouter",this.props)
        this.props.dispatch(this.getModels({pageSize:10}))
    };

    render() {
        return (
                <div className="box">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >NavBar</NavBar>
                    <Button onClick={this.handelSearch}>接口</Button>
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
                    <div style={{width: 100, height: 100, overflow: "hidden"}}>
                        <Zmage src={background} alt="图片介绍文字"/>
                    </div>
                </div>
        )
    }
}

