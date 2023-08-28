export default async function getLeagueRank(leagueID) {
    let response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=2023`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "c922b3c40b00126fa178ee0518f4a3d4"
        }
    })
    let leagueRank = await response.json()

    if (leagueRank.errors && leagueRank.errors.length != 0) {
        alert(leagueRank.errors.requests);
    } else {
        return leagueRank.response[0]
    }
}