export default async function fetchData(query) {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/teams?name=${query}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "c922b3c40b00126fa178ee0518f4a3d4"
            }
        });

        const data = await response.json();
        /*         const data = {
                    "get": "teams",
                    "parameters": {
                        "id": "33"
                    },
                    "errors": [],
                    "results": 1,
                    "paging": {
                        "current": 1,
                        "total": 1
                    },
                    "response": [
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
                        {
                            "team": {
                                "id": 33,
                                "name": "Manchester United",
                                "code": "MUN",
                                "country": "England",
                                "founded": 1878,
                                "national": false,
                                "logo": "https://media.api-sports.io/football/teams/33.png"
                            },
                            "venue": {
                                "id": 556,
                                "name": "Old Trafford",
                                "address": "Sir Matt Busby Way",
                                "city": "Manchester",
                                "capacity": 76212,
                                "surface": "grass",
                                "image": "https://media.api-sports.io/football/venues/556.png"
                            },
        
                        },
        
                    ]
                } */

        if (data.errors && data.errors.length != 0) {
            alert(data.errors.requests);
        } else {
            return data;
        }

    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
/* c922b3c40b00126fa178ee0518f4a3d4 */
/* e3835ceb3ab0bcff23ceda72bc9b48f1 */