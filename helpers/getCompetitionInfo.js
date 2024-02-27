export default async function getCompetitionInfo(leagueID, currentCompetitionYear) {
    let response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=${currentCompetitionYear}`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "8b5fbf35cd73e51e95aad1bc370283ee"
        }
    })
    let leagueRank = await response.json()
    if (leagueRank.errors && leagueRank.errors.length != 0) {
        alert(leagueRank.errors.requests, 'EEEEE');
    } else {
        return leagueRank.response[0]
    }
}