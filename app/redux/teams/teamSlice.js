import { createSlice } from "@reduxjs/toolkit";

export const selectedTeam = createSlice({
    name: "teamID",
    initialState: {
        value: {
            teamID: false,
            teamInfo: false,
            teamPosition: false
        },
    },
    reducers: {
        getInfoTeam: (state, action) => {
            state.value.teamID = action.payload.team.id;
            state.value.teamInfo = { ...action.payload.venue, team: { ...action.payload.team } };
        },
        getTeamPosition: (state, action) => {
            let teamID = state.value.teamID //equipo elegido
            let leagueInfo = action.payload.league.standings //posiciones de la liga

            console.log(teamID)
            //busca dentro de las posiciones de la liga, la posicion de mi equipo elegido y lo retorna
            leagueInfo.forEach(league => {
                league.find(element => {
                    if (teamID === element.team.id) {
                        console.log(element.rank);
                        return state.value.teamPosition = element.rank
                    } else {
                        return state.value.teamPosition = '-'
                    }
                })
            });
        }
    }

})

export const { getInfoTeam, getTeamPosition } = selectedTeam.actions