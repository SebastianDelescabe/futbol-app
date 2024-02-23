import { useDispatch } from 'react-redux'
import { LeagueTable } from "./LeagueTable";
import getCompetitionInfo from "@/helpers/getCompetitionInfo";
import { getCompetitionId } from '../../app/redux/teams/teamSlice'

export const LeagueRank = ({ data }) => {

    const dispatch = useDispatch()

    let { competitionData, allCompetitions } = data

    console.log(competitionData);

    let name = competitionData.league.name;
    let country = competitionData.league.country;
    let logo = competitionData.league.logo;
    let leagues = competitionData.league.standings;

    const handleOnSelect = async (e) => {
        /*  ACTUALIZA EN EL ESTADO REDUX LA COMPETENCIA SELECCIONADA */
        e.preventDefault()
        let competitionInfo = await getCompetitionInfo(e.target.value)

        if (competitionInfo) {
            dispatch(getCompetitionId(competitionInfo))
        }
    }

    return (
        <div id="leagueRank">
            <div className="leagueRank__container">
                <div className="leagueRank__container-info">
                    <div>
                        <img src={logo} alt="" />
                        <div className="leagueRank__text-head">
                            <h1>{name}</h1>
                            <span><em>{country}</em></span>
                        </div>
                    </div>
                    <form className="leagueRank__select-Competition">
                        <span>Elegir Competencia</span>
                        <select onChange={handleOnSelect} name="select-competition" id="select__team-competition">
                            {
                                allCompetitions && allCompetitions.map(competition => (
                                    <option value={competition.league.id} key={competition.league.name}>{competition.league.name}</option>
                                ))
                            }
                        </select>
                    </form>
                </div>
                <div className="leagueRank__table">
                    {
                        leagues.map((league, index) => (
                            <>
                                {
                                    leagues.length > 1 && <span className="leagueRank__group-title">Grupo {index + 1}</span> //FASE DE GRUPOS
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


