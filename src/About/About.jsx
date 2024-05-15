import React from "react";
import "./About.css";
import backgroundImage from "./fon.jpg";
import photo from "./photo.png (1).png";
export default function About() {
    return (
        <div className="header">
            <img src={photo} alt="" className="myphoto" />
            <div className="alltext">
                <div className="text works">
                    Greetings to all. My name is Viktor Pozdnyakov and I am a
                    design engineer. My work experience is more than 5 years.
                </div>
                <div className="text hello">Rate my works</div>
            </div>
        </div>
    );
}
