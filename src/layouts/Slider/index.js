import React from "react";
import { Carousel } from "antd";

const Slider = () =>  {
    return(
        <div className="slider float-left w-full m-0 p-0">
            <Carousel autoplay className="w-full float-left">
                <div>
                    <img src="../images/slider/men-fashion-banner-2.png" alt="slider-1" className="float-left"/>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider;