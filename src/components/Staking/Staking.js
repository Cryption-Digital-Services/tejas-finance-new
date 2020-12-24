import React, { useState } from "react";
import { Card, InputNumber, Button } from 'antd';
import { RightOutlined } from "@ant-design/icons";
import logo from './../../logo.svg';
import './Staking.css';

const Staking = () => {
    const [cardDetails, setCardDetails] = useState({ type: 'Join Staking Pool',
        ante: '70000',
        anteUp: '200,000',
        winNumber: '600,000',
        size: 500000,
        reward: '20% APY',
        walletsWin: 2,
        limits: '10 PRY to 300,000 PRY',
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
            type: 'Join Staking Pool',
            ante: '70000',
            anteUp: '200,000',
            winNumber: '600,000',
            size: 5000000,
            timeframe: '90 days',
            reward: '20% APY',
            walletsWin: 2,
            limits: '10 PRY to 300,000 PRY',
            winChances: '33% per ante',
            currentBalance: '49000'
        });
    };

    // const showBigMoneyPoolCard = () => {
    //     toggleCardsActive(2);
    //     setCardDetails({
    //         type: 'Join Big Money Pool',
    //         ante: '94000',
    //         anteUp: '400,000',
    //         winNumber: '294,453',
    //         walletsIn: 4,
    //         walletsWin: 3,
    //         winChances: '63% per ante',
    //         currentBalance: '349000'
    //     });
    // };

    const showSharkPoolCard = () => {
        toggleCardsActive(1);
        setCardDetails({
            type: 'Join Staking Pool',
            ante: '146000',
            anteUp: '100,000',
            winNumber: '144,653',
            timeframe: '90 days',
            reward: '10% APY',
            size: 5000000,
            limits: '10 PRY to 300,000 PRY',
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
                        <span className="prophet-pool-card-header"><i id="dollar-icon" className="fa fa-usd" aria-hidden="true"/> <span> <b>Staking</b> </span></span>
                    </Card>
                </div>

                <div style={{ marginTop: '0.8em' }}>
                    <Card id="current-total-pool-card" bordered={false}>
                        <div id="current-total-card-header"><b>Our inaugral Staking pool is here</b></div>
                        <div style={{ fontSize: '80%', color: 'white' }}>
                        Staking allows the Prophecy network to strengthen while rewarding community participants. Simply stake your Prophecy in different pools to gain $PRY rewards.
                        Prophecy staking is limited, it will not last forever; we will probably offer staking for 2021 only, and it’s on a first come, first serve basis.
                        </div>
                    </Card>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'left', marginLeft: '5em' }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2em' }}>
                    <div style={{ marginTop: '0.8em' }} >
                        <Card style={{ cursor: 'pointer' }} onClick={showBeginnerPoolCard} id="yieldpool-card-beginner" className="prophet-card active" >
                            <div className="pool-card-header"> <b>90 day Staking Pool</b></div>
                            <div className="pool-card-total"> <b> 20% APY </b></div>
                            <div className="pool-card-total"> We are offering the best rewards for our first pool to celebrate launch </div>
                            <div className="pool-card-arrow"> <RightOutlined/> </div>
                        </Card>
                    </div>

                    <div style={{ marginTop: '0.8em' }}>
                        <Card style={{ cursor: 'pointer' }} onClick={showSharkPoolCard} id="yieldpool-card-shark" className="prophet-card" >
                            <div className="pool-card-header"> <b>90 day Staking Pool</b></div>
                            <div className="pool-card-total"> <b> 10% APY </b></div>
                            <div className="pool-card-total"> Coming soon </div>
                            <div className="pool-card-arrow"> <RightOutlined/> </div>
                        </Card>
                    </div>

                    {/* <div style={{ marginTop: '0.8em' }} >
                        <Card style={{ cursor: 'pointer' }} onClick={showBigMoneyPoolCard} id="yieldpool-card-bigmoney" className="prophet-card">
                            <div className="pool-card-header"> <b>Big Money Pool</b></div>
                            <img src={logo} id="pool-card-logo" alt="logo" />
                            <text className="pool-card-total" > <b> 600,000 total in pool </b></text>
                            <div> <img src={logo} id="pool-card-logo" className="pool-card-logo" alt="logo" />  <span className="jackpot-per-ante"> <b>200000 jackpot per ante </b></span> </div>
                            <div className="pool-card-arrow"> <RightOutlined/> </div>
                            <div className="pool-card-wallet-info">50 wallets in, 40 wallets win</div>
                        </Card>
                    </div> */}

                </div>
                <div style={{ marginTop: '3.2em' }}>
                    <Card id="card-details-join" bordered={false}>
                        <div className="card-details-join-type"> <b>{cardDetails.type}</b></div>
                        <span className="card-details-join-wallets-info"> Staking Pool size: {cardDetails.size} </span>
                        <span className="card-details-join-wallets-info"> Timeframe: {cardDetails.timeframe} </span>
                        <span className="card-details-join-wallets-info"> Rewards: {cardDetails.reward} </span>
                        <p className="wallets-in">Staking limits per wallet: {cardDetails.limits}</p>

                        <div className="card-details-no-ante-header"><b>Enter the amount of $PRY you want to stake: </b></div>
                        <InputNumber min={100000} max={1000000} defaultValue={300000} />

                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2em' }}>
                            <div className="card-details-total-ante-header">Total Return:</div>
                            <div><img src={logo} className="card-details-logo" alt="logo" />315000 PRY</div>
                        </div>

                        <div className="card-details-disclaimer-header">
                            <p className="card-details-disclaimer-info"> DISCLAIMER: Each pool runs for however long it takes to fill. As soon as it fills, the pool will close and your earnings will dispense if your wallet is declared part of the winnings. Each ante you enter has an equal chance of winning and an equal chance of losing in the overall pool.  </p>
                            <p className="card-details-disclaimer-info">DISCLAIMER: The total cost of joining a pool is the ante plus. Ethereum gas fees. We have no control over gas fees.</p>
                        </div>


                        <Button id="pool-join-button" type="primary" shape="round" size={'medium'}>
          Stake
                        </Button>
                    </Card>
                </div>
            </div>
        </div>


    );
};

export default Staking;
