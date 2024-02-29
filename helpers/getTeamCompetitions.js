import getCompetitionInfo from "./getCompetitionInfo"

export default async function getTeamCompetitions(teamID) {
    const response = await fetch(`https://v3.football.api-sports.io/leagues?team=${teamID}&current=true`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "ef58fad221ee68719ae6b7d580e3c5ff"
        }
    });
    let searchLeague = await response.json()

    if (searchLeague.errors && searchLeague.errors.length != 0) {
        alert(searchLeague.errors.requests, 'UUUUUU');
    } else {
        //GUARDA LIGAS O COPAS QUE TRAEN INFORMACION ACTUALIZADA
        const competitionHaveStandings = searchLeague.response.filter(competition => competition.seasons[0].coverage.standings)

        const allCompetitionStanding = competitionHaveStandings.map(competition => {
            return {
                id: competition.league.id,
                logo: competition.league.logo,
                name: competition.league.name,
                country: competition.country.name,
                type: competition.league.type.toLowerCase(),
                year: competition.seasons[0].year
            }
        })

        //FILTRA OPCIONES QUE SEAN LIGA Y QUE SE ESTEN JUGANDO ACTUAlMENTE PARA PRIMERA CARGA
        const teamLeague = searchLeague.response.filter(competition => competition.league.type.toLowerCase() == "league" && competition.seasons[0].current)
        let leagueID = teamLeague[0].league.id;
        let currentCompetitionYear = teamLeague[0].seasons[0].year;

        const teamLeagueInfo = await getCompetitionInfo(leagueID, currentCompetitionYear) //TRAE ID DE LA PRIMERA LIGA (PARA PRIMERA CARGA)
        console.log(teamLeagueInfo, 'teamLeague Info');

        if (searchLeague && teamLeagueInfo) {
            return [teamLeagueInfo, allCompetitionStanding]
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
