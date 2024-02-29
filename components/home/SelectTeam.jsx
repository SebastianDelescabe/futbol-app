'use client'

import { useState } from "react"
import Link from "next/link"
import fetchTeamData from "@/helpers/fetchTeamData"
import { SearchResult } from "./SearchResult"
import recomendedTeams from "@/helpers/recomendatiosData"

export const SelectTeam = () => {

    const [teamSearch, setTeamSearch] = useState('')
    const [teamResult, setTeamResult] = useState(recomendedTeams)

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
            //GET INFO ON INPUT
            if (resultInputSearch && resultInputSearch.results != 0) {
                setTeamResult(resultInputSearch.response)
            }
        }
    }
    return (
        <div id='selectTeam'>
            <div className='selectTeam__container'>
                <Link href={'/team'}>
                    <div className="selectTeam__container-close">X</div>
                </Link>
                <div className='selectTeam__container-search'>
                    <form onSubmit={(e) => handleSubmit(e)} className="selectTeam__form">
                        <p>Buscar Equipo</p>
                        <div className="selectTeam__container-search-input">
                            <input onChange={(e) => handleInput(e)} type="text" />
                            <button>Buscar</button>
                        </div>
                    </form>
                    <div className="search__results">
                        {
                            teamResult && (
                                teamResult.map((result, i) => (
                                    <SearchResult key={i} data={result} />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )

}
