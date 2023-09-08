import React from 'react'
import Layout from './Layout'
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Input from '../../components/app/Input';
import Select from '../../components/app/Select';

const Signup: React.FC = () => {


    return (
        <Layout showUI={false}>
            <Box className="textCenter">
                <Typography variant='h4' className='heading'>
                    Let’s create a <br />
                    Farm DSS account!
                </Typography>
                <Typography sx={{ marginTop: "12px" }}>
                    Welcome! Let's get started by creating your fresh account.
                </Typography>
            </Box>

            <Box className='tabs' sx={{ marginTop: '40px' }}>
                <NavLink to={'/app/signup'}>Sign Up</NavLink>
                <NavLink to={'/app/login'}>Login</NavLink>
            </Box>

            <ul className='list radioList bordered'>
                <li>
                    {/* user Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                        <ellipse cx="13" cy="8.35672" rx="4.64286" ry="4.64286" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                    </svg>
                    <Select name='' label={'Login As'}>
                        <option value="1">Farmer</option>
                        <option value="2">Buyer</option>
                    </Select>
                </li>
                <li>
                    {/* Mail Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Input type='tel' value={'9927611144'} label={'Phone Number'} />
                </li>
                <Typography textAlign={'center'} margin={'15px 0px'}>
                    OR
                </Typography>
                <li>
                    {/* EMail Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3.25" y="5.41699" width="19.5" height="15.1667" rx="3" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.1248 7.04199L12.9998 15.167L7.0415 9.20866" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <Input type='email' value={'farmer@farm.com'} label={'Email Address'} />
                </li>
            </ul>

            <Box className='mtAuto'>
                <Box sx={{ marginBottom: '21px', display: 'flex', alignItems: 'center', gap: '1em' }}>
                    <input type="checkbox" />
                    <label>
                        I agree to all user agreement and privacy policy.
                    </label>
                </Box>
                <NavLink to={`/app/verifyNewAccount`} className={`btn primary block`}>
                    Create Account
                </NavLink>
            </Box>
        </Layout>
    )
}

export default Signup