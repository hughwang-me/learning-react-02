import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PcHeader extends React.Component {

  constructor(){
    super();
    this.state = {
      current: 'hot'
    };
  }

  render(){
    return(
      <div>
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
             <Menu.Item key="others">
               <Icon type="appstore" /> 其它资讯
             </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }

}
