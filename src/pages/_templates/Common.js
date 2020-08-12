import React from 'react'
import Header from './components/Header'

const Common = props =>
    <div>
        {/* Header */}
        <Header />

        {/* Content */}
        <div>{props.children}</div>

        {/* Footer */}
        <footer>footer</footer>
    </div>
    

export default Common