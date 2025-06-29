/**
 * @fileoverview 
 * @author Kevin Kahwai
 * @license MIT
 * @author kevin kahwai
 */

"use strict"

import { fetchData, url } from "./api.js"
import * as module from "./module.js"

/** 
 * Add event listener on multiple elements
 * @param {Nodelist} elements elements node array
 * @param {string} eventType Event Type e.g "click", "mouseover"
 * @param {Function} callback Callback function
 * 
 * */ 
const addEventOnElements = function(elements,eventType,callback){
    for(const element of elements) element.addEventListener(eventType,callback )
}

/* Toggle search in mobile devices */

const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click" , toggleSearch)

/* SEARCH INTERGRATION */

const searchField = document.querySelector("[data-search-field]")
const searchResult = document.querySelector("[data-search-result]")

let searchTimeout = null;
const searchTimeoutDuration = 500;

searchField.addEventListener("input" , function () {
    searchTimeout ?? clearTimeout(searchTimeout);

    if(!searchField.value){
        searchField.classList.remove("active");
        searchResult.innerHTML = "";
        searchField.classList.remove("searching")
    }else {
        searchField.classList.add("searching")
    }

    if(searchField.value){
        searchTimeout = setTimeout(() => {
            fetchData(url.geo(searchField.value) , function(locations){
                searchField.classList.remove("searching");
                searchResult.classList.add("active");
                searchResult.innerHTML = `
                    <ul class="view-list" data-search-list>
                    </ul>
                `;

                const /* {nodeList} | []*/ items = [];

                for (const {name, lat , lon , country, state} of locations){
                    const searchItem = document.createElement("li");
                    searchItem.classList.add("view-item");

                    searchItem.innerHTML = `
                        <span class="m-icon">location_on</span>
    
                        <div>
                            <p class="item-title">${name}</p>
                            <p class="label-2 item-subtitle">${state || ""} ${country}</p>
                        </div>

                        <a href="#/weather?lat=${lat}&lon=${lon}" class="item-link has-state" aria-label="${name} weather" data-search-toggler></a>
                    `

                    searchResult.querySelector("[data-search-list]").appendChild(searchItem);

                    items.push(searchItem.querySelector("[data-search-toggler]"))

                }
            })
        }, searchTimeoutDuration)
    }
})

const container= document.querySelector("[data-container]")
const loading = document.querySelector("[data-loading]")
const currentLocationBtn = document.querySelector("[data-current-location-btn]")
const errorContent = document.querySelector("[data-error-content]")

export const updateWeather = function (lat , lon) {
    loading.style.display = "grid";
    container.style.overflowY = "hidden";
    container.classList.contains("fade-in") ?? container.classList.remove("fade-in");
    errorContent.style.display = "none"
}