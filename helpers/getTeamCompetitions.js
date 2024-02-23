import getCompetitionInfo from "./getCompetitionInfo"

export default async function getTeamCompetitions(teamID) {
    const response = await fetch(`https://v3.football.api-sports.io/leagues?team=${teamID}&season=2023`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "c922b3c40b00126fa178ee0518f4a3d4"
        }
    });
    let searchLeague = await response.json()

    if (searchLeague.errors && searchLeague.errors.length != 0) {
        alert(searchLeague.errors.requests);
    } else {

        //FILTRA LA LIGA PARA MANDARLO COMO PRIMERA OPCION
        const teamLeague = searchLeague.response.filter(competition => competition.league.type.toLowerCase() == "league")

        //GUARDA LIGAS O COPAS CON INFORMACION ACTUALIZADA
        const competitionHaveStandings = searchLeague.response.filter(competition => competition.seasons[0].coverage.standings)


        const teamLeagueInfo = await getCompetitionInfo(teamLeague[0].league.id) //TRAE ID DE LA PRIMERA LIGA (PARA PRIMERA CARGA)

        console.log(teamLeagueInfo, competitionHaveStandings)
        if (searchLeague && teamLeagueInfo) {
            return [teamLeagueInfo, competitionHaveStandings]
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
