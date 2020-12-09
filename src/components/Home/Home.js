import React from 'react';
import { Button } from 'antd';
import './Home.css';
import logo from './../../logo.svg';
import { Card } from 'antd';
import { Table, Space } from 'antd';
import { Progress } from 'antd';

const Home = () => {
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
                        style: { color: value > 0 ? "green" : "red" }
                    },
                    children: <div>{value}</div>
                };
            }
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: text => <a>{text}</a>
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>See Details</a>
                </Space>
            )
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
        <div>
            <div style={{ display: 'flex', marginTop: '2em', fontSize: '1.4em' }}>
                <Card
                    bordered = {false}
                    style={{
                        marginTop: '0.4em',
                        boxShadow: '0 8px 6px -6px black',
                        backgroundColor: '#162b51',
                        height: '12em',
                        width: '25em',
                        borderRadius: '1em'
                    }}
                >
                    <div style={{ marginLeft: '0.3em' }}>
                        {' '}
                        <div style={{ color: '#ff005c', fontSize: '1.5em' }}> Lifetime earnings </div>
                        <img src={logo} style={{ marginBottom: '1.2em' }} className="logo" alt="logo" />
                        <text style={{ color: '#ff005c', fontSize: '3em' }}> <b>30,000</b></text>
                        <span style={{ fontSize: '0.6em' }}>
                            {' '}
                            <p style={{ marginLeft: '0.8em', color: '#5e6d87', fontSize: '1.8em' }}>Lifetime won</p>
                        </span>{' '}
                    </div>
                </Card>

                <Card
                    bordered = {false}
                    style={{
                        marginLeft: '2em',
                        marginTop: '0.4em',
                        boxShadow: '0 8px 6px -6px black',
                        height: '12em',
                        width: '40em',
                        backgroundColor: '#162b51',
                        borderRadius: '1em'
                    }}
                >
                    <div style={{ fontSize: '1.2em', color: '#ff005c' }}>
                        {' '}
                        <b>Earn while you stake</b>
                    </div>
                    <div style={{ fontSize: '0.8em', color: '#bdc2cd' }}>
                        {' '}
                        <b>8% APY for a limited time only</b>
                    </div>
                    <div style={{ fontSize: '1em', color: '#66738c' }}>
                        {' '}
          Current round of staking ends on 05/02/2021
                    </div>
                    <Progress
                        class="bla"
                        // style={{ marginTop: '2em' }}
                        status="exception"
                        percent={65}
                        showInfo={false}
                    />

                    <Button
                        type="primary"
                        shape="round"
                        style={{ background: 'linear-gradient(to right, #ff756d, #ff1a60)', marginTop: '0.7em' }}
                        size={'small'}
                    >
          Stake
                    </Button>
                </Card>
            </div>

            <div style={{ marginTop: '4em', fontSize: '1.4em', color: 'white' }}>
                {' '}
                <b>Prophet Pools</b>
            </div>

            <div
                className="yield-pools"
                style={{ marginBottom: '4em', display: 'flex' }}
            >
                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-begginer">
                    <Card
                        bordered={false}
                        style={{
                            marginTop: '0.4em',
                            boxShadow: '0 8px 6px -6px black',
                            height: '20em',
                            width: '18em',
                            marginRight: '2em',
                            backgroundColor: '#162b51',
                            borderRadius: '1em'
                        }}
                    >
                        <div style={{ color: '#ff005c', fontSize: '1em' }}> <b> Beginner Pool </b> </div>
                        <img src={logo} style={{ marginBottom: '0.5em' }} className="logo" alt="logo" />
                        <text style={{ color: 'white', fontSize: '1.5em' }}> <b>50,000</b></text>
                        <p style={{ color: '#5e6d87', fontSize: '1.2em' }}>50 wallets</p>


                        <div style={{ color: 'green', fontSize: '1em' }}>
                            {' '}
                            <b>1200 to win</b>
                        </div>
                        <div style={{ fontSize: '1em' }}>
                            {' '}
                            <b>1000 to enter</b>
                        </div>
                        <div style={{ fontSize: '0.8em' }}>80% chance</div>
                        <div
                            style={{ color: '#ff005c', fontSize: '1em', marginTop: '1.4em' }}
                        >
                            <b>Last chance! Filling Up!</b>
                        </div>

                        <Button
                            type="primary"
                            shape="round"
                            style={{
	                            background: 'linear-gradient(to right, #ff756d, #ff1a60)',
                                width: '6em',
                                marginTop: '1em'
                            }}
                            size={'small'}
                        >
              Join
                        </Button>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-shark">
                    <Card
                        bordered={false}
                        style={{
                            marginTop: '0.4em',
                            boxShadow: '0 8px 6px -6px black',
                            height: '20em',
                            width: '18em',
                            marginRight: '2em',
                            backgroundColor: '#162b51',
                            borderRadius: '1em'
                        }}
                    >
                        <div style={{ color: '#ff005c', fontSize: '1em' }}>  <b> Shark Pool </b> </div>

                        <img src={logo} style={{ marginBottom: '0.5em' }} className="logo" alt="logo" />
                        <text style={{ color: 'white', fontSize: '1.5em' }}> <b>500,000</b></text>
                        <p style={{ color: '#5e6d87', fontSize: '1.2em' }}>20 wallets</p>
                        <div style={{ color: 'green', fontSize: '1em' }}>
                            {' '}
                            <b>1200 to win</b>
                        </div>
                        <div style={{ fontSize: '1em' }}>
                            {' '}
                            <b>1000 to enter</b>
                        </div>
                        <div style={{ fontSize: '0.8em' }}>70% chance</div>
                        <div
                            style={{ color: '#ff005c', fontSize: '1em', marginTop: '1.4em' }}
                        >
                            {' '}
                            <b>Last chance! Filling Up!</b>
                        </div>

                        <Button
                            type="primary"
                            shape="round"
                            style={{
	                            background: 'linear-gradient(to right, #ff756d, #ff1a60)',
                                alignItems: 'center',
                                width: '6em',
                                marginTop: '1em'
                            }}
                            size={'small'}
                        >
              Join
                        </Button>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-bigmoney">
                    <Card
                        bordered={false}
                        title="i"
                        style={{
                            marginTop: '0.4em',
                            boxShadow: '0 8px 6px -6px black',
                            height: '20em',
                            width: '18em',
                            backgroundColor: '#162b51',
                            borderRadius: '1em'
                        }}
                    >
                        <div style={{ color: '#ff005c', fontSize: '1em' }}> <b> Big money Pool</b>  </div>
                        <img src={logo} style={{ }} className="logo" alt="logo" />
                        <text style={{ color: 'white', fontSize: '1.5em' }}> <b>500,000</b></text>
                        <p style={{ color: '#5e6d87', fontSize: '1.2em' }}>5 wallets</p>
                        <div style={{ color: 'green', fontSize: '1em' }}>
                            {' '}
                            <b>1200 to win</b>
                        </div>
                        <div style={{ fontSize: '1em' }}>
                            {' '}
                            <b>1000 to enter</b>
                        </div>
                        <div style={{ fontSize: '0.8em' }}>40% chance</div>
                        <div
                            style={{ color: '#ff005c', fontSize: '1em', marginTop: '1.4em' }}
                        >
                            {' '}
                            <b>Last chance! Filling Up!</b>
                        </div>
                        <Button
                            type="primary"
                            shape="round"
                            style={{
	                            background: 'linear-gradient(to right, #ff756d, #ff1a60)',
                                width: '6em',
                                marginTop: '1em'
                            }}
                            size={'small'}
                        >
              Join
                        </Button>
                    </Card>
                </div>
            </div>

            <div style={{ marginTop: '2em', marginBottom: '1.5em', fontSize: '1.4em' }}>
                {' '}
                <b style={{ color: 'white' }}>Your Activity</b>
            </div>
            <Table style={{ width: '65em' }} columns={columns} dataSource={data} />
        </div>
    );
};

export default Home;
