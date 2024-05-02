const recomendedTeams = [
    {
      "team": {
          "id": 435,
          "name": "River Plate",
          "code": "RIV",
          "country": "Argentina",
          "founded": 1901,
          "national": false,
          "logo": "https://media.api-sports.io/football/teams/435.png"
      },
      "venue": {
          "id": 19570,
          "name": "Estadio Mâs Monumental",
          "address": "Avenida Presidente José Figueroa Alcorta 7597, Núñez",
          "city": "Capital Federal, Ciudad de Buenos Aires",
          "capacity": 83214,
          "image": "https://media.api-sports.io/football/venues/19570.png"
      }
    },
    {
        team: {
          id: 451,
          name: 'Boca Juniors',
          code: 'BOC',
          country: 'Argentina',
          founded: 1905,
          national: false,
          logo: 'https://media.api-sports.io/football/teams/451.png'
        },
        venue: {
          id: 46,
          name: 'Estadio Alberto José Armando',
          address: 'Brandsen 805, La Boca',
          city: 'Ciudad de Buenos Aires',
          capacity: 49000,
          surface: 'grass',
          image: 'https://media.api-sports.io/football/venues/46.png'
        }
    },
    {
        "team": {
            "id": 50,
            "name": "Manchester City",
            "code": "MAC",
            "country": "England",
            "founded": 1880,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/50.png"
        },
        "venue": {
            "id": 555,
            "name": "Etihad Stadium",
            "address": "Rowsley Street",
            "city": "Manchester",
            "capacity": 55097,
            "image": "https://media.api-sports.io/football/venues/555.png"
        }
    },
    {
        "team": {
            "id": 541,
            "name": "Real Madrid",
            "code": "REA",
            "country": "Spain",
            "founded": 1902,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/541.png"
        },
        "venue": {
            "id": 1456,
            "name": "Estadio Santiago Bernabéu",
            "address": "Avenida de Concha Espina 1, Chamartín",
            "city": "Madrid",
            "capacity": 85454,
            "image": "https://media.api-sports.io/football/venues/1456.png"
        }
    },
    {
        "team": {
            "id": 529,
            "name": "Barcelona",
            "code": "BAR",
            "country": "Spain",
            "founded": 1899,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/529.png"
        },
        "venue": {
            "id": 19939,
            "name": "Estadi Olímpic Lluís Companys",
            "address": "Carrer de l&apos;Estadi",
            "city": "Barcelona",
            "capacity": 55926,
            "image": "https://media.api-sports.io/football/venues/19939.png"
        }
    },
    {
        "team": {
            "id": 127,
            "name": "Flamengo",
            "code": "FLA",
            "country": "Brazil",
            "founded": 1895,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/127.png"
        },
        "venue": {
            "id": 204,
            "name": "Estadio Jornalista Mário Filho (Maracanã)",
            "address": "Rua Professor Eurico Rabelo, Maracanã",
            "city": "Rio de Janeiro, Rio de Janeiro",
            "capacity": 78838,
            "image": "https://media.api-sports.io/football/venues/204.png"
        }
    },
    {
        "team": {
            "id": 453,
            "name": "Independiente",
            "code": "IND",
            "country": "Argentina",
            "founded": 1905,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/453.png"
        },
        "venue": {
            "id": 7131,
            "name": "Estadio Libertadores de América",
            "address": "Calle Ricardo Enrique Bochini 751/83 esq. Alsina",
            "city": "Avellaneda, Provincia de Buenos Aires",
            "capacity": 52364,
            "image": "https://media.api-sports.io/football/venues/7131.png"
        }
    },
    {
        "team": {
            "id": 436,
            "name": "Racing Club",
            "code": "RAC",
            "country": "Argentina",
            "founded": 1903,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/436.png"
        },
        "venue": {
            "id": 99,
            "name": "Estadio Presidente Juan Domingo Perón",
            "address": "Calle Mozart y Orestes Omar Corbatta",
            "city": "Avellaneda, Provincia de Buenos Aires",
            "capacity": 51500,
            "image": "https://media.api-sports.io/football/venues/99.png"
        }
    },
    {
        "team": {
            "id": 40,
            "name": "Liverpool",
            "code": "LIV",
            "country": "England",
            "founded": 1892,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/40.png"
        },
        "venue": {
            "id": 550,
            "name": "Anfield",
            "address": "Anfield Road",
            "city": "Liverpool",
            "capacity": 55212,
            "image": "https://media.api-sports.io/football/venues/550.png"
        }
    },
    {
        "team": {
            "id": 85,
            "name": "Paris Saint Germain",
            "code": "PAR",
            "country": "France",
            "founded": 1970,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/85.png"
        },
        "venue": {
            "id": 671,
            "name": "Parc des Princes",
            "address": "24, rue du Commandant Guilbaud",
            "city": "Paris",
            "capacity": 47929,
            "image": "https://media.api-sports.io/football/venues/671.png"
        }
    },
    {
        "team": {
            "id": 460,
            "name": "San Lorenzo",
            "code": "LOR",
            "country": "Argentina",
            "founded": 1908,
            "national": false,
            "logo": "https://media.api-sports.io/football/teams/460.png"
        },
        "venue": {
            "id": 103,
            "name": "Estadio Pedro Bidegaín",
            "address": "Avenida Perito Moreno y Avenida Varela 1437",
            "city": "Capital Federal, Ciudad de Buenos Aires",
            "capacity": 43494,
            "image": "https://media.api-sports.io/football/venues/103.png"
        }
    }
]

export default recomendedTeams