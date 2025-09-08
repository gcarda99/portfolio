import React, {useContext, useState} from 'react';
import {IconButton, Snackbar, SnackbarContent} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import {makeStyles} from '@material-ui/core/styles';
import {FaInstagram, FaLinkedinIn,} from 'react-icons/fa';
import {AiOutlineCheckCircle, AiOutlineSend} from 'react-icons/ai';
import {FiAtSign, FiPhone} from 'react-icons/fi';
import {HiOutlineLocationMarker} from 'react-icons/hi';

import {ThemeContext} from '../../contexts/ThemeContext';

import {socialsData} from '../../data/socialsData';
import {contactsData} from '../../data/contactsData';
import './Contacts.css';

function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{backgroundColor: theme.secondary}}
        >
            <div className='contacts--container'>
                <h1 style={{color: theme.primary}}>Prenota un appuntamento</h1>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <div className='contacts-body'>
                        <div className='contacts-form'>
                            <form onSubmit={handleContactForm}>
                                <div className='input-container'>
                                    <label htmlFor='Name' className={classes.label}>
                                        Nome
                                    </label>
                                    <input
                                        placeholder='Sigmund Freud'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        type='text'
                                        name='Name'
                                        className={`form-input ${classes.input}`}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label
                                        htmlFor='Email'
                                        className={classes.label}
                                    >
                                        Email
                                    </label>
                                    <input
                                        placeholder='sigmund@freud.brain'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type='email'
                                        name='Email'
                                        className={`form-input ${classes.input}`}
                                    />
                                </div>
                                <div className='input-container'>
                                    <label
                                        htmlFor='Message'
                                        className={classes.label}
                                    >
                                        Messaggio
                                    </label>
                                    <textarea
                                        placeholder='Scrivi il tuo messaggio....'
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        type='text'
                                        name='Message'
                                        className={`form-message ${classes.message}`}
                                    />
                                </div>

                                <div className='submit-btn'>
                                    <button
                                        type='submit'
                                        className={classes.submitBtn}
                                    >
                                        <p>{!success ? 'Invia' : 'Inviato'}</p>
                                        <div className='submit-icon'>
                                            <AiOutlineSend
                                                className='send-icon'
                                                style={{
                                                    animation: !success
                                                        ? 'initial'
                                                        : 'fly 0.8s linear both',
                                                    position: success
                                                        ? 'absolute'
                                                        : 'initial',
                                                }}
                                            />
                                            <AiOutlineCheckCircle
                                                className='success-icon'
                                                style={{
                                                    display: !success
                                                        ? 'none'
                                                        : 'inline-flex',
                                                    opacity: !success ? '0' : '1',
                                                }}
                                            />
                                        </div>
                                    </button>
                                </div>
                            </form>
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                                open={open}
                                autoHideDuration={4000}
                                onClose={handleClose}
                            >
                                <SnackbarContent
                                    action={
                                        <React.Fragment>
                                            <IconButton
                                                size='small'
                                                aria-label='close'
                                                color='inherit'
                                                onClick={handleClose}
                                            >
                                                <CloseIcon fontSize='small'/>
                                            </IconButton>
                                        </React.Fragment>
                                    }
                                    style={{
                                        backgroundColor: theme.primary,
                                        color: theme.secondary,
                                        fontFamily: 'var(--primaryFont)',
                                    }}
                                    message={errMsg}
                                />
                            </Snackbar>
                        </div>

                        <div className='contacts-details'>
                            <a
                                href={`mailto:${contactsData.email}`}
                                className='personal-details'
                            >
                                <div className={classes.detailsIcon}>
                                    <FiAtSign/>
                                </div>
                                <p style={{color: theme.tertiary}}>
                                    {contactsData.email}
                                </p>
                            </a>
                            <a
                                href={`tel:${contactsData.phone.replace(" ", "")}`}
                                className='personal-details'
                            >
                                <div className={classes.detailsIcon}>
                                    <FiPhone/>
                                </div>
                                <p style={{color: theme.tertiary}}>
                                    {contactsData.phone}
                                </p>
                            </a>
                            <div className='personal-details'>
                                <div className={classes.detailsIcon}>
                                    <HiOutlineLocationMarker/>
                                </div>
                                <p style={{color: theme.tertiary}}>
                                    {contactsData.address}
                                </p>
                            </div>

                            {/*<div className='socialmedia-icons'>*/}
                            {/*    {socialsData.linkedIn && (*/}
                            {/*        <a*/}
                            {/*            href={socialsData.linkedIn}*/}
                            {/*            target='_blank'*/}
                            {/*            rel='noreferrer'*/}
                            {/*            className={classes.socialIcon}*/}
                            {/*        >*/}
                            {/*            <FaLinkedinIn aria-label='LinkedIn'/>*/}
                            {/*        </a>*/}
                            {/*    )}*/}
                            {/*    {socialsData.instagram && (*/}
                            {/*        <a*/}
                            {/*            href={socialsData.instagram}*/}
                            {/*            target='_blank'*/}
                            {/*            rel='noreferrer'*/}
                            {/*            className={classes.socialIcon}*/}
                            {/*        >*/}
                            {/*            <FaInstagram aria-label='Instagram'/>*/}
                            {/*        </a>*/}
                            {/*    )}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <img
                        src={theme.contactsimg}
                        alt='contacts'
                        className='contacts--img'
                    />
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1757341859">
            <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg"
                 className="transition duration-300 ease-in-out delay-150">
                <path
                    d="M 0,400 L 0,75 C 74.44102564102565,81.77435897435898 148.8820512820513,88.54871794871795 238,80 C 327.1179487179487,71.45128205128205 430.9128205128204,47.579487179487174 520,38 C 609.0871794871796,28.420512820512823 683.4666666666667,33.13333333333333 751,43 C 818.5333333333333,52.86666666666667 879.220512820513,67.8871794871795 958,80 C 1036.779487179487,92.1128205128205 1133.651282051282,101.31794871794871 1217,100 C 1300.348717948718,98.68205128205129 1370.1743589743592,86.84102564102565 1440,75 L 1440,400 L 0,400 Z"
                    stroke="none" stroke-width="0" fill="#823ae0" fill-opacity="0.4"
                    className="transition-all duration-300 ease-in-out delay-150 path-0"></path>
                <path
                    d="M 0,400 L 0,175 C 104.25384615384615,187.47692307692307 208.5076923076923,199.95384615384614 282,190 C 355.4923076923077,180.04615384615386 398.223076923077,147.66153846153847 474,140 C 549.776923076923,132.33846153846153 658.6,149.39999999999998 740,158 C 821.4,166.60000000000002 875.376923076923,166.73846153846156 958,170 C 1040.623076923077,173.26153846153844 1151.892307692308,179.64615384615382 1237,181 C 1322.107692307692,182.35384615384618 1381.053846153846,178.6769230769231 1440,175 L 1440,400 L 0,400 Z"
                    stroke="none" stroke-width="0" fill="#823ae0" fill-opacity="0.53"
                    className="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                <path
                    d="M 0,400 L 0,275 C 87.84358974358975,281.7051282051282 175.6871794871795,288.4102564102564 244,291 C 312.3128205128205,293.5897435897436 361.0948717948718,292.06410256410254 445,291 C 528.9051282051282,289.93589743589746 647.9333333333334,289.3333333333333 751,276 C 854.0666666666666,262.6666666666667 941.1717948717949,236.60256410256414 1003,241 C 1064.8282051282051,245.39743589743586 1101.3794871794871,280.2564102564102 1170,291 C 1238.6205128205129,301.7435897435898 1339.3102564102564,288.3717948717949 1440,275 L 1440,400 L 0,400 Z"
                    stroke="none" stroke-width="0" fill="#823ae0" fill-opacity="1"
                    className="transition-all duration-300 ease-in-out delay-150 path-2"></path>
            </svg>
            </div>
        </div>
    );
}

export default Contacts;
