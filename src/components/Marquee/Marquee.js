import React from "react";
import "./Marquee.css";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const Marqueec = () => {
    return (
        <div className="marquee" style={{ width: "35em", height: "2em", boxShadow: '0 0 9px #ff073a', borderTop: '1px solid #ff073a', borderRadius: '3.5em', backgroundColor: '#111828' }}>
            <Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
                {times(1, Number).map((id) => (
                    <div style={{ marginTop: '0.4em', color: '#4b8b3b', fontSize: '1em' }}>POOL JUST ENDED!  x33046 wallet won 3000 prophet </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Marqueec;
