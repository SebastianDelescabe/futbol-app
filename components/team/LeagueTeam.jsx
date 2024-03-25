export const LeagueTeam = ({ data }) => {

    const {teamInfo,teamID} = data

    let name = teamInfo.team.name;
    let logo = teamInfo.team.logo;
    let points = teamInfo.points;
    let position = teamInfo.rank;
    let infoPlayed = teamInfo.all;

    //Pinta equipo elegido
    let selectedTeam = teamInfo.team.id === teamID 

    let goalDif = [teamInfo.goalsDiff]; // [Cantidad goles a favor o en contra, color dependiendo los goles]

    if (goalDif > 0) {
        goalDif.push('#094')
    } else if (goalDif < 0) {
        goalDif.push('#d00')
    } else {
        goalDif.push('black')
    }


    return (
        <>
            <tr style={selectedTeam ? {background:"#d6f9cc"}: {}}>
                <td className="leagueTeam__information">
                    <div>
                        <span>{position}°</span>
                        <img src={logo} alt="" />
                        <span>{name}</span>
                    </div>
                </td>   
                <td>{infoPlayed.played}</td>
                <td>{infoPlayed.win}</td>
                <td>{infoPlayed.draw}</td>
                <td>{infoPlayed.lose}</td>
                <td>{infoPlayed.goals.for}</td>
                <td>{infoPlayed.goals.against}</td>
                <td className="leagueTeam__goalDiff" style={{ color: goalDif[1] }}>{goalDif[0]}</td>
                <td>{points}</td>
            </tr>
        </>
    );

}