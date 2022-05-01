import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const App = () => {
    return (
        <Router>
                <Routes>
                    <Route path='/' exact component={<Home/>}/>
                    <Route path='/catalog/:slug' component={<Product/>}/>
                    <Route path='/catalog' component={<Catalog/>}/>
                    <Route path='/cart' component={<Cart/>}/>
                </Routes>
        </Router>
    )
}

export default App