import { createSlice } from "@reduxjs/toolkit";

export const selectedTeam = createSlice({
    name: "teamID",
    initialState: {
        value: {
            teamID: false,
            teamInfo: false,
            competitionSelected: false
        },
    },
    reducers: {
        getInfoTeam: (state, action) => {
            state.value.teamID = action.payload.team.id;
            state.value.teamInfo = { ...action.payload.venue, team: { ...action.payload.team } };
        },
        getCompetitionData: (state, action) => {
            //IFNROMACION DE LA COMPETENCIA ELEGIDA PARA ENVIAR AL HOME
            state.value.competitionSelected = action.payload;
        }
    }

})

export const { getInfoTeam, getCompetitionData } = selectedTeam.actions