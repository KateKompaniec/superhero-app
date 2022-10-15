import React from 'react'
import Hero from '../Hero/Hero'

export default function ListHero(props) {
    let heroesList = []
    heroesList = props.heroesList
    return (
        <div className="hero-list">
            {heroesList.map(hero => (
                <Hero
                    key={hero.id}
                    id={hero._id}
                    nickname={hero.nickname}
                    real_name={hero.real_name}
                    origin_description={hero.origin_description}
                    superpowers={hero.superpowers}
                    catch_phrase={hero.catch_phrase}
                    image={hero.images ? hero.images[0] : null}
                />))}
        </div>
    )
}
