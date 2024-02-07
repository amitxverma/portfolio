import React from 'react'
import bgVideo from "../../images/bg-video2.mp4"

function BgVideo() {

    return (
        <>
            <video className='container-fluid bg-video' autoplay loop muted >
                <source src={bgVideo} type="video/mp4" /> 
            </video>
        </>
    )
}

export default BgVideo
