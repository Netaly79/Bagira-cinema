import React from 'react';
import { Menu, Icon } from 'antd';
import {Link,NavLink} from 'react-router-dom';

import logo from '../assets/images/logo.png';

export const Header = () => (
    <header>
        <div className="header-container">
            <Link to="/" className="logo">
                <img src={logo} alt ='logo'/>
            </Link>
            <nav className="nav">
                <Menu mode="horizontal" >
                    <Menu.Item key="films" className="filmMenuItem">
                        <NavLink exact to="/"> <Icon type="global" />Фильмы</NavLink>
                    </Menu.Item>
                    <Menu.Item key="schedule">
                        <NavLink to="/schedule"><Icon type="schedule" />Расписание</NavLink>
                    </Menu.Item>
                </Menu>
            </nav>
            <div className="user">
            {/* <Icon type="user"  /> */}
            </div>
        </div>
    </header>
);