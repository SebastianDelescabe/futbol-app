export const InfoTeam = ({ data }) => {

    const loading = data.infoLoading
    const teamName = data.teamInfo.team.name
    const teamLogo = data.teamInfo.team.logo
    const stadiumName = data.teamInfo.name
    const stadiumImage = data.teamInfo.image
    const stadiumCity = data.teamInfo.city
    const stadiumCapacity = data.teamInfo.capacity

    if(loading){
        return(<div className="loader__info-content"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>)
    }else{
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
}