import React from 'react'
import "./CallToAction.css"
import { FiCode } from 'react-icons/fi'

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <h2>Thank you for watching my website</h2>
                    <p>ขอบคุณที่รับชมตัวอย่างเว็บของเรา</p>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
