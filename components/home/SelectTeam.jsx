'use client'

import { useState } from "react"
import fetchTeamData from "@/app/helpers/fetchTeamData"
import { TeamHomeData } from "./TeamHomeData"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.warn("Porfavor escribe algo!", {
                theme: "dark"
            })
        } else if (teamSearch.length < 5) {
            toast.warn("Escribe al menos 4 caracteres!", {
                theme: "dark"
            })
        } else {
            let resultInputSearch = await fetchTeamData(teamSearch)
            //GET INFO ON INPUT
            if (resultInputSearch && resultInputSearch.length != 0) {
                setTeamResult(resultInputSearch)
            }else{
                toast.warn("No se encontró el equipo, se específico", {
                    theme: "dark"
                })
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
                    <ToastContainer />
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
