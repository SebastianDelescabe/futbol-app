import getLeagueRank from "./getLeagueRank"

export default async function getTeamLeague(teamID) {
    const response = await fetch(`https://v3.football.api-sports.io/leagues?team=${teamID}`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "c922b3c40b00126fa178ee0518f4a3d4"
        }
    });
    let searchLeague = await response.json()
    let leagueID = searchLeague.response[0].league.id;

    /* let leagueID = 39 */
    return getLeagueRank(leagueID)
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
