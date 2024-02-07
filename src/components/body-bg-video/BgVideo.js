import React from 'react'
import bgVideo from "../../images/bg-video2.mp4"

function BgVideo() {

    return (
        <>
            <video src={bgVideo} type="video/mp4" className='container-fluid bg-video' autoPlay loop muted playsinline>
                {/* <source src={bgVideo} type="video/mp4" /> */}
            </video>
        </>
    )
}

export default BgVideo
