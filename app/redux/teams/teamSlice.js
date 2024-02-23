import { createSlice } from "@reduxjs/toolkit";

export const selectedTeam = createSlice({
    name: "teamID",
    initialState: {
        value: {
            teamID: false,
            teamInfo: false,
            teamPosition: false,
            competitionID: false
        },
    },
    reducers: {
        getInfoTeam: (state, action) => {
            state.value.teamID = action.payload.team.id;
            state.value.teamInfo = { ...action.payload.venue, team: { ...action.payload.team } };
        },
        getTeamPosition: (state, action) => {
            let teamID = state.value.teamID //equipo elegido
            let leagueInfo = action.payload.league.standings[0] //posiciones de la liga
            //busca dentro de las posiciones de la liga, la posicion de mi equipo elegido y lo retorna

            leagueInfo.forEach(positionInLeage => {
                if (positionInLeage.team.id == teamID) {
                    state.value.teamPosition = positionInLeage.rank
                } else {
                    state.value.teamPosition = '-'
                    return
                }
            });
        },
        getCompetitionId: (state, action) => {
            //guarda id competicion
            console.log(state, action, 'asdasdas');
            state.value.competitionID = action.payload;
            console.log(state.value.competitionID);
        },
    }

})

export const { getInfoTeam, getTeamPosition, getCompetitionId } = selectedTeam.actions