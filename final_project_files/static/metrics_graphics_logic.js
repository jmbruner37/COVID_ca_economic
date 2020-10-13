  d3.json("covid_cases2.json").then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Total Covid Cases Per Month",
        data: data, 
        interpolate: d3.curveBasisOpen,
        width: 600,
        height: 300,
        right: 40,
        min_y_from_data: true,
        max_y:'200000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'total_case_count',
        // x_label: 'Date (in Months)',
        // y_label: 'Total Case Count',
        target: '#chart',
       color: '#8C001A',
       mouseover: function(d, i) {
        var df = d3.timeFormat('%b %d, %Y');
        var date = df(d.date);
        var y_val = (d.total_case_count === 0) ? 'no data' : d.total_case_count;
        var county = (d.county);
        d3.select('#chart svg .mg-active-datapoint')
            .text(date +  ': ' + y_val + ' cases: ' + county + ' County')
    }
    });
});


 d3.json("unemployment_numbers2.json").then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Unemployment Numbers by County Per Month",
        data: data, 
        interpolate: d3.curveBasisOpen,
        width: 600,
        height: 300,
        right: 40,
        area: false,
        min_y_from_data: true,
        max_y:'500000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'unemployment',
        y_extended_ticks: false,
        xax_tick_length: 5,
        // x_label: 'Date (in Months)',
        // y_label: 'Unemployment',
        target: '#chart2',
        color: '#8C001A',
        mouseover: function(d, i) {
          var df = d3.timeFormat('%b %d, %Y');
          var date = df(d.date);
          var y_val = (d.unemployment === 0) ? 'no data' : d.unemployment;
          d3.select('#chart2 svg .mg-active-datapoint')
              .text(date +  ': ' + y_val + ' Unemployed Persons');
      }
    });
});

 d3.json("home_prices2.json").then(function(data) {
    data.map(function(d) {
        d.date = new Date(d.date);
      });
    MG.data_graphic({
        title: "Home Price by County Per Month ",
        data: data, 
        interpolate: d3.curveCatmullRom.alpha(1),
        area: true,
        width: 600,
        height: 300,
        right: 40,
        min_y_from_data: true,
        max_y:'1000000',
        x_accessor: 'date',
        x_sort: true,
        y_accessor: 'price',
        // x_label: 'Date (in Months)',
        // y_label: 'Home Price',
        target: '#chart3',
        color: '#8C001A',
        mouseover: function(d, i) {
          var df = d3.timeFormat('%b %d, %Y');
          var date = df(d.date);
          var y_val = (d.price === 0) ? 'no data' : d.price;
          d3.select('#chart3 svg .mg-active-datapoint')
              .text(date +  ': ' + '$' + y_val  );
      }
    });
});