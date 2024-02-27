
import { LeagueTable } from "./LeagueTable";

export const LeagueRank = ({ data }) => {

    let { competitionData } = data
    let leagues = competitionData.league.standings;

    return (
        <div id="leagueRank">
            <div className="leagueRank__container">
                <div className="leagueRank__table">
                    {
                        leagues.map((league, index) => (
                            <>
                                {//FASE DE GRUPOS
                                    leagues.length > 1 ?
                                        <div className="leagueRank__Group">
                                            <span className="leagueRank__group-title">Grupo {index + 1}</span>
                                            <LeagueTable key={index} data={league} />
                                        </div>
                                        :
                                        <div className="leagueRank__League">
                                            <LeagueTable key={index} data={league} />
                                        </div>

                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


