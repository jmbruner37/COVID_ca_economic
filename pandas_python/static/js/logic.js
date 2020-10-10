var link = "/home_price_date";
 d3.json(link).then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Home Price by County",
        data: data, 
        //interpolate: d3.curveLinear,
        width: 800,
        height: 400,
        right: 80,
        min_y_from_data: true,
        max_y:'1000000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'price',
        x_label: 'Date (in Months)',
        y_label: 'Home Price',
        target: '#chart',
        color: '#8C001A',
        mouseover: function(d, i) {
            var df = d3.timeFormat('%b %d, %Y');
            var date = df(d.date);
            var county = (d.price === 0) ? 'no data' : d.county;
            var y_val = (d.price === 0) ? 'no data' : d.price;

            d3.select('#chart svg .mg-active-datapoint')
                .text(date +  '   ' + county  + ' ' + price);
        }
    });
});


var link = "/unemployment_numbers_date";
 d3.json(link).then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Unemployment Numbers by County",
        data: data, 
        //interpolate: d3.curveLinear,
        width: 800,
        height: 400,
        right: 80,
        min_y_from_data: true,
        max_y:'1000000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'unemployment',
        x_label: 'Date (in Months)',
        y_label: 'Unemployment',
        target: '#chart',
        color: '#8C001A',
        mouseover: function(d, i) {
            var df = d3.timeFormat('%b %d, %Y');
            var date = df(d.date);
            var county = (d.price === 0) ? 'no data' : d.county;
            var y_val = (d.price === 0) ? 'no data' : d.price;

            d3.select('#chart svg .mg-active-datapoint')
                .text(date +  '   ' + county  + ' ' + price);
        }
    });
});


var link = "/covid_cases_date";
 d3.json(link).then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Total Covid Cases",
        data: data, 
        //interpolate: d3.curveLinear,
        width: 800,
        height: 400,
        right: 80,
        min_y_from_data: true,
        max_y:'1000000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'total_case_count',
        x_label: 'Date (in Months)',
        y_label: 'Total Case Count',
        target: '#chart',
        color: '#8C001A',
        mouseover: function(d, i) {
            var df = d3.timeFormat('%b %d, %Y');
            var date = df(d.date);
            var county = (d.price === 0) ? 'no data' : d.county;
            var y_val = (d.price === 0) ? 'no data' : d.price;

            d3.select('#chart svg .mg-active-datapoint')
                .text(date +  '   ' + county  + ' ' + price);
        }
    });
});
// var link = "/covid_case";
// d3.json(link).then(function(data) {
//     MG.data_graphic({
//         title: "Covid Case by Month",
//         //description: "This graph shows the amount of new cases per month from all the counties in California",
//         data: data,
//         animate_on_load: true,
//         //area: true,
//         width: 600,
//         height: 240,
//         right: 40,
//         left: 90,
//         top:100,
//         bottom: 50,
//         y_extended_ticks: true,
//         target: '#chart',
//         x_accessor: 'month',
//         y_accessor: 'new cases',
//         max_y: '10000',
//         y_label: 'New Covid Cases',
//         x_label: "Months",
//         color: ['mediumseagreen']
//     });
// });

// var link = "/home_price";
// d3.json(link).then(function(data) {
//     MG.data_graphic({
//         title: "Home Price by Month",
//         //description: "This graph shows the amount of new cases per month from all the counties in California",
//         data: data,
//         animate_on_load: true,
//         area: false,
//         interpolate: d3.curveLinear,
//         width: 600,
//         height: 240,
//         right: 40,
//         left: 90,
//         top:100,
//         bottom: 50,
//         y_extended_ticks: true,
//         target: '#chart',
//         x_accessor: 'month',
//         y_accessor: 'price',
//         y_label: 'Home Price',
//         x_label: "Months",
//         color: ['mediumseagreen']
//     });
// });

// var link = "/unemployment_numbers";
// d3.json(link).then(function(data) {
//     MG.data_graphic({
//         title: "Unemployment Numbers by Month",
//         //description: "This graph shows the amount of new cases per month from all the counties in California",
//         data: data,
//         animate_on_load: true,
//         area: false,
//         interpolate: d3.curveLinear,
//         width: 600,
//         height: 240,
//         right: 40,
//         left: 90,
//         top:100,
//         bottom: 50,
//         y_extended_ticks: true,
//         target: '#chart',
//         x_accessor: 'month',
//         y_accessor: 'unemployment',
//         y_label: 'Unemployment',
//         x_label: "Months",
//         color: ['mediumseagreen']
//     });
// });