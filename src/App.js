import { ethers } from "ethers";
// import Helloabi from "./contracts/Hello.json";

import React, { useState, useEffect } from 'react';
import { Layout, Button } from 'antd';
import TopicMenu from './components/TopicMenu';
import Home from './components/Home/Home';
import YieldPools from './components/YieldPools/YieldPools';
import Logo from './components/Logo/ProphetLogo';
import metamaskLogo from './../metamaskLogo.svg';

// import Web3 from "web3";

import Marqueec from './components/Marquee/Marquee';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';
import { HomeFilled, DollarCircleFilled, LockFilled, UnorderedListOutlined, BankFilled } from "@ant-design/icons";

function App () {
    const topics = [{ name: '', icon: <Logo/>, link: 'home' }, { name: 'Home', icon: <HomeFilled/>, link: 'home' }, { name: 'Prophet Pools', icon: <DollarCircleFilled />, link: 'prophetPools' }, { name: 'Staking', icon: <LockFilled/>, link: 'staking' }, { name: 'Auction', icon: <BankFilled />, link: 'auction' }, { name: 'Activity', icon: <UnorderedListOutlined />, link: 'activity' }];
    const [contentIndex, setContentIndex] = useState(0);
    const [selectedKey, setSelectedKey] = useState('0');
    const [refresh, setrefresh] = useState(0);
    const [getNetwork, setNetwork] = useState("");
    const [loading2, setloading2] = useState(false);
    const [account, setAccount] = useState("");
    const [loading, setLoading] = useState(true);
    const [Hello, setHello] = useState({});
    const [SIGNER, setSigner] = useState({});

    const loadWeb3 = async () => {
        if (window.ethereum) {
            await window.ethereum.enable();
        } else {
            console.log("non eth browser detected");
        }
    };

    const loadBlockchainData = async () => {
        setLoading(true);
        if (typeof window.ethereum === "undefined") {
            return;
        }
        console.log(contentIndex);
        console.log(getNetwork);
        console.log(loading);
        console.log(Hello);
        console.log(SIGNER);


        const ethereum = window.ethereum;
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        // let url = window.location.href;
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length === 0) {
            return;
        }
        setAccount(accounts[0]);
        var networkId;
        await provider.getNetwork().then((result) => {
            networkId = result.chainId;
        });
        if (networkId) {
            // set network name here
            setNetwork("Kovan");
            // defining a smart contract ;
            // signer is defined above no need to define again
            // const smartcontract = new Contract( /* address of smart contract*/  , /*  abi of smart contract */, signer);
            let smartcontract;
            setHello(smartcontract);

            // if you want to call data from smart contract follow below
            // suppose there is function in smart contract which returns something

            // await smartcontract
            //   .functioninsmartcontract(accounts[0].toString())
            //   .then((result) => {
            //     console.log("vesting schedule data ", result);
            //   });

            // suppose there is a call function only or a public variable
            // await smartcontract.functioninsmartcontract();

            setLoading(false);
        } else {
            console.log("the contract not deployed to detected network.");
            setloading2(true);
            console.log(loading2);
        }
    };

    const walletAddress = async () => {
        console.log(window.etheruem);
        await window.ethereum.request({
            method: "eth_requestAccounts",
            params: [
                {
                    eth_accounts: {}
                }
            ]
        });
        // window.location.reload();
    };

    useEffect(() => {
        loadWeb3();
        loadBlockchainData();
        if (refresh === 1) {
            setrefresh(0);
            loadBlockchainData();
        }
        //esl
    }, [refresh]);

    const changeSelectedKey = event => {
        const key = event.key;
        if (key === '0') {
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
    return (
        <div>
            (
            <Router>
                <div className="App">
                    <NavBar menu={Menu} />
                    <Layout>
                        <SideBar menu={Menu} />
                        <Layout.Content className="content">
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Marqueec />
                                <Button onClick={walletAddress} type="primary" shape="round" style={{ background: 'linear-gradient(to right, #ff756d, #ff1a60)', width: '9em', marginRight: "1.5em", color: 'white', overflow: 'hidden', fontSize: 'bold' }} size={'medium'}>
                                    <img src={metamaskLogo} style={{ marginRight: '0.4em', fontSize: '0.5em' }} className="logo" alt="logo" /> <b> { account === '' ? 'Connect' : account}</b>
                                </Button>
                            </div>
                            <Switch>
                                <Route exact path="/">
                                    {<Redirect to="/home" />}
                                </Route>
                                <Route
                                    path="/home"
                                    render={() => (
                                        <Home account={account} />
                                    )}
                                />
                                {/* <Route exact path="/home" render={(account) => (<Home {...account}/>)} /> */}
                                <Route exact path="/prophetPools" component={YieldPools} />
                            </Switch>
                        </Layout.Content>
                    </Layout>
                </div>
            </Router>
            )}
        </div>
    );
}

export default App;
