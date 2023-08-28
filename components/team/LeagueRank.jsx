import { LeagueTeam } from "./LeagueTeam"

export const LeagueRank = ({ data }) => {

    let name = data.league.name
    let country = data.league.country
    let logo = data.league.logo
    let leaguesTeams = data.league.standings[0]

    return (
        <div id="leagueRank">
            <div className="leagueRank__container">
                <div className="leagueRank__container-info">
                    <div>
                        <img src={logo} alt="" />
                        <h1>{name}</h1>
                    </div>
                    <span>{country}</span>
                </div>
                <div className="leagueRank__teams">
                    {
                        leaguesTeams && leaguesTeams.map(team => (
                            <LeagueTeam key={team.team.id} data={team} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}