
import { handleApiError, notifyNetworkError } from "./handleApiError";

export default async function getCompetitionInfo(leagueID, currentCompetitionYear) {

    try {
        // El plan Free de API-Football solo permite consultar temporadas hasta 2024.
        const season = Math.min(Number(currentCompetitionYear), 2024);
        const usedFallbackSeason = season !== Number(currentCompetitionYear);
        const response = await fetch(`https://v3.football.api-sports.io/standings?league=${leagueID}&season=${season}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": `${process.env.NEXT_PUBLIC_API_KEY}`
            }
        })
        const leagueRank = await response.json()
        
        if (handleApiError(response, leagueRank, "No pudimos cargar la tabla de posiciones. Probá de nuevo en unos minutos.")) return null;

        if (!leagueRank.response?.[0]) return null;

        return {
            ...leagueRank.response[0],
            usedFallbackSeason,
            requestedSeason: Number(currentCompetitionYear),
        };

    } catch (error) {
        console.error("[API-Football] No se pudo completar la solicitud de posiciones", error);
        notifyNetworkError();
        return null;
    }
}
