import React, { useEffect, useState } from 'react'
import heroes from '../../templateDB'
import ListHero from '../ListHero/ListHero'


export default function Content(props) {
    const [heroList, setHeroList] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        setHeroList(heroes)
    },[])

    
    return (
        <main>
            <div className='main-head'>
                <form className='search-box' onSubmit={(e)=>console.log(e)}>
                    <input
                        type='search'
                        placeholder='Search for a superhero'
                        required
                        value={search}
						onChange={ e => setSearch(e.target.value)
                        }
                    />
                </form>
            </div>
            <ListHero heroesList={heroList}/>
        </main>
    )
}
