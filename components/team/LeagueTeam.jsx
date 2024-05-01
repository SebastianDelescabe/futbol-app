import { getInfoTeam } from "@/app/redux/teams/teamSlice";
import fetchData from "@/app/helpers/fetchTeamData";
import { maxCaracter } from "@/app/helpers/maxCaracter";
import { useDispatch } from "react-redux";

export const LeagueTeam = ({ data }) => {

    const dispatch = useDispatch();

    const {teamInfo,teamID} = data

    const name = teamInfo.team.name;
    const logo = teamInfo.team.logo;
    const points = teamInfo.points;
    const position = teamInfo.rank;
    const infoPlayed = teamInfo.all;

    //Pinta equipo elegido
    const selectedTeam = teamInfo.team.id === teamID 

    let goalDif = [teamInfo.goalsDiff]; // [Cantidad goles a favor o en contra, color dependiendo los goles]

    if (goalDif > 0) {
        goalDif.push('#094')
    } else if (goalDif < 0) {
        goalDif.push('#d00')
    } else {
        goalDif.push('black')
    }

    const handeTeamOnClick = async () => {
        let resultOnClickTeam = await fetchData(teamInfo.team.id)
        //GET INFO ON INPUT
        if (resultOnClickTeam && resultOnClickTeam.results != 0) {
            dispatch(getInfoTeam(resultOnClickTeam[0]))
        }
    }

    return (
        <>
            <tr onClick={handeTeamOnClick} style={selectedTeam ? {background:"#d6f9cc"}: {}}>
                <td className="leagueTeam__information">
                    <div>
                        <span>{position}°</span>
                        <img src={logo} alt="" />
                        <span>{maxCaracter(name,19)}</span>
                    </div>
                </td>   
                <td>{points}</td>
                <td>{infoPlayed.played}</td>
                <td>{infoPlayed.win}</td>
                <td>{infoPlayed.draw}</td>
                <td>{infoPlayed.lose}</td>
                <td>{infoPlayed.goals.for}</td>
                <td>{infoPlayed.goals.against}</td>
                <td className="leagueTeam__goalDiff" style={{ color: goalDif[1] }}>{goalDif[0]}</td>
            </tr>
        </>
    );

}