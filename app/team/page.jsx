'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

import { InfoTeam } from "@/components/team/InfoTeam"
import { LeagueRank } from "@/components/team/LeagueRank";
import { LiveMatchs } from "@/components/team/LiveMatchs";

import getTeamCompetitions from "@/helpers/getTeamCompetitions";
import getCompetitionInfo from "@/helpers/getCompetitionInfo";
import { getTeamPosition } from "../redux/teams/teamSlice";

export default function Team() {

    const router = useRouter();
    const dispatch = useDispatch()

    const { teamID, teamInfo, teamPosition, competitionID } = useSelector((state) => state.teamID.value);

    const [competitionData, setCompetitionData] = useState(false)
    const [allCompetitions, setAllCompetitions] = useState(false)


    //Trae informacion de la liga y las competencias del equipo
    useEffect(() => {
        if (!teamID) {
            router.push('/');
        } else {
            getTeamCompetitions(teamID)
                .then((response) => {
                    setCompetitionData(response[0]);
                    setAllCompetitions(response[1]);
                });
        }
    }, [teamID]);

    //Actualiza Posicion
    useEffect(() => {
        if (competitionData) {
            dispatch(getTeamPosition(competitionData));
        }
    }, [competitionData]);

    //Actualiza segun la competicion elegida
    useEffect(() => {
        if (competitionID) {
            getCompetitionInfo(competitionID)
                .then((response) => {
                    console.log(response);
                    setCompetitionData(response)
                })
        }
    }, [competitionID]);


    return (
        <div id="team">
            <header className='team__header'>
                <LiveMatchs />
            </header>
            <div className='team__info'>
                {
                    competitionData &&
                    <LeagueRank data={{ competitionData, allCompetitions }} />
                }
                {
                    teamInfo && teamPosition && (
                        <InfoTeam data={{ teamInfo, teamPosition }} />
                    )
                }
            </div>
        </div>
    )
}
