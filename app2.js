
d3.json("http://127.0.0.1:5000/api/v1.0/county_population").then((data) => {   
     var county = data.map(x => x.county);
console.log(county)});


var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  mode: 'markers',
  type: 'scatter'
};

var trace2 = {
  x: [2, 3, 4, 5],
  y: [16, 5, 11, 9],
  mode: 'lines',
  type: 'scatter'
};

var trace3 = {
  x: [1, 2, 3, 4],
  y: [12, 9, 15, 12],
  mode: 'lines+markers',
  type: 'scatter'
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('scatter', data);