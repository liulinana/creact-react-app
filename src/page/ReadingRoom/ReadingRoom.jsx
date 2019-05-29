import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'antd';

const THREE = require('three');

@Form.create()

export default class ReadingRoom extends Component {

    state = {};

    handelClick = () => {
        this.props.history.push('/frame')
    };

    threeStart = () => {
        let aa = new THREE.Vector3();
        aa.set(4,8,9);
        let scene = new THREE.Scene();// 场景

        let camera = new THREE.PerspectiveCamera(405, window.innerWidth/window.innerHeight, 0.1, 1000);//透视相机

        let renderer = new THREE.WebGLRenderer();//渲染器

        renderer.setSize(window.innerWidth, window.innerHeight);

        document.body.appendChild(renderer.domElement);
        let geometry = new THREE.CubeGeometry(1,1,1);//是一个正方体或者长方体，究竟是什么，由它的3个参数所决定
        let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
        let cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 5;
        function render() {
            requestAnimationFrame(render);
            cube.rotation.x += 0.1;
            cube.rotation.y += 0.1;
            renderer.render(scene, camera);
        }//实时渲染
        render();
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
                {/*<div onload={this.threeStart()}>*/}
                {/*</div>*/}
            </div>
        )
    }
}
