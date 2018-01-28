import React from 'react';
import ReactDOM from 'react-dom';

import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import {Modal, Button} from 'antd';
import {Form, Input, Checkbox} from 'antd';

const FormItem = Form.Item;

const confirm = Modal.confirm;

class PcHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            current: 'hot',
            loginModalVisible: false,
            isLogin: false,
            user: null
        };
    }

    handleMenuCLick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
        if (e.key === 'login') {
            console.log('click login');
            this.showLoginModal();
        } else {
            console.log('click 退出');
            this.showLogoutConfirm();
        }
    }

     showLogoutConfirm() {

        confirm({
            title: '你确定要退出吗?',
            content: '将会清空登录信息',
            okText: '退出登录',
            okType: 'danger',
            cancelText: '取消',
            onOk:() => {
                console.log('确认退出');
                localStorage.UserId = '';
                localStorage.NickUserName = '';
                this.setState({
                    isLogin: false
                });
            },
            onCancel: ()=>{
                console.log('取消退出');

            },
        });
    }

    showLoginModal(e) {
        console.log(e);
        this.setState({
            loginModalVisible: true,
        });
    }

    dismissLoginModal() {
        this.setState({
            loginModalVisible: false,
        });
    }

    handleLoginModalOk(e) {
        console.log(e);
        this.setState({
            loginModalVisible: false,
        });
    }

    handleLoginModalCanel(e) {
        console.log(e);
        this.setState({
            loginModalVisible: false,
        });
    }

    handleLoginTabChanged(e) {
        console.log('[handleLoginTabChanged]', e);
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        // this.props.form.validateFields();
    }

    handleLoginSubmit(e) {
        console.log('handleLoginSubmit', e);
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log('开始登录 err ', err);
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        var formData = this.props.form.getFieldsValue();
        console.log('表单数据 用户名: ', formData.l_username);
        console.log('表单数据 密码: ', formData.l_password);

        let url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=login' +
            '&username=' + formData.l_username +
            '&password=' + formData.l_password;
        var fetchOptions = {
            method: 'GET',
            mode: 'cors'
        };
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log('json ', json);
                if(json){
                    this.dismissLoginModal();
                    console.log('登录成功:' , json);
                    localStorage.UserId = json.UserId;
                    localStorage.NickUserName = json.NickUserName;
                    this.setState({
                        isLogin : true
                    });
                }else {
                    this.dismissLoginModal();
                    console.log('登录失败:' , json);
                }
            }).catch(function (error) {
            console.log('err : ', error);
        });

    }

    handleRegisterSubmit(e) {
        e.preventDefault();
        console.log('[handleRegisterSubmit]', e);
        var formData = this.props.form.getFieldsValue();
        console.log('formData : ', formData);

        console.log('r_username : ', this.props.form.getFieldValue('r_username'));
        console.log('r_password : ', this.props.form.getFieldValue('r_password'));
        console.log('r_rpassword : ', this.props.form.getFieldValue('r_rpassword'));

        let url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=register' +
            '&r_userName=' + formData.r_userName +
            '&r_password=' + formData.r_password +
            '&r_confirmPassword' + formData.r_password;
        var fetchOptions = {
            method: 'GET',
            mode: 'cors'
        };
        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log('json ', json);
                if(json){
                    this.dismissLoginModal();
                    console.log('注册成功:' , json);
                }else {
                    this.dismissLoginModal();
                    console.log('注册失败:' , json);
                }
            }).catch(function (error) {
            console.log('err : ', error);
        });
    }

    render() {
        let {getFieldDecorator} = this.props.form;

        console.log('localStorage.UserId : ' , localStorage.UserId);
        console.log('localStorage.NickUserName : ' , localStorage.NickUserName);

        const userRegion = !(localStorage.UserId === '') ?
            <Menu.Item key="logout">
                个人中心 退出
            </Menu.Item>
            :
            <Menu.Item key="login">
                登录注册
            </Menu.Item>
        ;

        return (
            <div id='pc_header'>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className='logo'>
                            <img src='./src/images/logo.png' alt="logo"/>
                            <span>Hugh 新闻网</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu
                            onClick={this.handleMenuCLick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal">
                            <Menu.Item key="hot">
                                <Icon type="appstore"/> 热点新闻
                            </Menu.Item>
                            <Menu.Item key="tech">
                                <Icon type="mail"/> 科学技术
                            </Menu.Item>
                            <Menu.Item key="socil">
                                <Icon type="setting"/> 社会生活
                            </Menu.Item>
                            <Menu.Item key="nature">
                                <Icon type="appstore"/> 自然人文
                            </Menu.Item>
                            <Menu.Item key="outside">
                                <Icon type="appstore"/> 国外热点
                            </Menu.Item>
                            <Menu.Item key="play">
                                <Icon type="appstore"/> 娱乐体育
                            </Menu.Item>
                            {userRegion}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>

                <Modal
                    title="登录/注册"
                    visible={this.state.loginModalVisible}
                    onOk={this.handleLoginModalOk.bind(this)}
                    onCancel={this.handleLoginModalCanel.bind(this)}
                >
                    <Tabs defaultActiveKey="1" onChange={this.handleLoginTabChanged.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form onSubmit={this.handleLoginSubmit.bind(this)} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('l_username', {
                                        rules: [{required: true, message: 'Please input your username!'}],
                                    })(
                                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                               placeholder="用户名"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('l_password', {
                                        rules: [{required: true, message: 'Please input your Password!'}],
                                    })(
                                        <Input
                                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                            type="password" placeholder="密码"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Checkbox>记住登录状态</Checkbox>
                                    <a id="login-form-forgot" href="">忘记密码</a>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        登录
                                    </Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            <Form onSubmit={this.handleRegisterSubmit.bind(this)} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('r_username')(
                                        <Input placeholder="用户名"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('r_password')(
                                        <Input placeholder="密码"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('r_rpassword')(
                                        <Input placeholder="重复密码"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        注册
                                    </Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>

            </div>
        )
    }

}

export default PcHeader = Form.create()(PcHeader);
