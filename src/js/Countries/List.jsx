import React from 'react'
import { Link } from 'react-router-dom'

const List = props => {
    const countries = props.countries

    const mappedCountries = countries.map(el => {
        return (
            <li key={el.cca3} className="country-item">
                <Link to={`/countries/${el.cca3}`}>
                    {el.flag}
                    &nbsp;
                    {el.name.common}
                </Link>
            </li>
        )
    })

    return (
        <div className="list">
            <ul>{mappedCountries}</ul>
        </div>
    )
}

export default List
