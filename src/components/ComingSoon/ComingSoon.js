import React from "react";
import { Card } from "antd";
import SocialMediaLogo from '../../../SocialMediaLogo.svg';

const ComingSoon = () => {
    return (
        <div>
            <Card bordered={false}
                style={{ width: '58em',
                    height: '20em',
                    marginTop: '3.4em',
                    boxShadow: '0 8px 6px -6px black',
                    backgroundColor: '#162b51',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    lineHeight: '20em',
                    color: '#797e8a'
                }}
            >
                <b style={{ fontSize: '5em' }}>Coming Soon</b>
            </Card>
            <div style={{ marginLeft: '14em', marginTop: '2em' }}>
                <div style={{ fontSize: '2em', color: '#ff005c' }}> Meanwhile ...</div>
                <div style={{ color: '#797e8a' }}> Check out our community on social media and join the revolution </div>
                <img src={SocialMediaLogo} style={{ marginRight: '0.4em', fontSize: '1.2em', marginTop: "1em" }} className="logo" alt="logo" />
            </div>
        </div>

    );
};

export default ComingSoon;
