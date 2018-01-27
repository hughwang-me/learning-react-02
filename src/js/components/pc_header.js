import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

import { Modal, Button } from 'antd';
import { Form, Input, Checkbox } from 'antd';
const FormItem = Form.Item;

class PcHeader extends React.Component {

  constructor(){
    super();
    this.state = {
      current: 'hot',
      loginModalVisible: false,
      isLogin: false,
      user:null
    };
  }

  handleMenuCLick(e){
    console.log('click ', e);
    this.setState({
      current: e.key
    });
    if(e.key === 'login'){
        console.log('click login');
      this.showLoginModal();
    }else {
      console.log('click other');
    }
  }

  showLoginModal(e){
    console.log(e);
    this.setState({
      loginModalVisible: true,
    });
  }

  handleLoginModalOk(e){
    console.log(e);
    this.setState({
      loginModalVisible: false,
    });
  }

  handleLoginModalCanel(e){
    console.log(e);
    this.setState({
      loginModalVisible: false,
    });
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    // this.props.form.validateFields();
  }

  handleLoginSubmit(e){
    console.log('开始登录' , e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('开始登录 err ' , err);
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    console.log('表单数据 用户名: ', this.props.form.getFieldValue('userName'));
    console.log('表单数据 密码: ', this.props.form.getFieldValue('password'));
  

  }

  render(){
    const { getFieldDecorator } = this.props.form;

    const userRegion = this.state.isLogin ?
      <Menu.Item key="login">
         个人中心 退出
      </Menu.Item>
    :
      <Menu.Item key="login">
         登录注册
      </Menu.Item>
    ;

    return(
      <div id='pc_header'>
        <Row>
          <Col span={2}></Col>
          <Col span={4}>
            <a  href="/" className='logo'>
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
               <Icon type="appstore" /> 热点新闻
             </Menu.Item>
             <Menu.Item key="tech">
               <Icon type="mail" /> 科学技术
             </Menu.Item>
             <Menu.Item key="socil">
               <Icon type="setting" /> 社会生活
             </Menu.Item>
             <Menu.Item key="nature">
               <Icon type="appstore" /> 自然人文
             </Menu.Item>
             <Menu.Item key="outside">
               <Icon type="appstore" /> 国外热点
             </Menu.Item>
             <Menu.Item key="play">
               <Icon type="appstore" /> 娱乐体育
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
          <Form onSubmit={this.handleLoginSubmit.bind(this)} className="login-form">
            <FormItem >
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem >
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password" placeholder="Password" />
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

        </Modal>

      </div>
    )
  }

}
export default PcHeader = Form.create()(PcHeader);
