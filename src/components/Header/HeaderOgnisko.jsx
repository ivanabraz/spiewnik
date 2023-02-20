import React, {useEffect, useRef} from "react";
import lottie from "lottie-web";
import animation from "./ognisko.json";

const HeaderOgnisko = () => {
    let animationContainer = useRef(null);

    useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation
        });
        return () => anim.destroy();
        }, []);

    return (
        <div className="w-full h-full absolute z-0 bottom-0" ref={animationContainer}>
        </div>
    )
}

export default HeaderOgnisko;