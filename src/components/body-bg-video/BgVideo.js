import React from 'react'
import bgVideo from "../../images/bg-video2.mp4"

function BgVideo() {

    return (
        <>
        <div
                dangerouslySetInnerHTML={{
                    __html: `<video class='container-fluid bg-video' autoPlay loop muted playsinline>
                <source src="${bgVideo}" type="video/mp4" />
            </video>`
                }}
            />
            
        </>
    )
}

export default BgVideo
