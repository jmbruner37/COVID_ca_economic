

//var link = "/covid_cases";
//d3.json(link).then(function(data) {
d3.csv('/../Raw_Data/Home_Prices_with_Dates.csv', function(data) {
    console.log(data);
    //data = MG.convert.date(data, 'date');
    MG.data_graphic({
        title: "Covid Case Count by County",
        description: "We sometimes have only a few observations. By setting missing_is_zero: true, missing values for a time-series will be interpreted as zeros. In this example, we've overridden the rollover callback to show 'no data' for missing observations and have set the min_x and max_x options in order to expand the date range.",
        data: data,
        interpolate: d3.curveLinear,
        missing_is_zero: true,
        width: 600,
        height: 200,
        right: 40,
        min_x: new Date('2020-03-01'),
        max_x: new Date('2020-09-01'),
        target: '#missing-y',
        mouseover: function(d, i) {
            var df = d3.timeFormat('%b %d, %Y');
            var date = df(d.date);
            var y_val = (d.value === 0) ? 'no data' : d.value;

            d3.select('#missing-y svg .mg-active-datapoint')
                .text(date +  '   ' + y_val);
        }
    });
});