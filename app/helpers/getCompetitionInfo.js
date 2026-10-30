
import { handleApiError, notifyNetworkError } from "./handleApiError";

export default async function getCompetitionInfo(leagueID, currentCompetitionYear) {

    try {
        const response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=${currentCompetitionYear}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`
            }
        })
        const leagueRank = await response.json()
        
        if (handleApiError(response, leagueRank, "No pudimos cargar la tabla de posiciones. Probá de nuevo en unos minutos.")) return null;

        return leagueRank.response[0];

    } catch (error) {
        console.error("[API-Football] No se pudo completar la solicitud de posiciones", error);
        notifyNetworkError();
        return null;
    }
}
