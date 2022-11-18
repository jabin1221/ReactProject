import React from "react";
import videoBg from "../assets/back2.mp4"

const Main = () => {
    return(
        <div className="Main">
            <vidoe src={videoBg} autoplay loop muted />
        </div>
    )
}

export default Main