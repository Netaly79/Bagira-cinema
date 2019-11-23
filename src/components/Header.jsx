import React from 'react';
import { Menu, Icon } from 'antd';

import logo from '../assets/images/logo.png';

export const Header = () => (
    <header>
        <div className="header-container">
            <div className="logo">
                <img src={logo} alt ='logo'/>
            </div>
            <nav className="nav">
                <Menu mode="horizontal" >
                    <Menu.Item key="films" className="filmMenuItem  ant-menu-item-selected">
                        <Icon type="global" />
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="about">
                        <Icon type="eye" />
                        Navigation Two
                    </Menu.Item>
                    <Menu.Item key="schedule">
                        <Icon type="schedule" />
                        Navigation Three
                    </Menu.Item>
                </Menu>
            </nav>
            <div className="user">
            <Icon type="user"  />
            </div>
        </div>
    </header>
);