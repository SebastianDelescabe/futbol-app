'use client'

import { useState } from "react"
import fetchTeamData from "@/app/helpers/fetchTeamData"
import { TeamHomeData } from "./TeamHomeData"
import { toast } from 'react-toastify';

export const SelectTeam = () => {

    const [teamSearch, setTeamSearch] = useState('')
    const [teamResult, setTeamResult] = useState([])
    const [isSearching, setIsSearching] = useState(false)
    const [searchMessage, setSearchMessage] = useState('')

    const handleInput = (event) => {
        event.preventDefault()
        setTeamSearch(event.target.value)
        setTeamResult([])
        setSearchMessage('')
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (isSearching) return
        const query = teamSearch.trim()
        if (query.length < 3) {
            toast.warn("Escribí al menos 3 letras para buscar un equipo.", {
                theme: "dark"
            })
        } else {
            setIsSearching(true)
            setTeamResult([])
            setSearchMessage('')
            const resultInputSearch = await fetchTeamData(query)
            setIsSearching(false)

            // API errors already show a friendly toast; don't show a second message.
            if (resultInputSearch === null) return

            if (resultInputSearch.length > 0) {
                setTeamResult(resultInputSearch)
            } else {
                setSearchMessage(`No encontramos equipos para “${query}”. Probá con el nombre del club o parte del nombre.`)
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
                            <input onChange={(e) => handleInput(e)} value={teamSearch} type="search" placeholder="Ej.: Manchester" aria-label="Buscar equipo por nombre" />
                            <button disabled={isSearching}>{isSearching ? "Buscando…" : "Buscar"}</button>
                        </div>
                    </form>
                    {searchMessage && <p className="search__message" role="status">{searchMessage}</p>}
                    {isSearching && <p className="search__message" role="status">Buscando equipos…</p>}
                    {teamResult.length > 0 && <p className="search__message" role="status">Elegí un equipo para ver sus datos y competencias.</p>}
                    <div className="search__results">
                        {teamResult && teamResult.map((result) => (
                            <TeamHomeData key={result.team.id} data={result} />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )

}
