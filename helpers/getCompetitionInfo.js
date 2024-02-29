export default async function getCompetitionInfo(leagueID, currentCompetitionYear) {
    try {
        let response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=${currentCompetitionYear}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "ef58fad221ee68719ae6b7d580e3c5ff"
            }
        })
        let leagueRank = await response.json()
        if (leagueRank.errors && leagueRank.errors.length != 0) {
            alert(leagueRank.errors.requests, 'EEEEE');
        } else {
            return leagueRank.response[0]
        }

    } catch (error) {
        console.log(error);
    }
}