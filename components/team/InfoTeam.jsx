export const InfoTeam = ({ data }) => {

    let teamName = data.team.name
    let teamLogo = data.team.logo
    let stadiumName = data.name
    let stadiumImage = data.image
    let stadiumCity = data.city
    let stadiumCapacity = data.capacity

    return (
        <div id="infoTeam">
            <div className="infoTeam__container">
                <div className="infoTeam__container-team-text">
                    <img src={teamLogo} alt="" />
                    <h1>{teamName}</h1>
                    <p>posicion</p>
                </div>
                <div className="infoTeam__container-stadium-text">
                    <p>{stadiumName}</p>
                    <p>Ciudad de {stadiumCity}</p>
                    <p>Capacidad para {stadiumCapacity.toLocaleString('es-ES', { minimumFractionDigits: 0 })} personas</p>
                    <img src={stadiumImage} alt="" />
                </div>
            </div>
        </div>
    )
}