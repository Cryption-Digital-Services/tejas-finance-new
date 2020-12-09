import React, { useState } from 'react';
import { Layout } from 'antd';
import TopicMenu from './components/TopicMenu';
import Home from './components/Home/Home';
import YieldPools from './components/YieldPools/YieldPools';
import Logo from './components/Logo/ProphetLogo';

import Marqueec from './components/Marquee/Marquee';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { HomeFilled, DollarCircleFilled, LockFilled, UnorderedListOutlined, BankFilled } from "@ant-design/icons";

function App () {
    // const topics = ['Home', 'YieldPools', 'Staking', 'Auction', 'History'];
    const topics = [{ name: '', icon: <Logo/>, link: 'home' }, { name: 'Home', icon: <HomeFilled/>, link: 'home' }, { name: 'Prophet Pools', icon: <DollarCircleFilled />, link: 'prophetPools' }, { name: 'Staking', icon: <LockFilled/>, link: 'staking' }, { name: 'Auction', icon: <BankFilled />, link: 'auction' }, { name: 'Activity', icon: <UnorderedListOutlined />, link: 'activity' }];
    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState('0');

    const changeSelectedKey = event => {
        const key = event.key;
        console.log(key);
        console.log(event);
        console.log(typeof key);
        if (key === '0') {
            console.log('hi');
            setSelectedKey(1);
        }
        setSelectedKey(key);
        setContentIndex(+key);
    };
    const Menu = (
        <TopicMenu
            topics={topics}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );
    console.log(contentIndex);
    return (
        <Router>
            <div className="App">
                <NavBar menu={Menu} />
                <Layout>
                    <SideBar menu={Menu} />
                    <Layout.Content className="content">
                        <Marqueec />
                        <Switch>
                            <Route exact path="/">
                                {<Redirect to="/home" />}
                            </Route>
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/prophetPools" component={YieldPools} />
                        </Switch>
                    </Layout.Content>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
