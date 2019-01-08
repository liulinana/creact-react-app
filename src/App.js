import React, { Component } from 'react';
import { Menu, Icon, Switch, Layout, Row, Col} from 'antd';
import { Route, Link } from "react-router-dom";
import allMenu from '../src/router/Menu';
import Breadcrumbs from "./component/Breadcrumbs";
import { toLogin, isAuthenticated } from './component/Container';

const SubMenu = Menu.SubMenu;
const { Header, Content, Sider: Frame } = Layout;

function RouteWithSubRoutes(route) {
    if(route.children&&route.children.length){
       return route.children.map((v,k)=><Route
            path={`/${v.url}`}
            exact={v.exact}
            component={v.component}
            key={k}
        />)
    }else {
        return (
            <Route
                path={`/${route.url}`}
                exact={route.exact}
                component={route.component}
            />
        )
    }
}

class App extends Component {

    state={
        theme: 'dark',
        current: 'home',
        collapsed: false,
    };

    componentWillMount () {
        if(isAuthenticated()){}
        else{
            this.props.history.push('/')
        }
    }

    //更换主题
    changeTheme = (value) => {
        this.setState({
            theme: value ? 'dark' : 'light',
        });
    };

    handleClick = (e,special) => {
        this.setState({
            current: e.key || special,
        });
    };

    //sider自定义触发器
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    toLogin = () => {
        toLogin();
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header stylename="header">
                        <div>
                            <Row>
                                <Col span={1}>
                                    <p style={{color:"white"}}>主题:</p>
                                </Col>
                                <Col span={1}>
                                    <Switch
                                        checked={this.state.theme === 'dark'}
                                        onChange={this.changeTheme}
                                        checkedChildren="Dark"
                                        unCheckedChildren="Light"
                                    />
                                </Col>
                                <Col span={4}>
                                    <Icon
                                        stylename="trigger"
                                        style={{color:"white",marginLeft:"10%"}}
                                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                        onClick={this.toggle}
                                    />
                                </Col>
                                <div onClick={this.toLogin} style={{marginLeft: '94%'}}>
                                        <Link to={"#"}>
                                            <span style={{color:"white"}}>退出登录</span>
                                            <Icon type="logout" />
                                        </Link>
                                </div>
                            </Row>
                        </div>
                    </Header>
                    <Layout>
                        <Frame width={200}
                               style={{ background: '#fff' }}
                               trigger={null}
                               collapsible
                               collapsed={this.state.collapsed}

                        >
                            <Menu
                                mode="inline"
                                style={{ height: 670, borderRight: 0, overflow: 'scroll', }}
                                theme={this.state.theme}
                                defaultOpenKeys={['']}
                                selectedKeys={[this.state.current]}
                                onClick={this.handleClick}
                            >
                                {
                                    allMenu.map((subMenu) => {
                                        if (subMenu.children && subMenu.children.length) {
                                            return (
                                                <SubMenu key={subMenu.url}
                                                         title={
                                                             <span>
                                                                 <Icon type={subMenu.icon}/>
                                                                 <span>
                                                                     {subMenu.name}
                                                                 </span>
                                                             </span>
                                                         }
                                                >
                                                    {
                                                        subMenu.children.map(menu => (
                                                            <Menu.Item key={menu.url}>
                                                                <Link to={`/${menu.url}`}>{menu.name}</Link>
                                                            </Menu.Item>
                                                        ))
                                                    }
                                                </SubMenu>
                                            )
                                        }
                                        return (
                                            <Menu.Item key={subMenu.url}>
                                                <Link to={`/${subMenu.url}`}>
                                                    <Icon type={subMenu.icon} />
                                                    <span stylename="nav-text">{subMenu.name}</span>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                        </Frame>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <div style={{margin: '15px 0'}}>
                                <Breadcrumbs/>
                            </div>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                    overflow: 'scroll',
                                    position: 'relative'
                                }}
                            >
                                <div>
                                    {allMenu.map((route, i) =>
                                        <RouteWithSubRoutes key={i} {...route} />
                                    )}
                                </div>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
