import React from "react";
import { Button } from "antd";
import "./Home.css";
import logo from "./../../logo.svg";
import { Card } from 'antd';
import { Table, Space } from 'antd';
import { Progress } from 'antd';

const Home = ({ menu }) => {
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: text => <a>{text}</a>
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount'
        },
        {
            title: 'Activity',
            dataIndex: 'activity',
            key: 'activity'
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
            amount: 30000,
            activity: 'You entered a 30000 prophet pool'
        },
        {
            key: '1',
            date: '13/04/2020',
            amount: 302,
            activity: 'You earned a 12000 prophet in interest from staking'
        },
        {
            key: '1',
            date: '13/04/2019',
            amount: -1000,
            activity: 'You entered a shark pool'
        }
    ];
    return (
        <div>
            <div style={{ display: 'flex', marginTop: '2em', fontSize: '1.4em' }}> <b>Lifetime Earnings</b></div>
            <Card style={{ marginTop: '0.em', boxShadow: '0 8px 6px -6px black', backgroundColor: '#c0f0c0', height: '6em' }}>
                <div style={{ fontSize: '2em', marginLeft: '0.3em' }}> <img src={logo} className="logo" alt="logo"/>  <b>30,000</b> <span style={{ fontSize: '0.6em' }}> &nbsp; Lifetime won</span> </div>
            </Card>

            <div style={{ marginTop: '4em', fontSize: '1.4em' }}> <b>Yield Pools</b></div>

            <div className="yield-pools" style={{ marginBottom: '4em', display: 'flex' }}>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-begginer">
                    <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Begginer Pool</b></div>
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '20em', width: '18em', marginRight: '2em' }}>
                        <span style={{ fontSize: '2em', margin: 'auto' }}>50,000</span>
                        <p>50 wallets</p>

                        <div style={{ color: 'green', fontSize: '1em' }}> <b>1200 to win</b></div>
                        <div style={{ fontSize: '1em' }}> <b>1000 to enter</b></div>
                        <div style={{ fontSize: '0.8em' }}>80% chance</div>
                        <div style={{ color: '#FF1593', fontSize: '1em', marginTop: '1.4em' }}> <b>Last chance! Filling Up!</b></div>

                        <Button type="primary" shape="round" style={{ backgroundColor: 'grey', width: '6em', marginTop: '1em' }} size={'large'}>
          Join
                        </Button>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-shark">
                    <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Shark Pool</b></div>
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '20em', width: '18em', marginRight: '2em' }}>
                        <span style={{ fontSize: '2em', margin: 'auto' }}>500,000</span>
                        <p>50 wallets</p>

                        <div style={{ color: 'green', fontSize: '1em' }}> <b>1200 to win</b></div>
                        <div style={{ fontSize: '1em' }}> <b>1000 to enter</b></div>
                        <div style={{ fontSize: '0.8em' }}>70% chance</div>
                        <div style={{ color: '#FF1593', fontSize: '1em', marginTop: '1.4em' }}> <b>Last chance! Filling Up!</b></div>

                        <Button type="primary" shape="round" style={{ backgroundColor: 'grey', alignItems: 'center', width: '6em', marginTop: '1em' }} size={'large'}>
          Join
                        </Button>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-bigmoney">
                    <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Big Money Pool</b></div>
                    <Card title="Exclusive" style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '20em', width: '18em' }}>
                        <span style={{ fontSize: '1.8em', margin: 'auto' }}>500,000</span>
                        <p>50 wallets</p>

                        <div style={{ color: 'green', fontSize: '1em' }}> <b>1200 to win</b></div>
                        <div style={{ fontSize: '1em' }}> <b>1000 to enter</b></div>
                        <div style={{ fontSize: '0.8em' }}>40% chance</div>

                        <Button type="primary" shape="round" style={{ backgroundColor: 'grey', width: '6em', marginTop: '1em' }} size={'large'}>
          Join
                        </Button>
                    </Card>
                </div>
            </div>

            <div style={{ marginTop: '2em', fontSize: '1.4em' }}> <b>Staking</b></div>

            <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '18em', width: '58em' }}>
                <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Earn while you stake</b></div>
                <div style={{ fontSize: '1em' }}> <b>8% APY for a limited time only</b></div>
                <div style={{ fontSize: '1em' }}> Current round of staking ends on 05/02/2021</div>
                <Progress class="bla" style={{ marginTop: '2em' }} status="exception" percent={65} showInfo={false} />

                <Button type="primary" shape="round" style={{ backgroundColor: 'grey', width: '6em', marginTop: '2em' }} size={'large'}>
          Stake
                </Button>
            </Card>

            <div style={{ marginTop: '2em', fontSize: '1.4em' }}> <b>Your Activity</b></div>
            <Table style={{ width: '100em' }} columns={columns} dataSource={data} />
        </div>


    );
};

export default Home;
