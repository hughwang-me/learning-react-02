import React from 'react';
import ReactDOM from 'react-dom';

import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class MobFooter extends React.Component {

  constructor(){
    super();
    this.state = {
      current: 'hot'
    };
  }

  render(){
    return(
      <div className='footer'>
        <Row>
          <Col span={2}></Col>
          <Col span={20}>
            <span>&copy;&nbsp;Copyright 2018. All Rights Reserved.</span>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    )
  }

}
