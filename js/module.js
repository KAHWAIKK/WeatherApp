

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

export const getTime = function(timeUnix,timezone){
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM"
}
