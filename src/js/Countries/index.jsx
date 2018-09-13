import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import countries from './data.json'

import Header from './Header'
import List from './List'
import Details from './Details'

class Countries extends Component {
    render() {
        return (
            <div className="container countries">
                <Header />
                <div className="content">
                    <List countries={countries} />
                    <Route
                        path="/countries/:cc"
                        render={() => {
                            return <Details countries={countries} />
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Countries
