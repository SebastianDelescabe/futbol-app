export const LeagueTeam = ({ data }) => {
    let name = data.team.name;
    let logo = data.team.logo
    let points = data.points
    let position = data.rank
    let infoPlayed = data.all

    return (
        <div id="leagueTeam">
            <div className="leagueTeam__container">
                <span className="leagueTeam__container-position">{position}°</span>
                <img src={logo} alt="" />
                <span className="leagueTeam__container-name">{name}</span>
                <span>{points}</span>
            </div>
        </div>
    )
}