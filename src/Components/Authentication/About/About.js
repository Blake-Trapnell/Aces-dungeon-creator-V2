import React, {useEffect, useRef} from "react"
import './About.css'
import {TweenMax, Power3} from "gsap/all"


export default function About() {
    let information1 = useRef(null)
    let information2 = useRef(null)
    let information3 = useRef(null)

    useEffect(()=> {
        TweenMax.from(information1, 2, {y: 500, ease: Power3.easeOut})
        TweenMax.from(information2, 2, {y: 500, ease: Power3.easeOut, delay: 3})
        TweenMax.from(information3, 2, {y: 500, ease: Power3.easeOut, delay: 6})

    },[])
    return (
        <div className ="about-outer">
            <div className="information1"
            ref={el=> information1 = el}>
            <h1>Ace's Character Creator is a <p>
                website that allows you to create</p><p>
                And store your favorite creations.</p><p>
                Now with any device, you can </p><p>
                create, edit, and update all of your</p><p>
                info on the go and fast!</p></h1>
            </div>
            <div className="information2"
            ref={el=> information2 = el}>
                <h1>With Ace's Random Character Creator, <p>
                    Dungeon masters can improvise fights</p> <p>
                    on the fly! weren't expecting that tavern </p> <p>
                    brawl? No problem! go to the random</p> <p>
                     character section and have instant random </p><p>
                     stats for that bar tender.  </p>
                    
                    
                    
                
                </h1>
            </div>
            <div className="information3"
            ref={el=> information3 = el}>
            <h1> Created by D&D player Blake Trapnell
                ACE'S Character Creator is a D&D tool <p>
                for D&D Players, By a D&D player! </p> Feel Free to Contact Blake <p>
                with Questions Or Comments  </p>  @ BlakeTrapnell.dev@gmail.com
                </h1></div>
        </div>
    )
}