var link = "/home_price";
d3.json(link).then(function(data) {
    MG.data_graphic({
        title: "Covid Case by Month",
        //description: "This graph shows the amount of new cases per month from all the counties in California",
        data: data,
        animate_on_load: true,
        area: true,
        width: 600,
        height: 240,
        right: 40,
        left: 90,
        top:100,
        bottom: 50,
        y_extended_ticks: true,
        target: '#chart',
        x_accessor: 'month',
        y_accessor: 'price',
        max_y: '1000000',
        y_label: 'New Covid Cases',
        x_label: "Months",
        //color: ['mediumseagreen']
    });
});

var link = "/unemployment_numbers";
d3.json(link).then(function(data) {
    MG.data_graphic({
        title: "Unemployment Numbers by County",
        //description: "This graph shows the amount of new cases per month from all the counties in California",
        data: data,
        animate_on_load: true,
        area: true,
        width: 600,
        height: 240,
        right: 40,
        left: 90,
        top:100,
        bottom: 50,
        y_extended_ticks: true,
        target: '#chart',
        x_accessor: 'month',
        y_accessor: 'unemployment',
        max_y: '1000000',
        y_label: 'New Unemployment Numbers',
        x_label: "Months",
        //color: ['mediumseagreen']
    });
});


var link = "/covid_cases";
d3.json(link).then(function(data) {
    MG.data_graphic({
        title: "Covid Case by Month",
        //description: "This graph shows the amount of new cases per month from all the counties in California",
        data: data,
        animate_on_load: true,
        area: true,
        width: 600,
        height: 240,
        right: 40,
        left: 90,
        top:100,
        bottom: 50,
        y_extended_ticks: true,
        target: '#chart',
        x_accessor: 'month',
        y_accessor: 'new_case',
        max_y: '1000000',
        y_label: 'New Covid Cases',
        x_label: "Months",
        //color: ['mediumseagreen']
    });
});