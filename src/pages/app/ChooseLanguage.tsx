import React from 'react'
import Layout from './Layout'
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ChooseLanguage: React.FC = () => {

    return (
        <Layout showUI={false}>
            <Box className="textCenter">
                <Typography variant='h4' className='heading'>
                    Choose your <br /> language
                </Typography>
                <Typography sx={{ marginTop: "12px" }}>
                    Please choose your desired language you want to go forward with. You can change the language preference later in settings.
                </Typography>
                <ul className='list' style={{ marginTop: "41px" }}>
                    <li>
                        <input type='radio' name='radio1' />
                        <Typography>
                            English
                        </Typography>
                    </li>
                    <li>
                        <input type='radio' name='radio1' />
                        <Typography>
                            Hindi
                        </Typography>
                    </li>
                    <li>
                        <input type='radio' name='radio1' />
                        <Typography>
                            Marathi
                        </Typography>
                    </li>
                    <li>
                        <input type='radio' name='radio1' />
                        <Typography>
                            Gujarati
                        </Typography>
                    </li>
                    <li>
                        <input type='radio' name='radio1' />
                        <Typography>
                            Kannada
                        </Typography>
                    </li>
                </ul>
            </Box>
            <NavLink to="/app/onboarding" className="btn primary mtAuto" >Next</NavLink>
        </Layout>
    )
}

export default ChooseLanguage