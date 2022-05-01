import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <BrowserRouter>
        <Router render={props => (
            <div>
                <div className='container'>
                    <Header {...props}/>
                    <div className='main'>
                        <Routes/>
                    </div>
                </div>
            </div>
        )}/>
    </BrowserRouter>
  )
}

export default Layout