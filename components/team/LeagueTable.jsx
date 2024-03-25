import { LeagueTeam } from "./LeagueTeam";

export const LeagueTable = ({ data }) => {
    const {league,teamID} = data
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>EQUIPO</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>DIF</th>
                        <th>PUNTOS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        league.map((teamInfo, index) => (
                            <LeagueTeam key={index} data={{teamInfo,teamID}} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}