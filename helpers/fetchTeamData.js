export default async function fetchteamsFetch(query) {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/teams?name=${query}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "dfdb906f7d7e282404f86ed0e3145a20"
            }
        });

        const teamsFetch = await response.json();

        if (teamsFetch.errors && teamsFetch.errors.length != 0) {
            if(teamsFetch.errors.rateLimit){
                alert(`${teamsFetch.errors.rateLimit} Error de la api disculpa las molestias :)`)
                window.history.go(-1);
            }
            alert(`${teamsFetch.errors.requests} Error de la api disculpa las molestias :)`)

        } else {
            const teamsFetchWithData = teamsFetch.response.filter(team => team.venue.id)
            return teamsFetchWithData;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
/* 
c922b3c40b00126fa178ee0518f4a3d4 
    ef58fad221ee68719ae6b7d580e3c5ff
    dfdb906f7d7e282404f86ed0e3145a20
    9c2053ba0f808e844e4147282b6d214b
    80fb935b70ddfd34d42efe7d7e248593
    a47085f2b2fcd66e93caad6b7d7f6b09
    1a188d8060a83d296f63b98303ffd77f
    8b5fbf35cd73e51e95aad1bc370283ee
    ff63ac8a4fa763467c5f73b4bb747473
    679f606edc2e73ec617c612986387614
    38fdbc96520dd2740eff02efcd4ada0b
    a3ddfc2f662520e998b7fcf1b17e59d3
    5decad014d019de1e32206c8a8f7fc61
*/