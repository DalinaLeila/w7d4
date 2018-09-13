import React from 'react'
import { Link } from 'react-router-dom'

const List = props => {
    const countries = props.countries

    const mappedCountries = countries.map(el => {
        return (
            <Link key={el.cca3} to={`/countries/${el.cca3}`}>
                <li className="country-item">
                    {el.flag}
                    &nbsp;
                    {el.name.common}
                </li>
            </Link>
        )
    })

    return (
        <div className="list">
            <ul>{mappedCountries}</ul>
        </div>
    )
}

export default List
