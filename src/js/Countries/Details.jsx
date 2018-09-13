import React from 'react'
import { withRouter } from 'react-router'

const Details = props => {
    const matchingCountry = props.countries.find(el => el.cca3 === props.match.params.cc)
    console.log('matchingCountry', matchingCountry)

    return (
        <div className="details">
            <h1>{matchingCountry.name.common}</h1>
            <hr />
            <h4>Capital: {matchingCountry.capital[0]}</h4>
            <hr />
            <h4>Area: {matchingCountry.area} km2</h4>
        </div>
    )
}

export default withRouter(Details)
