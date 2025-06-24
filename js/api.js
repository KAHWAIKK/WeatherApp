

/**
 * @fileoverview All api related stuff like api_key, api request etc.
 * @author Kevin Kahwai
 * @license MIT
 */

'use strict';

const api_key = "5dd4a30e7580e68f9f2d79151c4bd922"

/**
 * fetch data from server
 * @param {string} URL API url
 * @param {function} callback A function that handles the response data.
 * 
*/ 
export const fetchData = function(URL , callback){
    fetch (`${URL}&appid=${api_key}`)
    .then(res => res.json()) /* The first .then() waits for the response and parses it as JSON.

    res.json() returns a promise that resolves to the actual data object. */
    .then(data => callback(data))/* Once the JSON is ready, it is passed to the callback function you provided.

    This allows the caller to handle the API response however they want (e.g., display on the UI, log to console, etc). */
}


/* we will have this url object(exporting several functions inside it) used to generate different API endpoints based on parametrs such as latitude, longotude or city names */
export const url = {
    currentWeather(lat , lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
        /* Returns the API URL for current weather data.
        It expects lat and lon (latitude and longitude).
        Appends units=metric to get temperatures in °C. */
    },
    forecast(lat , lon){
        return`https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
        /* Returns the 5-day forecast API URL for the given coordinates.
        Also includes units=metric. */
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
        /* Returns the API URL for air pollution data (e.g., CO, NO₂ levels) for the given coordinates. */
    },
    reverseGeo(lat,lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
        /* Returns a reverse geocoding API URL — it converts coordinates to place names.
        limit=5 means it will return up to 5 location matches. */
    },
    /** 
     * 
     * @param {string} query search query e.g "London"
     * 
    */
    geo(query){
        return`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
        /* Returns a geocoding API URL to convert a city name (like "London") into coordinates. */
    }
}


