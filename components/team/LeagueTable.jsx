import { LeagueTeam } from "./LeagueTeam";

export const LeagueTable = ({ data }) => {
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
                        data.map((team, index) => (
                            <LeagueTeam key={index} data={team} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}