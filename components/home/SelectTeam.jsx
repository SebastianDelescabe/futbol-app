'use client'

import { useState } from "react"
import fetchTeamData from "@/helpers/fetchTeamData"
import { TeamHomeData } from "./TeamHomeData"

export const SelectTeam = () => {

    const [teamSearch, setTeamSearch] = useState('')
    const [teamResult, setTeamResult] = useState([])

    const handleInput = (event) => {
        event.preventDefault()
        setTeamSearch(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (teamSearch === '') {
            console.log('escribir algo')
        } else if (teamSearch.length < 3) {
            console.log('escribir al menos 5 caracteres')
        } else {
            let resultInputSearch = await fetchTeamData(teamSearch)
            console.log(resultInputSearch);
            //GET INFO ON INPUT
            if (resultInputSearch && resultInputSearch.results != 0) {
                setTeamResult(resultInputSearch)
            }
        }
    }
    return (
        <div id='selectTeam'>
            <div className='selectTeam__container'>
                <div className='selectTeam__container-search'>
                    <form onSubmit={(e) => handleSubmit(e)} className="selectTeam__form">
                        <h1>Buscar Equipo</h1>
                        <div className="selectTeam__container-search-input">
                            <input onChange={(e) => handleInput(e)} type="text" />
                            <button>Buscar</button>
                        </div>
                    </form>
                    <div className="search__results">
                        {teamResult && teamResult.map((result, i) => (
                            <TeamHomeData key={result.venue.name} data={result} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )

}
