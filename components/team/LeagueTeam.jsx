export const LeagueTeam = ({ data }) => {
    let name = data.team.name;
    let logo = data.team.logo;
    let points = data.points;
    let position = data.rank;
    let infoPlayed = data.all;

    let goalDif = [data.goalsDiff]; // [Cantidad goles a favor o en contra, color dependiendo los goles]

    if (goalDif > 0) {
        goalDif.push('#094')
    } else if (goalDif < 0) {
        goalDif.push('#d00')
    } else {
        goalDif.push('black')
    }

    return (
        <>
            <tr>
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