import getCompetitionInfo from "./getCompetitionInfo"

export default async function getTeamCompetitions(teamID) {
    const response = await fetch(`https://v3.football.api-sports.io/leagues?team=${teamID}&current=true`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "ff63ac8a4fa763467c5f73b4bb747473"
        }
    });
    let searchLeague = await response.json()

    if (searchLeague.errors && searchLeague.errors.length != 0) {
        if(searchLeague.errors.rateLimit){
            alert(`${searchLeague.errors.rateLimit} Error de la api disculpa las molestias :)`)
            window.history.go(-1);
        }
        alert(`${searchLeague.errors.requests} Error de la api disculpa las molestias :)`)
    } else {
        //GUARDA LIGAS O COPAS QUE TRAEN INFORMACION ACTUALIZADA
        const competitionHaveStandings = searchLeague.response.filter(competition => competition.seasons[0].coverage.standings)

        let allCompetitionStanding = competitionHaveStandings.map(competition => {
            return {
                id: competition.league.id,
                logo: competition.league.logo,
                name: competition.league.name,
                country: competition.country.name,
                type: competition.league.type.toLowerCase(),
                year: competition.seasons[0].year,
            }
        })

        //FILTRA OPCIONES QUE SEAN LIGA Y QUE SE ESTEN JUGANDO ACTUAlMENTE PARA PRIMERA CARGA
        const teamLeague = searchLeague.response.filter(competition => competition.league.type.toLowerCase() == "league" && competition.seasons[0].current)
        
        if(teamLeague[0]){
            const leagueID = teamLeague[0].league.id;
            const currentCompetitionYear = teamLeague[0].seasons[0].year;
    
            const teamLeagueInfo = await getCompetitionInfo(leagueID, currentCompetitionYear) //TRAE ID DE LA PRIMERA LIGA (PARA PRIMERA CARGA)
            
            if (searchLeague && teamLeagueInfo) {
                return [teamLeagueInfo, allCompetitionStanding]
            }
        }
        
    }

}


/* https://v3.football.api-sports.io/LEAGUES?live=all*/

/* INFO PARTIDOS EN VIVO */

/* async function x() {
    let data = await fetch("https://v3.football.api-sports.io/standings?league=39&season=2023", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "c922b3c40b00126fa178ee0518f4a3d4"
        }
    })
    let teamCompleteInfo = await data.json()
    console.log(teamCompleteInfo)

        .catch(err => {
            console.log(err);
        });

}
x() */
