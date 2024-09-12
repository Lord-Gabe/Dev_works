document.addEventListener("DOMContentLoaded",function(){
    const button = document.getElementById("btnSearch");
    var country = document.getElementById("country-inp");
    var result = document.getElementById("result");


    //https://restcountries.com/v3.1/name/{name}?fullText=true    //This link is called an endpoint
    
    //adding a click event to the search button
    button.addEventListener("click", function(){
        let country_name = country.value;
        let endpoint = `https://restcountries.com/v3.1/name/${country_name}`;//` allows one to add a variable to a string
        
        //Fetch from the API(Application Porgramming Interface) from our given link
        if (country_name != ""){
            fetch(endpoint).then((response) => response.json()).then((data) => {console.log(data)
                result.innerHTML=`<img src="${data[0].flags.svg}" alt="flag" class="flag-img"/>
                
                <h2>${data[0].name.common}</h2>
                <div class="wrapper">
                    <div class="data-wrapper">
                        <h3>Population: ${data[0].population}</h3>
                    </div>
                    <h3>Continent: ${data[0].continents}</h3>
                    <h3>Region: ${data[0].region}</h3>
                    <h3>Capital: ${data[0].capital}</h3>
                </div>
                `;
            });
            
        }
        else{
            alert("You must first enter a country's name!");
        }
    });
});