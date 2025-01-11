 
# API Documentation


This is the API documentation for the Netflix API service.

## Base URL
`http://localhost:3000/weather`

### External API Host
This API uses the **Netflix API** hosted on **RapidAPI**:

`open-weather13.p.rapidapi.com`

 
Here are the headers required for all requests:

X-Rapidapi-Key: f8a41a9358msh5356d697b61ff3ep1010e9jsn323d54608026
X-Rapidapi-Host: open-weather13.p.rapidapi.com


## Endpoints

### 1. Search weather by city

**URL**: `http://localhost:3000/weather/city/manila/EN`

**Method**: `GET`

#### Query Parameters:
- city = manila

**Response**:
```json

{
    "location": "Manila, PH",
    "weather": {
        "condition": "Clouds",
        "description": "overcast clouds",
        "icon_url": "https://openweathermap.org/img/wn/04n@2x.png"
    },
    "temperature": {
        "current": "78.37°F",
        "min": "77.99°F",
        "max": "79.11°F",
        "feels_like": "79.66°F"
    },
    "wind": {
        "speed": "5.01 m/s",
        "direction": "17°"
    },
    "humidity": "80%",
    "visibility": "10 km",
    "pressure": "1016 hPa",
    "sunrise": "06:23 AM",
    "sunset": "05:43 PM",
    "last_updated": "1 minute ago"
}


### Endpoint: Get lat/lon

### 2. get the weather lat lon


### Method: `GET`
### URL: `/latlon`
This endpoint retrieves information about weather getting latlon.

#### Full Request Example:

http://localhost:3000/weather/latlon/30.438/-89.1028

#### Query Parameters:
- lat/ lon

**Response**:

```json

{
    "location": "West Gulfport, US",
    "weather": {
        "condition": "Clouds",
        "description": "overcast clouds",
        "icon_url": "https://openweathermap.org/img/wn/04d@2x.png"
    },
    "temperature": {
        "current": "276.8°F",
        "min": "275.95°F",
        "max": "277.15°F",
        "feels_like": "273.28°F"
    },
    "wind": {
        "speed": "4.12 m/s",
        "direction": "330°"
    },
    "humidity": "83%",
    "visibility": "10 km",
    "pressure": "1019 hPa",
    "sunrise": "08:54 PM",
    "sunset": "07:14 AM",
    "last_updated": "1 minute ago"
}


