import React from 'react'
import Layout from './Layout'
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Input from '../../components/app/Input';
import Select from '../../components/app/Select';

const VerifyNewAccount: React.FC = () => {


    return (
        <Layout showUI={false}>
            <Box className="textCenter">
                <Typography variant='h4' className='heading'>
                    Verify your <br />
                    Farm DSS account!
                </Typography>
                <Typography sx={{ marginTop: "12px" }}>
                    We have sent a verification code to the email address you provided.
                </Typography>
            </Box>

            <Typography className='textMD textDark' sx={{ marginTop: '50px', marginBottom: '17px' }}>
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
                <NavLink to={`#`} className={`btn primary block`}>
                    Verify Account
                </NavLink>
            </Box>
        </Layout>
    )
}

export default VerifyNewAccount;