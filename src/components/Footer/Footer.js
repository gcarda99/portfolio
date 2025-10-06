import React, {useContext} from 'react'
import './Footer.css'
import {ThemeContext} from '../../contexts/ThemeContext'
import {socialsData} from '../../data/socialsData'
import {footerData} from '../../data/footerData'
import {FaAt, FaEnvelope, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {makeStyles} from "@material-ui/core/styles";

function Footer() {

    const {theme} = useContext(ThemeContext)

    const useStyles = makeStyles((t) => ({
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.secondary,
            color: theme.primary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        }
    }));

    const classes = useStyles();

    return (
        <div className="footer">
            <div className="footer-container">

                <div className="footer-column">
                    <h2 className="footer-title">{footerData.name}</h2>
                    <p className="footer-text">
                        Iscritta all'Albo degli Psicologi della Regione Campania
                        <br/>
                        n. <a href={footerData.alboUrl} target="_blank">{footerData.albo}</a>
                        {footerData?.iva && footerData?.iva.trim() !== "" && (
                            <>
                                <br/>
                                P.IVA: {footerData.iva}
                            </>
                        )}
                    </p>
                </div>

                <div className="footer-column">
                    <h3 className="footer-subtitle">Mappa del sito</h3>
                    <ul>
                        <li><a href="/#">Homepage</a></li>
                        <li><a href="/#about">Chi sono</a></li>
                        <li><a href="/#services">Servizi</a></li>
                        <li><a href="/#contacts">Contatti</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3 className="footer-subtitle">Legale</h3>
                    <ul>
                        <li><a href="/privacy-policy" target="_blank">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-socialmedia-icons'>
                {socialsData.linkedIn && (
                    <a
                        href={socialsData.linkedIn}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaLinkedinIn aria-label='LinkedIn'/>
                    </a>
                )}
                {socialsData.instagram && (
                    <a
                        href={socialsData.instagram}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaInstagram aria-label='Instagram'/>
                    </a>
                )}
                {socialsData.gmail && (
                    <a
                        href={socialsData.gmail}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaEnvelope aria-label='Gmail'/>
                    </a>
                )}
                {socialsData.pec && (
                    <a
                        href={socialsData.pec}
                        target='_blank'
                        rel='noreferrer'
                        className={classes.socialIcon}
                    >
                        <FaAt aria-label='PEC'/>
                    </a>
                )}
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} {footerData.name} - Tutti i diritti riservati
                <p style={{color: "white"}}>
                    Made with
                    <span style={{color: "red", margin: '0 0.5rem -1rem 0.5rem'}}>
                    ❤
                </span>
                    by <a style={{color: "white", textDecoration: "underline"}}
                          href='https://www.linkedin.com/in/giuseppe-cardaropoli/'>Giuseppe
                    Cardaropoli</a>
                </p>
            </div>
        </div>
    );
}

export default Footer

