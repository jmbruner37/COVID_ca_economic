"use strict";

// Chart Params
var svgWidth = 960;
var svgHeight = 500;
var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};
var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom; // Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.

var svg = d3.select("body").append("svg").attr("width", svgWidth).attr("height", svgHeight);
var chartGroup = svg.append("g").attr("transform", "translate(".concat(margin.left, ", ").concat(margin.top, ")")); // Import data from an external CSV file

d3.csv("templates/final_joined_data.csv").then(function (joinedData) {
  console.log(joinedData);
  console.log([joinedData]); // Create a function to parse date and time

  var parseTime = d3.timeParse("%d-%b-%Y"); // Format the data

  joinedData.forEach(function (data) {
    data.month = parseTime(data.month);
    data.new_cases = +data.new_cases;
    data.unemployment = +data.unemployment;
  }); //joinedData.forEach(function(data) {
  //data.month = parseTime(data.month);
  //data.new_deaths = +data.new_deaths;
  //data.prices = +data.prices;
  //});
  // Create scaling functions

  var xTimeScale = d3.scaleTime().domain(d3.extent(joinedData, function (d) {
    return d.month;
  })).range([0, width]);
  var yLinearScale1 = d3.scaleLinear().domain([0, d3.max(joinedData, function (d) {
    return d.new_cases;
  })]).range([height, 0]);
  var yLinearScale2 = d3.scaleLinear().domain([0, d3.max(joinedData, function (d) {
    return d.unemployment;
  })]).range([height, 0]); // Create axis functions

  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b-%Y"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2); // Add x-axis

  chartGroup.append("g").attr("transform", "translate(0, ".concat(height, ")")).call(bottomAxis); // Add y1-axis to the left side of the display

  chartGroup.append("g") // Define the color of the axis text
  .classed("green", true).call(leftAxis); // Add y2-axis to the right side of the display

  chartGroup.append("g") // Define the color of the axis text
  .classed("blue", true).attr("transform", "translate(".concat(width, ", 0)")).call(rightAxis); // Line generators for each line

  var line1 = d3.line().x(function (d) {
    return xTimeScale(d.month);
  }).y(function (d) {
    return yLinearScale1(d.new_cases);
  });
  var line2 = d3.line().x(function (d) {
    return xTimeScale(d.month);
  }).y(function (d) {
    return yLinearScale2(d.unemployment);
  }); // Append a path for line1

  chartGroup.append("path").data([joinedData]).attr("d", line1).classed("line green", true); // Append a path for line2

  chartGroup.append("path").data([joinedData]).attr("d", line2).classed("line blue", true); // Append axes titles

  chartGroup.append("text").attr("transform", "translate(".concat(width / 2, ", ").concat(height + margin.top + 20, ")")).classed("new_cases-text text", true).text("New COVID Cases");
  chartGroup.append("text").attr("transform", "translate(".concat(width / 2, ", ").concat(height + margin.top + 37, ")")).classed("unemployment-text text", true).text("Unemployment Rates");
})["catch"](function (error) {
  console.log(error);
});