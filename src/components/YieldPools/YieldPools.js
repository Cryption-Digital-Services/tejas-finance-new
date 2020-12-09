import React, { useState } from "react";
import { Card, InputNumber, Button } from 'antd';
import { RightOutlined } from "@ant-design/icons";
import logo from './../../logo.svg';
import './YieldPools.css';

const YieldPools = () => {
    const [cardDetails, setCardDetails] = useState({ type: 'Join Beginner Pool',
        ante: '70000',
        anteUp: '200,000',
        winNumber: '600,000',
        walletsIn: 8,
        walletsWin: 2,
        winChances: '33% per ante', currentBalance: 49000 });


    const toggleCardsActive = (index) => {
        let cards = document.getElementsByClassName("prophet-card");
        for (let i = 0; i < cards.length; i++) {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            cards[index].className += " active";
        }
    };

    const showBeginnerPoolCard = () => {
        toggleCardsActive(0);
        setCardDetails({
            type: 'Join Beginner Pool',
            ante: '70000',
            anteUp: '200,000',
            winNumber: '600,000',
            walletsIn: 8,
            walletsWin: 2,
            winChances: '33% per ante',
            currentBalance: '49000'
        });
    };

    const showBigMoneyPoolCard = () => {
        toggleCardsActive(2);
        setCardDetails({
            type: 'Join Big Money Pool',
            ante: '94000',
            anteUp: '400,000',
            winNumber: '294,453',
            walletsIn: 4,
            walletsWin: 3,
            winChances: '63% per ante',
            currentBalance: '349000'
        });
    };

    const showSharkPoolCard = () => {
        toggleCardsActive(1);
        setCardDetails({
            type: 'Join Shark Pool',
            ante: '146000',
            anteUp: '100,000',
            winNumber: '144,653',
            walletsIn: 14,
            walletsWin: 4,
            winChances: '83% per ante',
            currentBalance: '749000'
        });
    };

    return (
        <div>
            <div className="yield-pools" style={{ marginTop: '2em', marginBottom: '2em', display: 'flex', justifyContent: 'left' }}>

                <div style={{ marginTop: '0.8em' }}>
                    <Card bordered={false} style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '11em', width: '26em', marginRight: '4em', backgroundColor: '#162b51', textAlign: 'center', verticalAlign: 'middle', lineHeight: '8em', borderRadius: '1em' }}>
                        <span style={{ color: '#ff005c' }}><i style={{ fontSize: '3em', marginRight: '0.3em' }} className="fa fa-usd" aria-hidden="true"/> <span style={{ fontSize: '1.5em' }}> <b>Prophet Pools</b> </span></span>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Card bordered={false} style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', height: '11em', width: '30em', marginRight: '2em', backgroundColor: '#162b51', borderRadius: '1em' }}>
                        <div style={{ fontSize: '1.2em', color: '#ff005c' }}><b>Your current total inctive yield pools:</b></div>
                        <img src={logo} style={{ marginBottom: '1.5em', marginRight: '0.4em' }} className="logo" alt="logo" />
                        <span style={{ fontSize: '3.5em', color: '#ff005c' }}> <b>0</b></span>
                    </Card>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginTop: '2em' }}>
                    <div style={{ marginTop: '0.8em' }} >
                        <Card id="yieldpool-card-beginner" className="prophet-card active" >
                            <div style={{ fontSize: '1em', color: '#ff005c', marginBottom: '0.5em' }}> <b>Beginner Pool</b></div>
                            <img src={logo} style={{ marginRight: '0.5em', fontSize: '0.6em' }} className="logo" alt="logo" />
                            <text style={{ fontSize: '1em', color: 'white' }}> <b> 50,000 total in pool </b></text>
                            <div> <img src={logo} style={{ marginRight: '0.4em', fontSize: '0.6em' }} className="logo" alt="logo" />  <span style={{ color: 'green', fontSize: '1em' }}> <b>1200 jackpot per ante </b></span> </div>
                            <div onClick={showBeginnerPoolCard} style={{ marginRight: '0em', textAlign: 'right', cursor: 'pointer', color: '#ff005c' }}> <RightOutlined/> </div>
                            <div style={{ color: '#5e6d87' }}>50 wallets in, 40 wallets win</div>
                        </Card>
                    </div>

                    <div style={{ marginTop: '0.8em' }}>
                        <Card id="yieldpool-card-shark" className="prophet-card">
                            <div style={{ fontSize: '1em', color: '#ff005c', marginBottom: '0.5em' }}> <b>Shark Pool</b></div>
                            <img src={logo} style={{ marginRight: '0.5em', fontSize: '0.6em' }} className="logo" alt="logo" />
                            <text style={{ fontSize: '1em', color: 'white' }}> <b> 50,000 total in pool </b></text>
                            <div> <img src={logo} style={{ marginRight: '0.4em', fontSize: '0.6em' }} className="logo" alt="logo" />  <span style={{ color: 'green', fontSize: '1em' }}> <b>1200 jackpot per ante </b></span> </div>
                            <div onClick={showSharkPoolCard} style={{ marginRight: '0em', textAlign: 'right', cursor: 'pointer', color: '#ff005c' }}> <RightOutlined/> </div>
                            <div style={{ color: '#5e6d87' }}>50 wallets in, 40 wallets win</div>
                        </Card>
                    </div>

                    <div style={{ marginTop: '0.8em' }} >
                        <Card id="yieldpool-card-bigmoney" className="prophet-card">
                            <div style={{ fontSize: '1em', color: '#ff005c', marginBottom: '0.5em' }}> <b>Big Money Pool</b></div>
                            <img src={logo} style={{ marginRight: '0.5em', fontSize: '0.6em' }} className="logo" alt="logo" />
                            <text style={{ fontSize: '1em', color: 'white' }}> <b> 600,000 total in pool </b></text>
                            <div> <img src={logo} style={{ marginRight: '0.4em', fontSize: '0.6em' }} className="logo" alt="logo" />  <span style={{ color: 'green', fontSize: '1em' }}> <b>200000 jackpot per ante </b></span> </div>
                            <div onClick={showBigMoneyPoolCard} style={{ marginRight: '0em', textAlign: 'right', cursor: 'pointer', color: '#ff005c' }}> <RightOutlined/> </div>
                            <div style={{ color: '#5e6d87' }}>50 wallets in, 40 wallets win</div>
                        </Card>
                    </div>

                </div>
                <div style={{ marginTop: '2em' }} id="card-details-join">
                    <Card bordered={false} style={{ marginTop: '0.4em', boxShadow: '0 8px 6px -6px black', width: '26em', backgroundColor: '#162b51', marginLeft: '4em', borderRadius: '1em', color: 'white' }}>
                        <div style={{ fontSize: '1.4em', color: '#ff005c' }}> <b>{cardDetails.type}</b></div>
                        <span style={{ fontSize: '0.8em' }}>{cardDetails.walletsIn} wallets in, {cardDetails.walletsWin} wallets win</span>
                        <p style={{ fontSize: '0.8em' }}>Wallets in so far: <b>3</b></p>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div>Current Balance:</div>
                                <div><img src={logo} style={{ marginRight: '0.3em', fontSize: '0.6em' }} className="logo" alt="logo" />{cardDetails.currentBalance}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em' }}>
                                <div style={{ color: '#ff005c' }}>Minimum Ante to join:</div>
                                <div><img src={logo} style={{ marginRight: '0.3em', fontSize: '0.6em' }} className="logo" alt="logo" />{cardDetails.ante}</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2em' }}><b>Number of Antes you want to put in:</b></div>
                        <p style={{ fontSize: '0.8em' }}> Minimum 1, Maximum 4 </p>
                        <InputNumber min={1} max={10} defaultValue={1} />


                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2em' }}>
                                <div>Your Total ante up:</div>
                                <div><img src={logo} style={{ marginRight: '0.3em', fontSize: '0.6em' }} className="logo" alt="logo" />{cardDetails.anteUp}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em', marginTop: '2em' }}>
                                <div>You could win:</div>
                                <div><img src={logo} style={{ marginRight: '0.3em', fontSize: '0.6em' }} className="logo" alt="logo" />{cardDetails.winNumber}</div>
                            </div>
                        </div>

                        <div style={{ marginTop: '2em', color: '#ff005c' }}><b>Chances of winning:</b></div>
                        <div>{cardDetails.winChances}</div>

                        <div style={{ fontSize: '0.8em', marginTop: '2em', color: '#5e6d87' }}>
                            <p> DISCLAIMER: Each pool runs for however long it takes to fill. As soon as it fills, the pool will close and your earnings will dispense if your wallet is declared part of the winnings. Each ante you enter has an equal chance of winning and an equal chance of losing in the overall pool.  </p>
                            <p>DISCLAIMER: The total cost of joining a pool is the ante plus. Ethereum gas fees. We have no control over gas fees.</p>
                        </div>


                        <Button type="primary" shape="round" style={{ background: 'linear-gradient(to right, #ff756d, #ff1a60)', width: '6em', marginTop: '1em' }} size={'medium'}>
          Join
                        </Button>
                    </Card>
                </div>
            </div>
        </div>


    );
};

export default YieldPools;
