
export async function searchCity(cityName){
    URL = 'http://api.geonames.org/searchJSON?name=' + cityName + '&featureClass=P&maxRows=5&username=weknowit';
    
    try{
        let response = await fetch(URL);
        if(response.status > 400){
          return {};
        } else {
          let search = await response.json();

          const data = search.geonames;

          if( data === undefined || 
              data.length == 0 ||
              data[0].name != cityName ||
              data[0].population == 0){
      
              return null;
      
          }else {
             return [data[0].name, data[0].population];
          }
        }
      } catch(e) {
        return console.log(e);
      }
    
}
