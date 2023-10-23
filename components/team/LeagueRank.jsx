import { LeagueTable } from "./LeagueTable";

export const LeagueRank = ({ data }) => {
    let name = data.league.name;
    let country = data.league.country;
    let logo = data.league.logo;
    let leagues = data.league.standings;

    return (
        <div id="leagueRank">
            <div className="leagueRank__container">
                <div className="leagueRank__container-info">
                    <div>
                        <img src={logo} alt="" />
                        <h1>{name}</h1>
                    </div>
                    <span><em>{country}</em></span>
                </div>
                <div className="leagueRank__table">
                    {
                        leagues.map((league, index) => (
                            <>
                                {
                                    leagues.length > 1 && <span className="leagueRank__group-title">Grupo {index + 1}</span>
                                }
                                <LeagueTable key={index} data={league} />
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


