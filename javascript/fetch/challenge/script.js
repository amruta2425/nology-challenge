/***
 * # Countries API
 *
 * Have a look at the documentation for [Countries API](https://restcountries.com/)
 * - Create an interface with an input and a button
 * - When the user clicks the button, country info gets displayed on the page
 * - Get the country from the input
 * - Use async/await over .then
 */

import { createCard } from "./dom-utils.js";
import getCountries from "./data.js";

document.querySelector("form").addEventListener("submit", async(e) =>{
  e.preventDefault();
  document.querySelector("section").innerHTML = "";
  const input = document.querySelector("#countryName");
  const countriesData = await getCountries(input.value);
  console.log(countriesData);

  countriesData.forEach((country) => {
    return createCard(
      document.querySelector("section"),
      country.commonName,
      country.capital);
    
  });
  input.value = "";
});