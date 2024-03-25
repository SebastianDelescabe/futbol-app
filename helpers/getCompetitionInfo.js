export default async function getCompetitionInfo(leagueID, currentCompetitionYear) {
    try {
        let response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=${currentCompetitionYear}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "a47085f2b2fcd66e93caad6b7d7f6b09nn"
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