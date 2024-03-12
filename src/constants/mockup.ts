export interface Clothes {
  id: number;
  label: string;
}
// https://api.openweathermap.org/data/3.0/onecall?lat=37.59996944&lon=126.9312417&exclude=current,minutely,daily,alerts&appid={}&units=metric&lang=kr
export const HOURLY = {
  lat: 37.6,
  lon: 126.9312,
  timezone: "Asia/Seoul",
  timezone_offset: 32400,
  hourly : [
    {
        "dt": 1710180000,
        "temp": 28.76,
        "feels_like": 32.74,
        "pressure": 1016,
        "humidity": 73,
        "dew_point": 23.44,
        "uvi": 0,
        "clouds": 87,
        "visibility": 10000,
        "wind_speed": 4.92,
        "wind_deg": 28,
        "wind_gust": 5.01,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04n"
            }
        ],
        "pop": 0.06,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710183600,
        "temp": 3.29,
        "feels_like": 3.29,
        "pressure": 1015,
        "humidity": 81,
        "dew_point": 0.35,
        "uvi": 0,
        "clouds": 90,
        "visibility": 10000,
        "wind_speed": 1.01,
        "wind_deg": 348,
        "wind_gust": 1.55,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04n"
            }
        ],
        "pop": 0.5,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710187200,
        "temp": 3.84,
        "feels_like": 3.84,
        "pressure": 1015,
        "humidity": 80,
        "dew_point": 0.71,
        "uvi": 0,
        "clouds": 92,
        "visibility": 10000,
        "wind_speed": 1.11,
        "wind_deg": 14,
        "wind_gust": 1.86,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710190800,
        "temp": 4.35,
        "feels_like": 4.35,
        "pressure": 1015,
        "humidity": 79,
        "dew_point": 1.03,
        "uvi": 0,
        "clouds": 95,
        "visibility": 10000,
        "wind_speed": 0.9,
        "wind_deg": 20,
        "wind_gust": 1.44,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710194400,
        "temp": 4.87,
        "feels_like": 4.87,
        "pressure": 1015,
        "humidity": 79,
        "dew_point": 1.54,
        "uvi": 0,
        "clouds": 97,
        "visibility": 10000,
        "wind_speed": 0.81,
        "wind_deg": 29,
        "wind_gust": 1.27,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710198000,
        "temp": 5.52,
        "feels_like": 5.52,
        "pressure": 1015,
        "humidity": 78,
        "dew_point": 1.76,
        "uvi": 0.1,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 0.79,
        "wind_deg": 354,
        "wind_gust": 1.27,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710201600,
        "temp": 5.82,
        "feels_like": 5.82,
        "pressure": 1016,
        "humidity": 75,
        "dew_point": 1.59,
        "uvi": 0.34,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.04,
        "wind_deg": 335,
        "wind_gust": 1.75,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710205200,
        "temp": 6.14,
        "feels_like": 5.23,
        "pressure": 1016,
        "humidity": 73,
        "dew_point": 1.46,
        "uvi": 0.37,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.51,
        "wind_deg": 338,
        "wind_gust": 2.39,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710208800,
        "temp": 6.64,
        "feels_like": 5.34,
        "pressure": 1016,
        "humidity": 70,
        "dew_point": 1.28,
        "uvi": 0.71,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 1.94,
        "wind_deg": 342,
        "wind_gust": 3.16,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710212400,
        "temp": 7.43,
        "feels_like": 6.12,
        "pressure": 1016,
        "humidity": 64,
        "dew_point": 0.89,
        "uvi": 0.95,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.09,
        "wind_deg": 339,
        "wind_gust": 3.21,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710216000,
        "temp": 8.73,
        "feels_like": 7.48,
        "pressure": 1015,
        "humidity": 55,
        "dew_point": 0.05,
        "uvi": 3.16,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 2.29,
        "wind_deg": 333,
        "wind_gust": 3.29,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710219600,
        "temp": 9.74,
        "feels_like": 8.39,
        "pressure": 1014,
        "humidity": 48,
        "dew_point": -0.84,
        "uvi": 1.65,
        "clouds": 99,
        "visibility": 10000,
        "wind_speed": 2.69,
        "wind_deg": 331,
        "wind_gust": 3.7,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710223200,
        "temp": 10.22,
        "feels_like": 8.45,
        "pressure": 1014,
        "humidity": 44,
        "dew_point": -1.56,
        "uvi": 1.35,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 3.06,
        "wind_deg": 339,
        "wind_gust": 4.33,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710226800,
        "temp": 10.38,
        "feels_like": 8.57,
        "pressure": 1014,
        "humidity": 42,
        "dew_point": -2.11,
        "uvi": 0.71,
        "clouds": 100,
        "visibility": 10000,
        "wind_speed": 3.33,
        "wind_deg": 346,
        "wind_gust": 4.85,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0.25,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710230400,
        "temp": 10.53,
        "feels_like": 8.66,
        "pressure": 1015,
        "humidity": 39,
        "dew_point": -3.16,
        "uvi": 0.33,
        "clouds": 98,
        "visibility": 10000,
        "wind_speed": 3.56,
        "wind_deg": 351,
        "wind_gust": 5.23,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0.25,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710234000,
        "temp": 10.11,
        "feels_like": 8.19,
        "pressure": 1015,
        "humidity": 39,
        "dew_point": -3.29,
        "uvi": 0,
        "clouds": 85,
        "visibility": 10000,
        "wind_speed": 3.45,
        "wind_deg": 354,
        "wind_gust": 5.32,
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "온흐림",
                "icon": "04d"
            }
        ],
        "pop": 0.2,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710237600,
        "temp": 9.26,
        "feels_like": 7.83,
        "pressure": 1016,
        "humidity": 43,
        "dew_point": -3.03,
        "uvi": 0,
        "clouds": 70,
        "visibility": 10000,
        "wind_speed": 2.67,
        "wind_deg": 342,
        "wind_gust": 5.41,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "튼구름",
                "icon": "04n"
            }
        ],
        "pop": 0.17,
        "clothes": [
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            }
        ]
    },
    {
        "dt": 1710241200,
        "temp": 8.63,
        "feels_like": 7.57,
        "pressure": 1017,
        "humidity": 45,
        "dew_point": -2.8,
        "uvi": 0,
        "clouds": 59,
        "visibility": 10000,
        "wind_speed": 2.03,
        "wind_deg": 324,
        "wind_gust": 4.11,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "튼구름",
                "icon": "04n"
            }
        ],
        "pop": 0.17,
        "clothes": [
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710244800,
        "temp": 8.02,
        "feels_like": 6.85,
        "pressure": 1017,
        "humidity": 48,
        "dew_point": -2.62,
        "uvi": 0,
        "clouds": 50,
        "visibility": 10000,
        "wind_speed": 2.04,
        "wind_deg": 304,
        "wind_gust": 3.99,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "구름조금",
                "icon": "03n"
            }
        ],
        "pop": 0.08,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710248400,
        "temp": 7.22,
        "feels_like": 5.5,
        "pressure": 1018,
        "humidity": 47,
        "dew_point": -3.51,
        "uvi": 0,
        "clouds": 6,
        "visibility": 10000,
        "wind_speed": 2.54,
        "wind_deg": 298,
        "wind_gust": 5.89,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710252000,
        "temp": 6.45,
        "feels_like": 4.95,
        "pressure": 1019,
        "humidity": 45,
        "dew_point": -4.79,
        "uvi": 0,
        "clouds": 5,
        "visibility": 10000,
        "wind_speed": 2.11,
        "wind_deg": 287,
        "wind_gust": 5.09,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710255600,
        "temp": 5.89,
        "feels_like": 4.6,
        "pressure": 1019,
        "humidity": 45,
        "dew_point": -5.23,
        "uvi": 0,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 1.81,
        "wind_deg": 282,
        "wind_gust": 4.07,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 6,
                "label": "바지"
            }
        ]
    },
    {
        "dt": 1710259200,
        "temp": 5.41,
        "feels_like": 4.05,
        "pressure": 1019,
        "humidity": 46,
        "dew_point": -5.36,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 1.81,
        "wind_deg": 276,
        "wind_gust": 3.94,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710262800,
        "temp": 4.9,
        "feels_like": 3.26,
        "pressure": 1020,
        "humidity": 48,
        "dew_point": -5.31,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 1.99,
        "wind_deg": 275,
        "wind_gust": 4.49,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 11,
                "label": "청바지"
            }
        ]
    },
    {
        "dt": 1710266400,
        "temp": 4.51,
        "feels_like": 2.53,
        "pressure": 1020,
        "humidity": 50,
        "dew_point": -5.22,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 2.27,
        "wind_deg": 270,
        "wind_gust": 5.34,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710270000,
        "temp": 4.25,
        "feels_like": 2.21,
        "pressure": 1021,
        "humidity": 51,
        "dew_point": -5.1,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.28,
        "wind_deg": 273,
        "wind_gust": 5.8,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710273600,
        "temp": 4.01,
        "feels_like": 2.58,
        "pressure": 1021,
        "humidity": 52,
        "dew_point": -5.14,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 1.68,
        "wind_deg": 275,
        "wind_gust": 3.53,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710277200,
        "temp": 3.69,
        "feels_like": 3.69,
        "pressure": 1021,
        "humidity": 53,
        "dew_point": -5.1,
        "uvi": 0,
        "clouds": 2,
        "visibility": 10000,
        "wind_speed": 1.32,
        "wind_deg": 260,
        "wind_gust": 1.74,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710280800,
        "temp": 3.42,
        "feels_like": 3.42,
        "pressure": 1021,
        "humidity": 55,
        "dew_point": -5.09,
        "uvi": 0,
        "clouds": 3,
        "visibility": 10000,
        "wind_speed": 0.94,
        "wind_deg": 252,
        "wind_gust": 1.07,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710284400,
        "temp": 4.19,
        "feels_like": 4.19,
        "pressure": 1021,
        "humidity": 51,
        "dew_point": -5.21,
        "uvi": 0.34,
        "clouds": 18,
        "visibility": 10000,
        "wind_speed": 0.74,
        "wind_deg": 232,
        "wind_gust": 1.1,
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "약간의 구름이 낀 하늘",
                "icon": "02d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710288000,
        "temp": 5.39,
        "feels_like": 5.39,
        "pressure": 1022,
        "humidity": 42,
        "dew_point": -6.7,
        "uvi": 1.05,
        "clouds": 31,
        "visibility": 10000,
        "wind_speed": 1.19,
        "wind_deg": 223,
        "wind_gust": 1.75,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "구름조금",
                "icon": "03d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710291600,
        "temp": 6.81,
        "feels_like": 5.29,
        "pressure": 1022,
        "humidity": 36,
        "dew_point": -7.6,
        "uvi": 2.07,
        "clouds": 79,
        "visibility": 10000,
        "wind_speed": 2.21,
        "wind_deg": 234,
        "wind_gust": 3.86,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "튼구름",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710295200,
        "temp": 8.25,
        "feels_like": 6.23,
        "pressure": 1022,
        "humidity": 31,
        "dew_point": -8.19,
        "uvi": 3.11,
        "clouds": 75,
        "visibility": 10000,
        "wind_speed": 3.3,
        "wind_deg": 244,
        "wind_gust": 6.04,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "튼구름",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710298800,
        "temp": 9.44,
        "feels_like": 6.88,
        "pressure": 1021,
        "humidity": 29,
        "dew_point": -8.16,
        "uvi": 3.76,
        "clouds": 54,
        "visibility": 10000,
        "wind_speed": 5.03,
        "wind_deg": 254,
        "wind_gust": 8.42,
        "weather": [
            {
                "id": 803,
                "main": "Clouds",
                "description": "튼구름",
                "icon": "04d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710302400,
        "temp": 10.02,
        "feels_like": 7.83,
        "pressure": 1021,
        "humidity": 29,
        "dew_point": -7.38,
        "uvi": 3.76,
        "clouds": 41,
        "visibility": 10000,
        "wind_speed": 6.17,
        "wind_deg": 256,
        "wind_gust": 9.82,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "구름조금",
                "icon": "03d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710306000,
        "temp": 10.2,
        "feels_like": 8.09,
        "pressure": 1020,
        "humidity": 31,
        "dew_point": -6.49,
        "uvi": 3.19,
        "clouds": 33,
        "visibility": 10000,
        "wind_speed": 6.63,
        "wind_deg": 258,
        "wind_gust": 10.3,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "구름조금",
                "icon": "03d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710309600,
        "temp": 10.24,
        "feels_like": 8.13,
        "pressure": 1019,
        "humidity": 31,
        "dew_point": -6.44,
        "uvi": 2.23,
        "clouds": 27,
        "visibility": 10000,
        "wind_speed": 6.77,
        "wind_deg": 258,
        "wind_gust": 10.9,
        "weather": [
            {
                "id": 802,
                "main": "Clouds",
                "description": "구름조금",
                "icon": "03d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710313200,
        "temp": 10.1,
        "feels_like": 7.98,
        "pressure": 1019,
        "humidity": 31,
        "dew_point": -6.58,
        "uvi": 1.18,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.83,
        "wind_deg": 258,
        "wind_gust": 11.31,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710316800,
        "temp": 9.51,
        "feels_like": 6.38,
        "pressure": 1019,
        "humidity": 35,
        "dew_point": -5.69,
        "uvi": 0.43,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 6.76,
        "wind_deg": 257,
        "wind_gust": 11.4,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710320400,
        "temp": 8.64,
        "feels_like": 5.58,
        "pressure": 1020,
        "humidity": 43,
        "dew_point": -3.61,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 5.82,
        "wind_deg": 254,
        "wind_gust": 11.38,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01d"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 12,
                "label": "원피스"
            }
        ]
    },
    {
        "dt": 1710324000,
        "temp": 7.66,
        "feels_like": 4.7,
        "pressure": 1020,
        "humidity": 52,
        "dew_point": -1.81,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 4.91,
        "wind_deg": 249,
        "wind_gust": 11.88,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            }
        ]
    },
    {
        "dt": 1710327600,
        "temp": 7.19,
        "feels_like": 4.48,
        "pressure": 1021,
        "humidity": 55,
        "dew_point": -1.43,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 4.14,
        "wind_deg": 249,
        "wind_gust": 11.45,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710331200,
        "temp": 6.89,
        "feels_like": 4.44,
        "pressure": 1021,
        "humidity": 57,
        "dew_point": -1.22,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 3.53,
        "wind_deg": 247,
        "wind_gust": 10.3,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710334800,
        "temp": 6.54,
        "feels_like": 4.45,
        "pressure": 1021,
        "humidity": 60,
        "dew_point": -0.87,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.86,
        "wind_deg": 244,
        "wind_gust": 9,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 9,
                "label": "패딩"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710338400,
        "temp": 6.2,
        "feels_like": 4.24,
        "pressure": 1021,
        "humidity": 64,
        "dew_point": -0.42,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.6,
        "wind_deg": 240,
        "wind_gust": 8.12,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 6,
                "label": "바지"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 10,
                "label": "티셔츠"
            },
            {
                "id": 11,
                "label": "청바지"
            },
            {
                "id": 12,
                "label": "원피스"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710342000,
        "temp": 5.79,
        "feels_like": 3.84,
        "pressure": 1021,
        "humidity": 67,
        "dew_point": 0.1,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.49,
        "wind_deg": 237,
        "wind_gust": 7.26,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 6,
                "label": "바지"
            }
        ]
    },
    {
        "dt": 1710345600,
        "temp": 5.55,
        "feels_like": 3.85,
        "pressure": 1021,
        "humidity": 71,
        "dew_point": 0.46,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.16,
        "wind_deg": 234,
        "wind_gust": 5.75,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 3,
                "label": "모자"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 7,
                "label": "셔츠"
            },
            {
                "id": 13,
                "label": "스커트"
            }
        ]
    },
    {
        "dt": 1710349200,
        "temp": 5.22,
        "feels_like": 3.61,
        "pressure": 1021,
        "humidity": 74,
        "dew_point": 0.81,
        "uvi": 0,
        "clouds": 0,
        "visibility": 10000,
        "wind_speed": 2.01,
        "wind_deg": 225,
        "wind_gust": 4.69,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "맑음",
                "icon": "01n"
            }
        ],
        "pop": 0,
        "clothes": [
            {
                "id": 0,
                "label": "목도리"
            },
            {
                "id": 1,
                "label": "코트"
            },
            {
                "id": 2,
                "label": "장갑"
            },
            {
                "id": 4,
                "label": "스카프"
            },
            {
                "id": 5,
                "label": "양말"
            },
            {
                "id": 8,
                "label": "니트"
            },
            {
                "id": 11,
                "label": "청바지"
            }
        ]
    }
]
};
