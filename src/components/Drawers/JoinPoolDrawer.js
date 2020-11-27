import React from "react";
import { Layout, Drawer, Button } from "antd";
import { InputNumber } from 'antd';

const JoinPoolDrawer = ({ onClose, visible, title, balance, wallets, currentBalance, minimumFee, chance, winPossibilityAmt, totalAnte }) => {
    const onChange = (value) => {
        console.log('changed', value);
    };
    return (
        <Drawer
            title={"Join <PoolType> Pool"}
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={400}
            height={50}
        >
            <p>6 wallets in, 2 wallets win</p>
            <p>Wallets in so far: <b>3</b></p>
            <div><b>Current Balance:</b></div>
            <div>490000</div>

            <div style={{ marginTop: '2em' }}><b>Current Balance:</b></div>
            <div>490000</div>

            <div style={{ marginTop: '2em' }}><b>Number of Antes you want to put in:</b></div>
            <div>100,000</div>

            <div style={{ marginTop: '2em' }}><b>Your Total ante up:</b></div>
            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />


            <div style={{ marginTop: '2em' }}><b>You could win:</b></div>
            <div>490000</div>

            <div style={{ marginTop: '2em' }}><b>Chances of winning:</b></div>
            <div>490000</div>

            <div style={{ fontSize: '0.8em', marginTop: '2em' }}>DISCLAIMER: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </div>


            <Button type="primary" shape="round" style={{ backgroundColor: 'grey', width: '6em', marginTop: '1em' }} size={'large'}>
          Join
            </Button>
        </Drawer>
    );
};

export default JoinPoolDrawer;
