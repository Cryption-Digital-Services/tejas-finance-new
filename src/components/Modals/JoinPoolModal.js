import React, { useState } from 'react';
import { Modal, Checkbox } from 'antd';
import './JoinPoolModal.css';

const JoinPoolModal = ({ isShowing, hide }) => {
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
        setButtonDisabled(!buttonDisabled);
    };

    return (
        <>
            <Modal
                title="Confirm you want to enter the pool"
                visible={isShowing}
                onOk={hide}
                onCancel={hide}
                okText="Cancel"
                cancelText="Join"
                closable={false}
                id="join-pool-modal"
                cancelButtonProps={{ disabled: buttonDisabled }}
            >
                <p style={{ fontSize: '2vh' }}><b>Are you sure you want to enter this pool?</b></p>
                <div style={{ marginLeft: '2em', color: '#cccfd8', fontSize: '1.5vh' }}>
                    <p>  By entering this pool, you’re providing $PRY 200,000 that you have an 80% chance of getting back. </p>
                    <p>If you win, you’ll get $PRY 30,000 jackpot in addition to the ante you provided.</p>
                    <p>  The pool will close when there are x people who have entered it. As soon as the pool closes, you’ll know if you’ve won or lost. </p>
                    <p> Check your activity for full details. </p>
                </div>
                <p style={{ marginLeft: '2em', fontSize: '1.2vh' }}> <b>You can’t undo this action. We cannot refund you $PRY if you mistakenly enter a pool and lose your money. Enter at your own risk. </b></p>
                <p style={{ fontSize: '1.2vh', color: '#cccfd8' }}> <Checkbox style={{ marginRight: '0.5em' }} onChange={onChange}/>   I accept the financial risk and would like to enter the yield pool.</p>
            </Modal>
        </>
    );
};

export default JoinPoolModal;
