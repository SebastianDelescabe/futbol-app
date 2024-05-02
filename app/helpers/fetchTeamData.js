export default async function fetchteamsFetch(query) {

    try {
        let response;
        if(typeof query === 'string'){ //BUSCA POR NOMBRE
            response = await fetch(`https://v3.football.api-sports.io/teams?name=${query}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`
                }
            });
        }else{ //BUSCA POR ID 
            response = await fetch(`https://v3.football.api-sports.io/teams?id=${query}`, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "v3.football.api-sports.io",
                    "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`
                }
            });
        }

        const teamsFetch = await response.json();

        if (teamsFetch.errors && teamsFetch.errors.length != 0) {
            if(teamsFetch.errors.rateLimit){
                alert(`${teamsFetch.errors.rateLimit} Error de la api disculpa las molestias :)`)
                return;
            }
            alert(`${teamsFetch.errors.requests} Error de la api disculpa las molestias :)`)

        } else {
            const teamsFetchWithData = teamsFetch.response.filter(team => team.venue.id && !team.team.national && team.team.code)
            return teamsFetchWithData;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}