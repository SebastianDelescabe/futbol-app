'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';

import { InfoTeam } from "@/components/team/InfoTeam"
import { LeagueRank } from "@/components/team/LeagueRank";
import { LiveMatchs } from "@/components/team/LiveMatchs";
import getTeamLeague from "@/helpers/getTeamLeague";
import { getTeamPosition } from "../redux/teams/teamSlice";

export default function Team() {

    const router = useRouter();
    const dispatch = useDispatch()

    const { teamID, teamInfo, teamPosition } = useSelector((state) => state.teamID.value);

    console.log(teamPosition);

    const [leagueInfo, setLeagueInfo] = useState(false)

    useEffect(() => {
        if (teamID != false) {
            getTeamLeague(teamID)
                .then((response) => {
                    setLeagueInfo(response)
                })
        } else {
            router.push('/');
        }
    }, [teamID])


    if (leagueInfo) dispatch(getTeamPosition(leagueInfo))

    return (
        <div id="team">
            <header className='team__header'>
                <LiveMatchs />
            </header>
            <div className='team__info'>
                {
                    leagueInfo &&
                    <LeagueRank data={leagueInfo} />
                }
                {
                    teamInfo && teamPosition &&
                    <InfoTeam data={{ teamInfo, teamPosition }} />
                }
            </div>
        </div>
    )
}
