create table covid_cases (
index INT Primary key,
county text, 
month int, 
new_cases int, 
new_deaths int
);

create table unemployment_numbers(
index int primary key, 
county text, 
month text, 
labor_force int, 
employment int, 
unemployment int, 
unemployment_rate float
);

create table home_price(
index int primary key, 
county text, 
date date , 
price int
);
