import React from 'react'
import {Link} from 'react-router-dom'

export default function Hero(props) {
    let { id,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        image } = props

        
    const addDefaultSrc = (ev)=> {
        ev.target.src = "./images/def.jpg"
    };

    return (
        <div className="hero-card">
        <div className="heroImage">
           <figure>
             <img  onError={addDefaultSrc}  src={image} alt='image'/>
           </figure>
        </div>
        <div  className="heroNickname"> {id} {nickname}</div>
    </div>
    )
}
