import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Countries from './Countries'
import Products from './Products'

const Application = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/products" component={Products} />
                    <Route path="/countries" component={Countries} />
                    <Route
                        render={() => {
                            return (
                                <div>
                                    <Link to="/countries">Countries</Link>
                                    <br />
                                    <Link to="/products">Products</Link>
                                </div>
                            )
                        }}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Application
