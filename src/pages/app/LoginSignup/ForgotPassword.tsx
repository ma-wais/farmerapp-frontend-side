import React from 'react'
import Layout from './Layout'
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Input from '../../components/app/Input';

const ForgotPassword: React.FC = () => {


    return (
        <Layout showUI={false}>
            <Box className="textCenter" marginBottom={'40px'}>
                <Typography variant='h4' className='heading'>
                    Forgot <br />
                    Password
                </Typography>
                <Typography sx={{ marginTop: "12px" }}>
                    Please enter your email linked with the Farm DSS account to change the password
                </Typography>
            </Box>

            <ul className='list radioList bordered'>
                <li>
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Input type='tel' value={'loremipsum@gmail.com'} label={'Email Address'} />
                </li>
            </ul>

            <Typography className='textMD textDark' sx={{ marginTop: '28px', marginBottom: '17px' }}>
                Enter the Verification Code
            </Typography>

            <ul className='list radioList bordered flexRow'>
                <li>
                    <Input className='textCenter' type='number' value={'1'} label={''} maxLength={1} />
                </li>
                <li>
                    <Input className='textCenter' type='number' value={'2'} label={''} maxLength={1} />
                </li>
                <li>
                    <Input className='textCenter' type='number' value={'3'} label={''} maxLength={1} />
                </li>
                <li>
                    <Input className='textCenter' type='number' value={'4'} label={''} maxLength={1} />
                </li>
            </ul>
            <Box className='textSM textDark textCenter' sx={{ marginTop: '20px' }}>
                If you didn’t receive a code?
                <a href="#!" className='textPrimary fwMedium' style={{ textDecoration: 'none' }}> Resend</a>
            </Box>

            <Box className='mtAuto'>
                <NavLink to={`/app/verifyAccount`} className={`btn primary block`}>
                Send Verification Code
                </NavLink>
            </Box>
        </Layout>
    )
}

export default ForgotPassword