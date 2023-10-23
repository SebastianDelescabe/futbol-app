import Link from "next/link"

export const InfoTeam = ({ data }) => {

    let teamName = data.teamInfo.team.name
    let teamLogo = data.teamInfo.team.logo
    let stadiumName = data.teamInfo.name
    let stadiumImage = data.teamInfo.image
    let stadiumCity = data.teamInfo.city
    let stadiumCapacity = data.teamInfo.capacity
    let position = data.teamPosition

    return (
        <div id="infoTeam">
            <div className="infoTeam__container">
                <div className="infoTeam__container-team-text">
                    <img src={teamLogo} alt="" />
                    <h1>{teamName}</h1>
                    <p>Posición: {position} °</p>
                </div>
                <div className="infoTeam__container-stadium-text">
                    <p>{stadiumName}</p>
                    <p>Ciudad de {stadiumCity}</p>
                    <p>Capacidad para <em>{stadiumCapacity.toLocaleString('es-ES', { minimumFractionDigits: 0 })}</em> personas</p>
                    <img src={stadiumImage} alt="" />
                </div>
                <Link href='/'>
                    <button>Elegir otro equipo</button>
                </Link>
            </div>
        </div>
    )
}