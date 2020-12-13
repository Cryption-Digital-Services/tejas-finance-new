import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './Home.css';
import logo from './../../logo.svg';
import { Card } from 'antd';
import { Table, Space } from 'antd';
import { Progress } from 'antd';
import JoinPoolModal from '../Modals/JoinPoolModal';
import useModal from '../Modals/useModal';

const Home = (account) => {
    const [act, setAccount] = useState(account.account);
    useEffect(() => {
        if (act !== "") {
            setAccount(act);
        }
    }, [act]);

    const { isShowing, toggle } = useModal();

    const columns = [
        {
            title: 'Activity',
            dataIndex: 'activity',
            key: 'activity'
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (value, record) => {
                return {
                    props: {
                        style: { color: value > 0 ? "green" : "#ff005c" }
                    },
                    children: <div>{value}</div>
                };
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Action',
            key: 'action',
            render: (value, record) => {
                return {
                    props: {
                        style: { color: "#ff005c" }
                    },
                    children: <Space size="middle">See Details</Space>
                };
            }
        }
    ];

    const data = [
        {
            key: '1',
            date: '12/02/20',
            amount: -10000,
            activity: 'You entered a 10000 prophet pool'
        },
        {
            key: '2',
            date: '12/02/20',
            amount: 500,
            activity: 'You won 500 prophet from the redemption auction'
        },
        {
            key: '3',
            date: '13/04/2020',
            amount: 302,
            activity: 'You earned 302 prophet in interest from staking'
        },
        {
            key: '4',
            date: '13/04/2019',
            amount: -1000,
            activity: 'You entered a shark pool'
        },
        {
            key: '5',
            date: '13/04/2018',
            amount: -1070,
            activity: 'You entered a shark pool'
        },
        {
            key: '6',
            date: '13/04/2019',
            amount: 300,
            activity: 'You won 300 prophet from the weekly blitz action'
        }
    ];

    return (
        <div style={{ marginLeft: '5em' }}>
            <div style={{ display: 'flex', marginTop: '2em', fontSize: '1.4em' }}>
                <Card
                    bordered = {false}
                    className = "lifetime-earnings"
                    id="lifetime-earnings"
                >
                    <div className="lifetime-earnings-card-content">
                        <div className="lifetime-earnings-header"> Lifetime earnings </div>
                        <img src={logo} className="logo-earnings-card" alt="logo" />
                        <span className="lifetime-earnings-amount"> <b>30,000</b></span>
                        <span className="lifetime-won">
                            <p>Lifetime won</p>
                        </span>
                    </div>
                </Card>

                <Card
                    id = "staking-card"
                    bordered = {false}
                >
                    <div className="stalking-card-header">
                        Earn while you stake
                    </div>
                    <div className="stalking-card-header-2">
                        <b>8% APY for a limited time only</b>
                    </div>
                    <div className="stalking-card-header-info">
          Current round of staking ends on 05/02/2021
                    </div>
                    <Progress
                        className="progress-bar"
                        status="exception"
                        percent={65}
                        showInfo={false}
                    />

                    <Button
                        type="primary"
                        shape="round"
                        id="staking-button"
                        size={'small'}
                    >
          Stake
                    </Button>
                </Card>
            </div>

            <div id="prophet-pool-title">
                <b>Prophet Pools</b>
            </div>

            <div
                className="yield-pools"
                style={{ marginBottom: '4em', display: 'flex' }}
            >
                <div style={{ marginTop: '0.8em' }}>
                    <Card
                        bordered={false}
                        id="yieldpool-card"
                    >
                        <div className="yieldpool-header"> <b> Beginner Pool </b> </div>
                        <img src={logo} className="logo-yieldpool-card" alt="logo" />
                        <text className="yieldpool-amount"> <b>50,000</b></text>
                        <p className="wallets-number-yieldpool">50 wallets</p>
                        <div className="yieldpool-to-win">
                            <b>1200 to win</b>
                        </div>
                        <div className="yieldpool-enter-amount">
                            <b>1000 to enter</b>
                        </div>
                        <div className="yieldpool-chance"> 80% chance</div>
                        <div className="yieldpool-warning">
                            <b>Last chance! Filling Up!</b>
                        </div>

                        <Button
                            type="primary"
                            shape="round"
                            id="staking-button"
                            onClick={toggle}
                            size={'small'}
                        >
              Join
                        </Button>
                        <JoinPoolModal isShowing={isShowing} hide={toggle}/>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-shark">
                    <Card
                        bordered={false}
                        id="yieldpool-card"
                    >
                        <div className="yieldpool-header"> <b> Shark Pool </b> </div>

                        <img src={logo} className="logo-yieldpool-card" alt="logo" />
                        <text className="yieldpool-amount"> <b>500,000</b></text>
                        <p className="wallets-number-yieldpool">20 wallets</p>
                        <div className="yieldpool-to-win">
                            <b>1200 to win</b>
                        </div>
                        <div className="yieldpool-enter-amount">
                            <b>1000 to enter</b>
                        </div>
                        <div className="yieldpool-chance">70% chance</div>
                        <div className="yieldpool-warning" >
                            <b>Last chance! Filling Up!</b>
                        </div>

                        <Button
                            type="primary"
                            shape="round"
                            onClick={toggle}
                            id="staking-button"
                            size={'small'}
                        >
              Join
                        </Button>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-bigmoney">
                    <Card
                        bordered={false}
                        id="yieldpool-card"
                        title="placeholder-title"
                    >
                        <div className="yieldpool-header"> <b> Big money Pool</b>  </div>
                        <img src={logo} className="logo-yieldpool-card" alt="logo" />
                        <text className="yieldpool-amount"> <b>500,000</b></text>
                        <p className="wallets-number-yieldpool">5 wallets</p>
                        <div className="yieldpool-to-win">
                            <b>1200 to win</b>
                        </div>
                        <div className="yieldpool-enter-amount">
                            <b>1000 to enter</b>
                        </div>
                        <div className="yieldpool-chance">40% chance</div>
                        <div className="yieldpool-warning">
                            <b>Last chance! Filling Up!</b>
                        </div>
                        <Button
                            type="primary"
                            shape="round"
                            onClick={toggle}
                            id="staking-button"
                            size={'small'}
                        >
              Join
                        </Button>
                    </Card>
                </div>
            </div>

            <div id="your-activity-title">
                <b style={{ color: 'white' }}>Your Activity</b>
            </div>
            { account.account === "" ?
                <Card bordered={false}
                    id="placeholder-card"
                >
                    <Button
                        type="primary"
                        shape="round"
                        id="staking-button"
                        // style={{
	                    //         background: 'linear-gradient(to right, #ff756d, #ff1a60)',
                        //     marginTop: '1em'
                        // }}
                        size={'medium'}
                    >
                          Connect
                    </Button>

                </Card> :
                <Table id="table" columns={columns} dataSource={data} pagination={false} />}
        </div>
    );
};

export default Home;
