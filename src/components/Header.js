import React from "react";
import Logo from"../images/pokemon2.png";

export const Header = () => {
    return (
        <nav>
            <div className="container">
                <div className="center">
                <div className="navigation-brand">
                    <img src={Logo} alt="logo" />

                </div>
                </div>
            </div>
        </nav>
    )
}