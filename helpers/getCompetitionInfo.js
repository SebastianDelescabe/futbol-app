export default async function getCompetitionInfo(leagueID, currentCompetitionYear) {
    try {
        let response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=${currentCompetitionYear}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "ff63ac8a4fa763467c5f73b4bb747473"
            }
        })
        let leagueRank = await response.json()
        
        if (leagueRank.errors && leagueRank.errors.length != 0) {
            if(leagueRank.errors.rateLimit){
                alert(`${leagueRank.errors.rateLimit} Error de la api disculpa las molestias :)`)
                window.history.go(-1);
            }
            alert(`${leagueRank.errors.requests} Error de la api disculpa las molestias :)`)
        }else{
            return leagueRank.response[0]
        }

    } catch (error) {
        console.log(error);
    }
}