import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template

#set up connection to sql through pgadmin
connection_string = "postgres:test123@localhost:5432/covid_cases" #postgres:insert password
engine = create_engine(f'postgresql://{connection_string}')

Base = automap_base()

# reflect the tables
Base.prepare(engine, reflect=True)

#reference the tables 
Covid_cases = Base.classes.covid_cases
Unemployment_numbers = Base.classes.unemployment_numbers
Home_price = Base.classes.home_price

app = Flask(__name__)

#set up paths for api
@app.route("/")
def welcome():
    return render_template("index.html")

#covid case data api route
@app.route("/covid_cases")
def covid():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    #Return a list of covid case data including the county, month, new cases, new deaths
    # Query all the data
    results = session.query(Covid_cases.county, Covid_cases.month, Covid_cases.new_cases, Covid_cases.new_deaths).all()

    session.close()

    # Create a dictionary from the row data and append to a list of data
    all_months = []
    for county, month, new_cases, new_deaths in results:
        covid_case_dict = {}
        covid_case_dict["county"] = county
        covid_case_dict["month"] = month
        covid_case_dict["new cases"] = new_cases
        covid_case_dict["new deaths"] = new_deaths
        all_months.append(covid_case_dict)

    return jsonify(all_months)

#set up unemployment numbers data api route
@app.route("/unemployment_numbers")
def unemployment():
    # Create our session (link) from Python to the DB
    session = Session(engine)

#return a list of all the info in the sql table, such as county, month, labor_force, employment, unemployment, unemployment_rate
# Query all the data 
    results = session.query(Unemployment_numbers.county, Unemployment_numbers.month, Unemployment_numbers.labor_force, Unemployment_numbers.employment, Unemployment_numbers.unemployment, Unemployment_numbers.unemployment_rate).all()

    session.close()

    # Create a dictionary from the row data and append to a list of data
    all_months_unemp = []
    for county, month, labor_force, employment, unemployment, unemployment_rate in results:
        unemp_num_dict = {}
        unemp_num_dict["county"] = county
        unemp_num_dict["month"] = month
        unemp_num_dict["labor force"] = labor_force
        unemp_num_dict["employment"] = employment
        unemp_num_dict["unemployment"] = unemployment
        unemp_num_dict["unemployment rate"] = unemployment_rate
        all_months_unemp.append(unemp_num_dict)

    return jsonify(all_months_unemp)


# #set up housing data api route
@app.route("/home_price")
def housing():
    # Create our session (link) from Python to the DB
    session = Session(engine)

#return a list of all the info in the sql table, such as county, month and price 
# Query all the data 
    results = session.query(Home_price.county, Home_price.month, Home_price.price).all()

    session.close()

    # Create a dictionary from the row data and append to a list of data
    all_months_home_price = []
    for county, month, price in results:
        home_price_dict = {}
        home_price_dict["county"] = county
        home_price_dict["month"] = month
        home_price_dict["price"] = price
        all_months_home_price.append(home_price_dict)

    return jsonify(all_months_home_price)


# #set up county population api route
@app.route("/county_population")
def population():
    # Create our session (link) from Python to the DB
    session = Session(engine)

#return a list of all the info in the sql table, such as county, populaton and growth rate 
# Query all the data 
    results = session.query(County_population.county, County_population.population, County_population.growthrate).all()

    session.close()

    # Create a dictionary from the row data and append to a list of data
    CA_county_population = []
    for county, population, growthrate in results:
        county_population_dict = {}
        county_population_dict["county"] = county
        county_population_dict["population"] = population
        county_population_dict["growthrate"] = growthrate
        CA_county_population.append(county_population_dict)

    return jsonify(CA_county_population)
    
if __name__ == '__main__':
    app.run(debug=True)

