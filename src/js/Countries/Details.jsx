import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

const Details = props => {
    const matchingCountry = props.countries.find(el => el.cca3 === props.match.params.cc)

    const mappedBorders = matchingCountry.borders.map(el => {
        const foundCountry = props.countries.find(c => c.cca3 === el)
        return (
            <li>
                <Link to={`/countries/${el}`}>{foundCountry.name.common}</Link>
            </li>
        )
    })

    return (
        <div className="details">
            <h1>{matchingCountry.name.common}</h1>
            <hr />
            <h4>Capital: {matchingCountry.capital[0]}</h4>
            <hr />
            <h4>Area: {matchingCountry.area} km2</h4>
            <hr />
            <h4>Borders:</h4>
            <ul>{mappedBorders}</ul>
        </div>
    )
}

export default withRouter(Details)
