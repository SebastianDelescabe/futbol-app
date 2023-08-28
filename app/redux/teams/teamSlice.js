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
            state.value.teamPosition = action.payload;
        }
    }

})


export const { getInfoTeam, getTeamPosition } = selectedTeam.actions