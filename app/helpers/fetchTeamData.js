import { handleApiError, notifyNetworkError } from "./handleApiError";

export default async function fetchteamsFetch(query) {

    try {
        let response;
        if(typeof query === 'string'){ //BUSCA POR NOMBRE
            const params = new URLSearchParams({ search: query.trim() });
            response = await fetch(`https://v3.football.api-sports.io/teams?${params}`, {
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
        if (handleApiError(response, teamsFetch, "No pudimos buscar equipos en este momento. Probá de nuevo en unos minutos.")) return null;

        return teamsFetch.response.filter(team => team.team && !team.team.national && team.venue);

    } catch (error) {
        console.error("Error fetching data:", error);
        notifyNetworkError();
        return null;
    }
}
