
var link = "/covid_cases_date";
 d3.json(link).then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Total Covid Cases",
        data: data, 
        interpolate: d3.curveBasisOpen,
        width: 600,
        height: 300,
        right: 80,
        min_y_from_data: true,
        max_y:'500000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'total_case_count',
        x_label: 'Date (in Months)',
        y_label: 'Total Case Count',
        target: '#chart',
        color: '#8C001A',
    });
});

var link = "/home_price_date";
 d3.json(link).then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Home Price by County",
        data: data, 
        interpolate: d3.curveCatmullRom.alpha(1),
        area: true,
        width: 600,
        height: 300,
        right: 80,
        min_y_from_data: true,
        max_y:'1000000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'price',
        x_label: 'Date (in Months)',
        y_label: 'Home Price',
        target: '#chart2',
        color: '#8C001A',
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
        interpolate: d3.curveBasisOpen,
        width: 600,
        height: 300,
        right: 80,
        area: false,
        min_y_from_data: true,
        max_y:'500000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'unemployment',
        x_label: 'Date (in Months)',
        y_label: 'Unemployment',
        target: '#chart3',
        color: '#8C001A',
    });
});