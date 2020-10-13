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

create table covid_cases2 (
index INT Primary key,
county text, 
total_case_count int,
date date
);

create table unemployment_numbers2(
index int primary key, 
county text, 
month text, 
labor_force int, 
employment int, 
unemployment int, 
unemployment_rate float,
date date
);

create table home_price2(
index int primary key, 
county text, 
date date , 
price int,
state text
);

