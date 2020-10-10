create table covid_cases (
county text, 
month int, 
new_cases int, 
new_deaths int,
primary key (county, month)    
);

create table unemployment_numbers(
county text, 
month int, 
labor_force int, 
employment int, 
unemployment int, 
unemployment_rate float,
primary key (county, month)
);

create table home_price(
county text, 
month int, 
price int,
primary key (county, month)
);

create table county_population(
county text, 
population int, 
GrowthRate float,
primary key (county)
);


SELECT cc.county, cc.month, cc.new_cases, cc.new_deaths, hp.price, un.unemployment_rate, cp.population
FROM covid_cases cc
INNER JOIN home_price hp ON cc.county = hp.county AND cc.month = hp.month
INNER JOIN unemployment_numbers un ON cc.county = un.county AND cc.month = un.month
INNER JOIN county_population cp ON cc.county = cp.county
