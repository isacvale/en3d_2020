import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const Common = props =>
    <div>
        {/* Header */}
        <Header />

        {/* Content */}
        <div>{props.children}</div>

        {/* Footer */}
        <Footer />
    </div>
    

export default Common