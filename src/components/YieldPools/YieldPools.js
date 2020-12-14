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
            <div className="yield-pools" style={{ marginTop: '2em', marginBottom: '2em', display: 'flex', justifyContent: 'left', marginLeft: '5em' }}>

                <div style={{ marginTop: '0.8em' }}>
                    <Card id="prophet-pool-card" bordered={false}>
                        <span className="prophet-pool-card-header"><i id="dollar-icon" className="fa fa-usd" aria-hidden="true"/> <span> <b>Prophet Pools</b> </span></span>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Card id="current-total-pool-card" bordered={false}>
                        <div id="current-total-card-header"><b>Your current total inctive yield pools:</b></div>
                        <img src={logo} id="current-total-card-logo" />
                        <span id="current-total"> <b>0</b></span>
                    </Card>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'left', marginLeft: '5em' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2em' }}>
                    <div style={{ marginTop: '0.8em' }} >
                        <Card style={{ cursor: 'pointer' }} onClick={showBeginnerPoolCard} id="yieldpool-card-beginner" className="prophet-card active" >
                            <div className="pool-card-header"> <b>Beginner Pool</b></div>
                            <img src={logo} id="pool-card-logo" alt="logo" />
                            <text className="pool-card-total"> <b> 50,000 total in pool </b></text>
                            <div> <img src={logo} id="pool-card-logo" className="pool-card-logo" alt="logo" />  <span className="jackpot-per-ante"> <b>1200 jackpot per ante </b></span> </div>
                            <div className="pool-card-arrow"> <RightOutlined/> </div>
                            <div className="pool-card-wallet-info"> 50 wallets in, 40 wallets win</div>
                        </Card>
                    </div>

                    <div style={{ marginTop: '0.8em' }}>
                        <Card style={{ cursor: 'pointer' }} onClick={showSharkPoolCard} id="yieldpool-card-shark" className="prophet-card">
                            <div className="pool-card-header"> <b>Shark Pool</b></div>
                            <img src={logo} id="pool-card-logo" alt="logo" />
                            <text className="pool-card-total"> <b> 50,000 total in pool </b></text>
                            <div> <img src={logo} id="pool-card-logo" className="pool-card-logo" alt="logo" />  <span className="jackpot-per-ante"> <b>1200 jackpot per ante </b></span> </div>
                            <div className="pool-card-arrow"> <RightOutlined/> </div>
                            <div className="pool-card-wallet-info">50 wallets in, 40 wallets win</div>
                        </Card>
                    </div>

                    <div style={{ marginTop: '0.8em' }} >
                        <Card style={{ cursor: 'pointer' }} onClick={showBigMoneyPoolCard} id="yieldpool-card-bigmoney" className="prophet-card">
                            <div className="pool-card-header"> <b>Big Money Pool</b></div>
                            <img src={logo} id="pool-card-logo" alt="logo" />
                            <text className="pool-card-total" > <b> 600,000 total in pool </b></text>
                            <div> <img src={logo} id="pool-card-logo" className="pool-card-logo" alt="logo" />  <span className="jackpot-per-ante"> <b>200000 jackpot per ante </b></span> </div>
                            <div className="pool-card-arrow"> <RightOutlined/> </div>
                            <div className="pool-card-wallet-info">50 wallets in, 40 wallets win</div>
                        </Card>
                    </div>

                </div>
                <div style={{ marginTop: '3.2em' }}>
                    <Card id="card-details-join" bordered={false}>
                        <div className="card-details-join-type"> <b>{cardDetails.type}</b></div>
                        <span className="card-details-join-wallets-info">{cardDetails.walletsIn} wallets in, {cardDetails.walletsWin} wallets win</span>
                        <p className="wallets-in">Wallets in so far: <b>3</b></p>
                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="card-details-current-balance-header" >Current Balance:</div>
                                <div className="card-details-current-balance"><img src={logo} className="card-details-logo" alt="logo" />{cardDetails.currentBalance}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em' }}>
                                <div className="card-details-min-ante">Minimum Ante to join:</div>
                                <div className="card-details-min-ante-amount"><img src={logo} className="card-details-logo" alt="logo" />{cardDetails.ante}</div>
                            </div>
                        </div>

                        <div className="card-details-no-ante-header"><b>Number of Antes you want to put in:</b></div>
                        <p className="card-details-ante-info"> Minimum 1, Maximum 4 </p>
                        <InputNumber min={1} max={10} defaultValue={1} />


                        <div style={{ display: 'flex' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2em' }}>
                                <div className="card-details-total-ante-header">Your Total ante up:</div>
                                <div><img src={logo} className="card-details-logo" alt="logo" />{cardDetails.anteUp}</div>
                            </div>
                            <div className="card-details-you-could-win" style={{ display: 'flex', flexDirection: 'column', marginLeft: '2em', marginTop: '2em' }}>
                                <div>You could win:</div>
                                <div><img src={logo} className="card-details-logo" alt="card-details-logo" />{cardDetails.winNumber}</div>
                            </div>
                        </div>

                        <div className="card-details-chances-win"><b>Chances of winning:</b></div>
                        <div>{cardDetails.winChances}</div>

                        <div className="card-details-disclaimer-header">
                            <p className="card-details-disclaimer-info"> DISCLAIMER: Each pool runs for however long it takes to fill. As soon as it fills, the pool will close and your earnings will dispense if your wallet is declared part of the winnings. Each ante you enter has an equal chance of winning and an equal chance of losing in the overall pool.  </p>
                            <p className="card-details-disclaimer-info">DISCLAIMER: The total cost of joining a pool is the ante plus. Ethereum gas fees. We have no control over gas fees.</p>
                        </div>


                        <Button id="pool-join-button" type="primary" shape="round" size={'medium'}>
          Join
                        </Button>
                    </Card>
                </div>
            </div>
        </div>


    );
};

export default YieldPools;
