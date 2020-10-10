 // create dropdown options  
 function dropdown() {  
  var dropdown = d3.select("#selMonth")
  d3.csv("final_joined_data.csv").then(function(data) {
  var month = data.map(x => x.month);
  month.forEach(x => {
  dropdown.append("option").text(x).property("value", x)
 })})}

// create event listener change event   
d3.selectAll("body").on("change", updatePage);

// grab data and build charts based on selected option 
function updatePage() {
var dropdownMenu = d3.selectAll("#selMonth").node();
var selectedMonth = dropdownMenu.value;
console.log(selectedMonth)

d3.csv('final_joined_data.csv').then(function(data) {
  data.forEach(function(d) {
    d.new_cases = +d.new_cases;
    d.new_deaths = +d.new_deaths;
    d.price = +d.price;
    d.unemployment_rate = +d.unemployment_rate;
    d.month = +d.month;
  });
console.log(data)

function filterMonth(month) {
    return (month.month) == selectedMonth;
  }  

var filteredData = data.filter(filterMonth)
console.log(filteredData)

  var counties = filteredData.map(x => x.county)
  var months = filteredData.map(x => x.month)
  var cases = filteredData.map(x => x.new_cases)
  var home_prices = filteredData.map(x => x.price)
  var home_prices_1000 = filteredData.map(x => x.price/1000)
  var unemployment_rates = filteredData.map(x => x.unemployment_rate)
  var population = filteredData.map(x => x.population)
  var markersize = filteredData.map(x => x.population/50000)
  var casesPer100k = [];
  for (var i = 0; i < cases.length; i++) {
    casesPer100k.push((cases[i] / population[i]) * 100000);
  }

  console.log("Home Prices: ", home_prices)
  console.log("Cases: ", cases)
  console.log("Cases Per 100k Population: ", casesPer100k)

// Scatterplots    
var trace1 = {
  y: unemployment_rates,
  x: casesPer100k,
  text: counties,
  type: scatter1,
  name: "scatter1",
  mode: "markers",
  marker: {size: 13,
            color: "blue",
            opacity: .5            
  }
};

var trace2 = {
  y: home_prices,
  x: casesPer100k,
  text: counties,
  type: scatter2,
  name: "scatter2",
  mode: "markers",
  marker: {size: 13,
            color: "blue",
            opacity: .5            
  }
};

var chartData1 = [trace1];
var chartData2 = [trace2];

var layout1 = {
  title: `Covid Cases and Unemployment Rates by California County for Month ${selectedMonth}, 2020`, 
  xaxis: { title: "Cases per 100k Population" },
  yaxis: { title: "Unemployment Rate"}
};       

var layout2 = {
  title: `Covid Cases and Median Home Prices by California County for Month ${selectedMonth}, 2020`, 
  xaxis: { title: "Cases per 100k Population" },
  yaxis: { title: "Median Home Price"}
};    

Plotly.newPlot("scatter1", chartData1, layout1);
Plotly.newPlot("scatter2", chartData2 , layout2);

})}

dropdown()











