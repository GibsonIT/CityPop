/**
 * Converts the response to the country code
 * Example of the converted data from country name 'France': 'FR'
 * @param {Object} searchData - response from a fetch
 * @param {string} countryName - name of country searched
 * @returns {string} a country code of the results
 */

export function convertToCountryCode(searchData, countryName){
    const data = searchData.geonames;

    // Valid data check
    if( data === undefined || 
        data.length == 0 ||
        data[0].countryName != countryName){

        return null;

    }else {
       return data[0].countryCode;
    }
   
}

/**
 * Converts the response to an array where each element is a city name
 * and its the population as a pair
 * Example of converted data from counrty code 'FR': [['Paris', 2133451], ['Marseille', 861321], ['Lyon', 513432], ...]
 * @param {Object} searchData - response from a fetch
 * @param {string} countryCode - the country code searched for
 * @returns {Array} the converted data
 */
export function convertToName(searchData, countryCode){
    const data = searchData.geonames;

        // Valid data check
         if( data === undefined || 
             data.length == 0) {
 
            return null;

         }else {
             //Separates each element into name and population
             var dataArray = [];
             data.forEach(element => {
                if(element.countryCode = countryCode){
                    if(element.population == 0){
                        return dataArray;
                    }
                    dataArray.push([element.name, element.population]);
                }
             });
            return dataArray;
        }
}

/**
 * Converts the response to data in the form of: [cityName, cityPopulation]
 * Example data that is returned from city name 'Berlin': ['Berlin', 34265354]
 * @param {Object} searchData - response from a fetch
 * @param {string} cityName - city search for
 * @returns {Array} the converted data
 */

export function convertToCityAndPopulation(searchData, cityName){
    const data = searchData.geonames;

    // Valid data check
    if( data === undefined || 
        data.length == 0 ||
        data[0].name != cityName ||
        data[0].population == 0){

        return null;

    }else {
       return [data[0].name, data[0].population];
    }

}



