import {
    convertToCityAndPopulation, 
    convertToCountryCode, 
    convertToName
} from './DataConverter'
/**
 * Function to convert the data recieved from fetch
 * @callback dataConvertFunction
 * @param {Object} response - the json response of a fetch call
 * @param {string} searchTerm - the term searched for
 */

 /**
 * Makes and handles a fetch call od the URL then converts it using the dataConvertFunc parameter
 * @param {string} URL - the URL to be fetched from
 * @param {string} searchTerm - the term searched for 
 * @param {dataConvertFunction} dataConvertFunc - function to convert the data
 */
async function search(URL, searchTerm, dataConvertFunc){
    try{
        let response = await fetch(URL);
        if(response.status > 400){
          return {};
        } else {
          let r = await response.json();

          return dataConvertFunc(r, searchTerm);
        }
      } catch(e) {
        return console.log(e);
      }
    
}

/**
 * Function that search for populated places with the same name as parameter cityName
 * @param {string} cityName - name of city to be search for
 * @returns A Promise object with data in the form of an array: [CityName, Population]
 */
export async function searchCity(cityName){
    URL = 'http://api.geonames.org/searchJSON?name=' + cityName + '&featureClass=P&maxRows=1&username=weknowit';
    return search(URL, cityName, convertToCityAndPopulation);    
}

/**
 * Function that searches for a country and retrieves its country code if found
 * @param {string} countryName - country to be seached in 
 * @returns A Promise object with data in the form of a country code: 'FR'
 */
export async function searchCountry(countryName){
    URL = 'http://api.geonames.org/searchJSON?name=' + countryName + '&featureClass=A&orderby=population&maxRows=1&username=weknowit';
    return search(URL, countryName, convertToCountryCode);
}

/**
 * Function that searches for cities/places in a country with country code of the parameter countryCode.
 * The function returns [maxResults] number of results or less (default = 100).
 * Only returns cities/places in a country with popultation above 0.
 * @param {string} countryCode - country code of the country to be searched in
 * @param {Number} [maxResults = 100] maxResults - max number of results wanted
 * @returns A Promise object with data in the form of an array:
 *  [[cityName1, population1], [CityName2, population2], ... [cityNameX, populationX]]
 */
export async function searchCityInCountry(countryCode, maxResults = 100){
    URL = 'http://api.geonames.org/searchJSON?country=' + countryCode + 
        '&featureClass=P&orderby=population&maxRows=' + maxResults + '&username=weknowit';
    return search(URL, countryCode, convertToName);
}
