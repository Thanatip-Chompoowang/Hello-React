import React, { useState } from 'react'
import { FiCode, FiMenu, FiX } from "react-icons/fi";
import './Header.css'


function Header() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    console.log(click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="header">
            <div className="container">
                <div className="header-con">
                    <div className="logo-container">
                        <a href="#">Portfolio </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
