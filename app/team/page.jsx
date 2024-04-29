"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { InfoTeam } from "@/components/team/InfoTeam";
import { LeagueRank } from "@/components/team/LeagueRank";
import { LiveMatchs } from "@/components/team/LiveMatchs";
import { CupRank } from "@/components/team/CupRank";
import { ErrorComponent } from "@/components/team/ErrorComponent";


import getTeamCompetitions from "@/helpers/getTeamCompetitions";
import getCompetitionInfo from "@/helpers/getCompetitionInfo";
import { HeaderCompetitionInfo } from "@/components/team/HeaderCompetitionInfo";

export default function Team() {

    const router = useRouter();
    
    const { teamID, teamInfo, competitionSelected } = useSelector((state) => state.teamID.value);

    const [competitionData, setCompetitionData] = useState(null);
    const [allCompetitions, setAllCompetitions] = useState(null);
    const [loading , setLoading] = useState(true);

    // Trae informacion de la liga y las competencias del equipo
    useEffect(() => {
        if (!teamID) {
            router.push('/');
        } else {
            setLoading(true); 
            getTeamCompetitions(teamID)
                .then((response) => {
                    if(response){
                        setCompetitionData(response[0]);
                        setAllCompetitions(response[1]);
                    }
                    setLoading(false); 
                });
        }
    }, [teamID]);

    // Actualiza segun la competicion elegida
    useEffect(() => {
        if (competitionSelected) {
            setLoading(true); 
            getCompetitionInfo(competitionSelected[0], competitionSelected[1]) // ID, AÑO 
                .then((response) => {
                    setCompetitionData(response);
                    setLoading(false);
                })
        }
    }, [competitionSelected]);

    if (loading) {
        return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>;
    } else if (competitionData) {
        return (
            <div id="team">
                <section className='team__info'>
                    <div className="team__info-header">
                        {allCompetitions && <HeaderCompetitionInfo data={{ competitionData, allCompetitions }} />}
                        {teamInfo && <InfoTeam data={{ teamInfo }} />}
                    </div>
                    <div className="team__info-body">
                        {competitionData && teamID &&
                            (competitionData.type === 'cup' ? (
                                <CupRank data={{ competitionData,teamID }} />
                            ) : (
                                <LeagueRank data={{ competitionData,teamID }} />
                            ))}
                    </div>
                </section>
            </div>
        );
    } else {
        return <ErrorComponent />;
    }
}

