import React from 'react'
import recomendedTeams from '@/helpers/recomendatiosData'
import { TeamHomeData } from './TeamHomeData'

export const TeamsRecomendations = () => {
  return (
    <div className='teams__recomendations' id='recomendations'>
        <div className='teams__recomendations-container'>
          {
            recomendedTeams && recomendedTeams.map((team,index) => (
              <TeamHomeData key={index} data={team}/>
            ))
          }
        </div>
        <div className='teams__recomendations-container'>
          {
            recomendedTeams && recomendedTeams.map((team,index) => (
              <TeamHomeData key={index} data={team}/>
            ))
          }
        </div>
    </div>
  )
}
