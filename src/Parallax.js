import React from "react";
import {Parallax} from 'react-parallax'
import bg from './images/bg.png'

export default function ParallaxF(){
    return(
        <div className = "parallax">
            <div className = "container__bgPhoto">
            <div className = "bgPhoto">
                    <img src = {bg}/>
            </div>
            </div>
            <Parallax>
            </Parallax>
        </div>
    )
}