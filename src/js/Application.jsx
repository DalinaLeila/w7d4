import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Countries from './Countries'
import Products from './Products'

const Application = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/products" component={Products} />
                    <Route path="/countries" component={Countries} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Application
