import Link from "next/link"
import { useDispatch } from 'react-redux'
import getCompetitionInfo from "@/helpers/getCompetitionInfo";
import { getCompetitionData } from '../../app/redux/teams/teamSlice'

export const HeaderCompetitionInfo = ({ data }) => {

    const dispatch = useDispatch()

    let { allCompetitions } = data

    let name = allCompetitions[0].name;
    let country = allCompetitions[0].country;
    let logo = allCompetitions[0].logo;

    const handleOnSelect = async (e) => {
        e.preventDefault()
        //BUSCA DENTRO DE LAS OPCIONES DE COMPETENCIA LA SELECCIONADA Y ENVIA DATOS NECESARIOS
        const competitionSelected = allCompetitions.filter(competition => competition.id == e.target.value)

        const competitionInfo = await getCompetitionInfo(competitionSelected[0].id, competitionSelected[0].year)

        //GUARDA INFO EN EL REDUCER PARA LLEVARLO DE NUEVO AL HOME
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
                            <option value={competition.id} key={competition.name}>{competition.name}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    );
}


