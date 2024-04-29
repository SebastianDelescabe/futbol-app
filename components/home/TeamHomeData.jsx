'use client'

import Link from 'next/link'
import { getInfoTeam } from '../../app/redux/teams/teamSlice'
import { useDispatch } from 'react-redux'

export const TeamHomeData = ({ data }) => {

    const dispatch = useDispatch()

    let logo = data.team.logo
    let name = data.team.name
    let country = data.team.country

    const handeClickResult = () => {
        dispatch(getInfoTeam(data))
    }

    return (
        <div onClick={() => handeClickResult()} className="selectTeam__result">
            <Link href={'/team'}>
                <div className="selectTeam__result-container">
                    <div className='selectTeam__result-container-text'>
                        <span><strong>{name}</strong></span>
                        <span>{country}</span>
                    </div>
                    <img src={logo} alt="logo" />
                </div>
            </Link>
        </div>
    )
}