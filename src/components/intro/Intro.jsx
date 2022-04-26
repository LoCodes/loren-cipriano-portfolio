import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'


export default function Intro() {
    const textRef = useRef() // chose item to animate === span

    useEffect(() => {
        console.log(textRef.current)
        init(textRef.current, { 
            showCursor: true,
            backDelay:  1500,
            backSpeed:  60, 
            strings: ["Full Stack Developer", "Frontend", "Backend" ]   
        });
    }, []) //dependency empty array 

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/IMG_3919.png" alt="" />
                </div>
            </div>

            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Loren Cipriano</h1>
                    <h3>Software Engineer <span ref={textRef} > 
                       </span>
                    </h3>
                </div>
                <a href="#portfolio"> 
                    <img src="assets/down.png" alt="" /> 
                </a>
            </div>
        </div>
    )
}
