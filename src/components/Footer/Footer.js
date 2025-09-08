import React, {useContext} from 'react'
import './Footer.css'
import {ThemeContext} from '../../contexts/ThemeContext'

function Footer() {

    const {theme} = useContext(ThemeContext)

    return (
        <div className="footer">
            <p style={{color: "white"}}>
                Made with
                <span style={{color: "red", margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                by <a style={{color: "white", textDecoration: "underline"}} href='https://www.linkedin.com/in/giuseppe-cardaropoli/'>Giuseppe
                Cardaropoli</a>
            </p>
        </div>

    )
}

export default Footer

