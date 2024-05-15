import "./Portfolio.css";
import modem from "./modem 1.png";
import rack from "./image.png";
import strech from "./stracher.png";
import React from "react";
import Card from "./Card";
import rack1 from "./Rack/image.png";
import rack2 from "./Rack/image1.png";
import rack3 from "./Rack/image2.png";
import rack4 from "./Rack/image3.png";
import modem1 from "./Digitalmodem/modem1.png";
import modem2 from "./Digitalmodem/modem2.png";
import modem3 from "./Digitalmodem/modem3.png";
import modem4 from "./Digitalmodem/modem4.png";
import stretcher1 from "./stretcher/image1.png";
import stretcher2 from "./stretcher/image2.png";
import stretcher3 from "./stretcher/image3.png";
import stretcher4 from "./stretcher/image4.png";
import Light1 from "./Light/image1.png";
import Light2 from "./Light/image2.png";
import Light3 from "./Light/image3.png";
import Light4 from "./Light/image4.png";
import walkie1 from "./Walkie/image1.png";
import walkie2 from "./Walkie/image2.png";
import walkie3 from "./Walkie/image3.png";
import walkie4 from "./Walkie/image4.png";
import dron1 from "./AntiDrone/image1.png";
import dron2 from "./AntiDrone/image2.png";
import dron3 from "./AntiDrone/image3.png";
import dron4 from "./AntiDrone/image4.png";

import latch1 from "./latch/image1.png";
import latch2 from "./latch/image2.png";
import latch3 from "./latch/image3.png";
import latch4 from "./latch/image4.png";
export default function Portfolio() {
    return (
        <div className="container">
            <Card
                carts={modem}
                text={"Digital modem"}
                text2={
                    "Development of a digital modem in a rack to the required dimensions using a board and various connectors"
                }
                image1={modem1}
                image2={modem2}
                image3={modem3}
                image4={modem4}
            />
            <Card
                carts={Light1}
                text={"Lighting control panel"}
                text2={
                    "Development of a lighting control panel according to a given specification using sheet metal"
                }
                image1={Light1}
                image2={Light2}
                image3={Light3}
                image4={Light4}
            />
            <Card
                carts={strech}
                text={"Underframe"}
                text2={
                    "Development of a subframe for a kung car and creation of brackets for other parts on it"
                }
                image1={stretcher1}
                image2={stretcher2}
                image3={stretcher3}
                image4={stretcher4}
            />
            {/* ////////new//////// */}
            <Card
                carts={walkie1}
                text={"Welded frame"}
                image1={walkie1}
                image2={walkie2}
                image3={walkie3}
                image4={walkie4}
            />
            <Card
                carts={dron1}
                text={"Anti-drone gun mockup"}
                text2={"Development of a prototype for 3D printing"}
                image1={dron1}
                image2={dron2}
                image3={dron3}
                image4={dron4}
            />
            <Card
                carts={latch1}
                text={"latch"}
                image1={latch1}
                image2={latch2}
                image3={latch3}
                image4={latch4}
            />
        </div>
    );
}
