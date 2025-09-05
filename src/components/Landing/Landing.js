import React, {useContext} from 'react';
import {Button} from '@material-ui/core';
import {NavHashLink as NavLink} from 'react-router-hash-link';
import {makeStyles} from '@material-ui/core/styles';

import './Landing.css';
import {ThemeContext} from '../../contexts/ThemeContext';
import {headerData} from '../../data/headerData';
import {socialsData} from '../../data/socialsData';

import {FaEnvelope, FaInstagram, FaLinkedin,} from 'react-icons/fa';


function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        resumeBtn: {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '140px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '45px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
        },
        contactBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '140px',
            height: '45px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            }
        },
    }));

    const classes = useStyles();

    return (
        <div className='landing'>
            <div className='landing--container'>
                <div
                    className='landing--container-left'
                    style={{ backgroundColor: theme.primary }}
                >
                    <div className='lcl--content'>
                        {socialsData.linkedIn && (
                            <a
                                href={socialsData.linkedIn}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaLinkedin
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='LinkedIn'
                                />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a
                                href={socialsData.instagram}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaInstagram
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Instagram'
                                />
                            </a>
                        )}
                        {socialsData.gmail && (
                            <a
                                href={socialsData.gmail}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FaEnvelope
                                    className='landing--social'
                                    style={{ color: theme.secondary }}
                                    aria-label='Gmail'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <img
                    src={headerData.image}
                    alt=''
                    className='landing--img'
                    style={{
                        opacity: `${drawerOpen ? '0.7' : '1'}`,
                        borderColor: theme.secondary,
                    }}
                />
                <div
                    className='landing--container-right'
                    style={{ backgroundColor: theme.secondary }}
                >
                    <div
                        className='lcr--content'
                        style={{ color: theme.tertiary }}
                    >
                        <h6 className='lcr--content--title'>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>
                        <h6 className='lcr--content--author'>~ Robert Louis Stevenson</h6>

                        <div className='lcr-buttoncontainer'>
                            <div className='lcr-buttons'>
                                <NavLink
                                    to='/#contacts'
                                    smooth={true}
                                    spy='true'
                                    duration={2000}
                                >
                                    <Button className={classes.contactBtn}>
                                        Contatti
                                    </Button>
                                </NavLink>
                                {headerData.resumePdf && (
                                    <a
                                        href={headerData.resumePdf}
                                        download='resume'
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <Button className={classes.resumeBtn}>
                                            Download CV
                                        </Button>
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="arrow-scroll">
                            <div className='arrow'></div>
                            <div className='arrow'></div>
                            <div className='arrow'></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Landing;
