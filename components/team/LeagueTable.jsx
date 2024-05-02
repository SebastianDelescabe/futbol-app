import { LeagueTeam } from "./LeagueTeam";

export const LeagueTable = ({ data }) => {
    const {league,teamID,setInfoLoading} = data
    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>EQUIPO</th>
                        <th>PTS</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>DIF</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        league.map((teamInfo, index) => (
                            <LeagueTeam key={index} data={{teamInfo,teamID,setInfoLoading}} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}