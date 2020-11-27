import React, { useState } from "react";
import { Card } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import JoinPoolDrawer from "../Drawers/JoinPoolDrawer";


const YieldPools = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (

        <div>
            <div className="yield-pools" style={{ marginTop: '2em', marginBottom: '2em', display: 'flex', justifyContent: 'center' }}>

                <div style={{ marginTop: '0.8em' }}>
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '10em', width: '20em', marginRight: '2em', backgroundColor: '#FF5349' }}>
                        <span style={{ fontSize: '5em', marginBottom: '5em', top: '30%' }}> $ <span style={{ fontSize: '0.4em' }}>Yield Pools</span> </span>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '10em', width: '40em', marginRight: '2em' }}>
                        <div style={{ fontSize: '1.5em' }}><b>Your current total inctive yield pools:</b></div>
                        <span style={{ fontSize: '2em' }}> <b>0 PRY</b></span>
                    </Card>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2em' }}>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-begginer">
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '13em', width: '26em' }}>
                        <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Begginer Pool</b></div>
                        <span style={{ fontSize: '1.5em' }}>50,000 total in pool</span>
                        <div style={{ color: 'green', fontSize: '1.5em' }}>1200 jackpot per ante</div>
                        <div onClick={showDrawer} style={{ marginRight: '0em', textAlign: 'right', cursor: 'pointer' }}> <ArrowRightOutlined/> </div>
                        <p>6 wallets in, 2 wallets win</p>
                        <JoinPoolDrawer onClose={onClose} visible={visible}/>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-shark">
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '13em', width: '26em' }}>
                        <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Shark Pool</b></div>
                        <span style={{ fontSize: '1.5em' }}>500,000 total in pool</span>
                        <div style={{ color: 'green', fontSize: '1.5em' }}> 35704 jackpot per ante</div>
                        <div onClick={showDrawer} style={{ marginRight: '0em', textAlign: 'right', cursor: 'pointer' }}> <ArrowRightOutlined/> </div>
                        <p>20 wallets in, 14 wallets win</p>
                        <JoinPoolDrawer onClose={onClose} visible={visible}/>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }} id="yieldpool-card-bigmoney">
                    <Card style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '13em', width: '26em' }}>
                        <div style={{ fontSize: '1.4em', color: '#FF1593' }}> <b>Big Money Pool</b></div>
                        <span style={{ fontSize: '1.4em' }}>500,000 total in pool</span>
                        <div style={{ color: 'green', fontSize: '1.5em' }}> 1200 jackpot per ante</div>
                        <div onClick={showDrawer} style={{ marginRight: '0em', textAlign: 'right', cursor: 'pointer' }}> <ArrowRightOutlined/> </div>
                        <p>20 wallets in, 14 wallets win</p>
                    </Card>
                </div>
            </div>
        </div>


    );
};

export default YieldPools;
