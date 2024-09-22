import React from "react"
import travelLogo from "../images/travel-logo.png";

export default function Header() {
    return (
        <nav className="header-component">
            <img src={travelLogo} className="travel-logo" alt="Airplane travel logo"></img>
            <h3 className="header-title">my travel journal</h3>
        </nav>
    )
}