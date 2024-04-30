import Link from "next/link"
import { useDispatch } from 'react-redux'
import getCompetitionInfo from "@/app/helpers/getCompetitionInfo";
import { getCompetitionData } from '../../app/redux/teams/teamSlice'

export const HeaderCompetitionInfo = ({ data }) => {

    const dispatch = useDispatch()

    let { allCompetitions, competitionData } = data

    let name = competitionData.league.name;
    let country = competitionData.league.country;
    let logo = competitionData.league.logo;

    const handleOnSelect = async (e) => {
        e.preventDefault()
        const competitionSelected = allCompetitions.filter(competition => competition.id == e.target.value)
        const competitionInfo = await getCompetitionInfo(competitionSelected[0].id, competitionSelected[0].year)

        //GUARDA INFO EN EL REDUCER PARA LLEVARLO AL HOME Y RENDERIZAR DE NUEVO
        if (competitionInfo) {
            dispatch(getCompetitionData([competitionSelected[0].id, competitionSelected[0].year]))
        }
    }

    return (
        <div className="headerCompetitionInfo">
            <Link href='/' className="button-select-team">
                <button>Cambiar Equipo</button>
            </Link>
            <div>
                <img src={logo} alt="" />
                <div className="headerCompetitionInfo__text-head">
                    <h1>{name}</h1>
                    <span><em>{country}</em></span>
                </div>
            </div>
            <form className="headerCompetitionInfo__select-competition">
                <span>Elegir Competencia</span>
                <select onChange={handleOnSelect} name="select-competition" id="select__team-competition">
                    {
                        allCompetitions && allCompetitions.map(competition => (
                            //Ternario deshabilita competicion usada acutlamente del selector de competencias
                            competition.id === competitionData.league.id ?
                            <option value={competition.id} disabled selected key={competition.name}>{competition.name}</option>
                            :
                            <option value={competition.id} key={competition.name}>{competition.name}</option>

                        ))
                    }
                </select>
            </form>
        </div>
    );
}


