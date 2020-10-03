import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

connection_string = "postgres:924runner@localhost:5432/covid_cases"
engine = create_engine(f'postgresql://{connection_string}')

Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

covid = Base.classes.covid_cases

app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/county<br/>"
       )

@app.route("/api/v1.0/county")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all county names"""
    # Query all passengers
    results = session.query(covid.county).all()

    session.close()

    # Convert list of tuples into normal list
    all_counties = list(np.ravel(results))

    return jsonify(all_counties)


if __name__ == '__main__':
    app.run(debug=True)




