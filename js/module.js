

/* 
-A module is a file that encapsulates logic and allows controlled sharing of functionality across your codebase.
-Modules are self-contained blocks of code that can export functions, variables, classes, or objects, and then be imported into other files.
-Without modules, all your variables and functions live in the global scope — this can get messy and cause naming conflicts.

Using modules, you can isolate code and only share what’s needed.
 */
/**
 * @fileoverview all module functions
 * @author Kevin Kahwai
 * @license MIT
 */

'use strict';
/* 
This is a string array that holds the names of the 7 days of the week.

The order matches what you’d get from new Date().getDay() (which returns 0 for Sunday, 1 for Monday, etc.).
*/
export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    /* a string array that holds the names of the 7 days of the week. */
];

export const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
    /* a string array that holds the names of the 12 months of an year */
];

/** 
 * 
 * @param {number} dateUnix unix date in seconds
 * @param {number} timezone timezone shift from utc in seconds
 * @returns {string} Date string format "Sunday 10 Jan"
 * */ 


/* export const getDate defines a named export function that takes two parameters 1.dateUnix (a unix timestamp in seconds) and 2. timezone( an offset in seconds) */
export const getDate = function(dateUnix , timezone) {
    const date = new Date((dateUnix + timezone) * 1000)//creates a new Date object using a timestamp in milliseconds,unix timesstamps are in seconds, but the date constructor expects in milliseconds thus we multiply by 1000
    const weekDayName = weekDayNames[date.getUTCDay()];
    /* date.getUTCDay() returns a number from 0 (Sunday) to 6 (Saturday).
    weekDayNames[] is an array of weekday names.
    This line fetches the name of the weekday for the date. */
    const monthName = monthNames[date.getUTCMonth()]
    /* getUTCMonth() returns a number from 0 (January) to 11 (December).
    This retrieves the month name from a predefined monthNames[] array (assumed to be imported or defined). */

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
    /* getUTCDate() returns the day of the month (1 to 31).
    Combines it with the monthName into a string like:
    → "18 , June" */
}

/** 
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string, (HH:MM AM/PM)
 * 
 * */ 
export const getTime = function(timeUnix,timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM"

    return `${hours % 12 || 12}:${minutes} ${period}`
}

/** 
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string, (HH AM/PM)
 * 
 * */ 
export const getHours = function(timeUnix,timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM"

    return `${hours % 12 || 12} ${period}`
}

/** 
 * 
 * @param {number} mps Meter per second
 * @returns {number} Kilometer per hour
 * 
 * */ 
export const mps_to_kmh = mps => {
    const mph = mps * 3600
    return mph / 1000
}



export const aqiText = {
    1 : {
        level : "Good" ,
        message : "Air quality is considered satisfactory, and air pollution poses little or no risk"
    },
    2 : {
        level : "Fair" ,
        message : "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3 : {
        level : "Moderate" ,
        message : "Members of sensitive groups may experience health effects. The general public is not likely to be affected."
    },
    4 : {
        level : "Poor" ,
        message : "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects"
    },
    5 : {
        level : "Very Poor" ,
        message : "Health warnings of emergency conditions. The entire population is more likely to be affected."
    },
}
