"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { InfoTeam } from "@/components/team/InfoTeam";
import { LeagueRank } from "@/components/team/LeagueRank";

import getTeamCompetitions from "@/app/helpers/getTeamCompetitions";
import getCompetitionInfo from "@/app/helpers/getCompetitionInfo";
import { HeaderCompetitionInfo } from "@/components/team/HeaderCompetitionInfo";
import { getInfoTeam } from "@/app/redux/teams/teamSlice";

export default function Team() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { teamID, teamInfo, competitionSelected } = useSelector(
    (state) => state.teamID.value
  );

  const [competitionData, setCompetitionData] = useState(false);
  const [allCompetitions, setAllCompetitions] = useState(false);
  const [loading, setLoading] = useState(true)
  const [infoLoading, setInfoLoading] = useState(true)
  const [selectionRestored, setSelectionRestored] = useState(false)

  // Restaura la selección antes de redirigir; Redux por sí solo se pierde en una recarga.
  useEffect(() => {
    if (!teamID) {
      try {
        const savedTeam = sessionStorage.getItem("selectedTeam")
        if (savedTeam) {
          dispatch(getInfoTeam(JSON.parse(savedTeam)))
        } else {
          router.replace("/")
        }
      } catch (error) {
        console.error("No se pudo restaurar el equipo seleccionado:", error)
        router.replace("/")
      }
    }
    setSelectionRestored(true)
  }, [])

  //Trae informacion de la liga y las competencias del equipo
  useEffect(() => {
    if (!selectionRestored) return;
    if (!teamID) {
      router.replace("/");
    } else {
      getTeamCompetitions(teamID).then((response) => {
        if (response) {
          setCompetitionData(response[0]);
          setAllCompetitions(response[1]);
        }
        setLoading(false)
        setInfoLoading(false)
      });
    }
  }, [teamID, selectionRestored]);

  //Actualiza segun la competicion elegida
  useEffect(() => {
    if (competitionSelected) {
      getCompetitionInfo(competitionSelected[0], competitionSelected[1]) //ID, AÑO
        .then((response) => {
          setCompetitionData(response);
          setLoading(false)
        });
    }
  }, [competitionSelected]);

  if(!selectionRestored || loading){
    return(<div className="loader__container"><div class="lds-facebook"><div></div><div></div><div></div></div></div> )
  }else{
    return (
      <div id="team">
        <section className="team__info">
          <div className="team__info-header">
            {allCompetitions && (
              <HeaderCompetitionInfo
                data={{ competitionData, allCompetitions }}
              />
            )}
            {teamInfo && competitionData &&  <InfoTeam data={{ teamInfo ,infoLoading}} />}
          </div>
          <div className="team__info-body">
            {competitionData && teamID && (<LeagueRank data={{ competitionData, teamID ,setInfoLoading}} /> )}
          </div>
        </section>
      </div>
    );
  }
}
