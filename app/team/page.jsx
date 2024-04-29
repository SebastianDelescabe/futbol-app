"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { InfoTeam } from "@/components/team/InfoTeam";
import { LeagueRank } from "@/components/team/LeagueRank";
import { LiveMatchs } from "@/components/team/LiveMatchs";
import { CupRank } from "@/components/team/CupRank";

import getTeamCompetitions from "@/helpers/getTeamCompetitions";
import getCompetitionInfo from "@/helpers/getCompetitionInfo";
import { HeaderCompetitionInfo } from "@/components/team/HeaderCompetitionInfo";

export default function Team() {
  const router = useRouter();

  const { teamID, teamInfo, competitionSelected } = useSelector(
    (state) => state.teamID.value
  );

  const [competitionData, setCompetitionData] = useState(false);
  const [allCompetitions, setAllCompetitions] = useState(false);

  //Trae informacion de la liga y las competencias del equipo
  useEffect(() => {
    if (!teamID) {
      router.push("/");
    } else {
      getTeamCompetitions(teamID).then((response) => {
        if (response) {
            console.log(response);
          setCompetitionData(response[0]);
          setAllCompetitions(response[1]);
        }
      });
    }
  }, [teamID]);

  //Actualiza segun la competicion elegida
  
  useEffect(() => {
    if (competitionSelected) {
      getCompetitionInfo(competitionSelected[0], competitionSelected[1]) //ID, AÑO
        .then((response) => {
          setCompetitionData(response);
        });
    }
  }, [competitionSelected]);

  return (
    <div id="team">
      {/*   <header className='team__header'>
                <LiveMatchs />
            </header> */}
      <section className="team__info">
        <div className="team__info-header">
          {allCompetitions && (
            <HeaderCompetitionInfo
              data={{ competitionData, allCompetitions }}
            />
          )}
          {teamInfo && competitionData && <InfoTeam data={{ teamInfo }} />}
        </div>
        <div className="team__info-body">
          {competitionData &&
            teamID &&
            (competitionData.type === "cup" ? (
              <CupRank data={{ competitionData, teamID }} />
            ) : (
              <LeagueRank data={{ competitionData, teamID }} />
            ))}
        </div>
      </section>
    </div>
  );
}
