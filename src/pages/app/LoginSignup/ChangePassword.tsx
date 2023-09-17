import React from 'react'
import Layout from '../Layout'
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Input from '../../../components/app/Input';
// import Select from '../../components/app/Select';

const ChangePassword: React.FC = () => {


    return (
        <Layout showUI={false}>
            <Box className="textCenter" marginBottom={'40px'}>
                <Typography variant='h4' className='heading'>
                    Change <br />
                    Password
                </Typography>
                <Typography sx={{ marginTop: "12px" }}>
                    Please enter your new password to change your password.
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
                <li>
                    {/* Password Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3.25" y="9.75" width="19.5" height="13" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.75 15.167H16.25" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.6665 6.50033C8.6665 4.10709 10.6066 2.16699 12.9998 2.16699V2.16699C15.3931 2.16699 17.3332 4.10709 17.3332 6.50033V9.75032H8.6665V6.50033Z" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Input type='tel' placeholder={'Password'} />
                </li>
                <li>
                    {/* Password Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3.25" y="9.75" width="19.5" height="13" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.75 15.167H16.25" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.6665 6.50033C8.6665 4.10709 10.6066 2.16699 12.9998 2.16699V2.16699C15.3931 2.16699 17.3332 4.10709 17.3332 6.50033V9.75032H8.6665V6.50033Z" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Input type='tel' placeholder={'Re-Enter Password'} />
                </li>
            </ul>

            <Box className='mtAuto'>
                <NavLink to={`/app/verifyAccount`} className={`btn primary block`}>
                    Change password
                </NavLink>
            </Box>
        </Layout>
    )
}

export default ChangePassword