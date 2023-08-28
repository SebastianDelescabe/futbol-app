import { configureStore } from "@reduxjs/toolkit";
import { selectedTeam } from "./teams/teamSlice";

export default configureStore({
    reducer: {
        teamID: selectedTeam.reducer,
    }
})
