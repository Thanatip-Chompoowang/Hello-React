import React from 'react'
import "./Banner.css"

let bannerData = {
    title: "นี่คือ Portfolio",
    desc: "ผลงานนี้ทำขึ้นเพื่อเป็นตัวอย่างในการเรียนรู้ และเก็บประสบการณ์ต่าง ๆ รวมทั้งแสดงรางวัลเกียรติบัตร และผลงาน"
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>
                            {bannerData.desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
