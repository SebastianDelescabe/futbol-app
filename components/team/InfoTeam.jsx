export const InfoTeam = ({ data }) => {

    let teamName = data.teamInfo.team.name
    let teamLogo = data.teamInfo.team.logo
    let stadiumName = data.teamInfo.name
    let stadiumImage = data.teamInfo.image
    let stadiumCity = data.teamInfo.city
    let stadiumCapacity = data.teamInfo.capacity

    return (
        <div id="infoTeam">
            <div className="infoTeam__container">
                <div className="infoTeam__container-stadium-text">
                    <div>
                        <div className="infoTeam__container-title">
                            <img src={teamLogo} alt="" />
                            <h1>{teamName}</h1>
                        </div>
                        <div className="infoTeam__container-text">
                            <span>{stadiumName}</span>
                            <span>Ciudad de {stadiumCity}</span>
                            <span>Capacidad para <em>{stadiumCapacity.toLocaleString('es-ES', { minimumFractionDigits: 0 })}</em> personas</span>
                        </div>
                    </div>
                    <img src={stadiumImage} alt="" />
                </div>
            </div>
        </div>
    )
}