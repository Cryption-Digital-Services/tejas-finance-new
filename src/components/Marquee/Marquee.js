import React from "react";
import "./Marquee.css";
import Marquee from "react-marquee-slider";
import times from "lodash/times";

const Marqueec = () => {
    // const [visible, setVisible] = useState(false);
    return (
        <div style={{ height: "50px", borderBottom: '3px solid orange', borderTop: '3px solid orange', backgroundColor: '#444444' }}>
            <Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
                {times(1, Number).map((id) => (

                    <div
                        style={{
                            borderRadius: "50%",
                            textAlign: "center"
                        }}
                    >
                        <div style={{ marginTop: '1em', color: 'white', fontSize: '1.2em' }}>POOL JUST ENDED! * x33046 wallet won 3000 prophet * x33054 wallet won 2579 prophet</div>
                    </div>

                ))}
            </Marquee>
        </div>
    );
};

export default Marqueec;
