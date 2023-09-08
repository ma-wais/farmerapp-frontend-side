import React from 'react'
import Layout from './Layout'
import { Box, Tab, Tabs, Typography, styled, withStyles } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Input from '../../components/app/Input';
import Select from '../../components/app/Select';
import TabPanel from '../../components/app/TabPanel';

const Signup: React.FC = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    const CustomTabs = styled(Tabs)(({ theme }) => ({
        borderBottom: `none`,
        borderRadius: '12px',
        background: '#EAECF0',
        boxShadow: 'none',
        padding: '6px',
        '& .MuiTabs-indicator': {
            display: 'none',
        },
        '& .Mui-selected': {
            borderRadius: 10,
            background: "var(--white-500, #FFF)",
            boxShadow: "0px 26px 60px 0px rgba(141, 155, 170, 0.15)",
            color: "var(--rhino-dark-500-main, #2C4364)",
            fontFamily: "Manrope",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 600,
            letterSpacing: "-0.16px"
        },

    }));

    const CustomTab = styled(Tab)(({ theme }) => ({
        minWidth: 0,
        // backgroundColor: 'red',
        textTransform: 'none',
        padding: '6px 15px',
        marginRight: theme.spacing(1),
        '&:last-child': {
            marginRight: 0,
        },
    }));


    return (
        <Layout>
            <Box className="textCenter">
                <Typography variant='h4' className='heading'>
                    Let’s create a <br />
                    Farm DSS account!
                </Typography>
                <Typography sx={{ marginTop: "12px" }}>
                    Welcome! Let's get started by creating your fresh account.
                </Typography>
            </Box>


            <CustomTabs
                value={selectedTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="simple tabs"
                sx={{marginTop:'40px'}}
            >
                <CustomTab label="Sign Up" />
                <CustomTab label="Login" />
            </CustomTabs>

            <TabPanel value={selectedTab} index={0}>
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
                        {/* user Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                            <ellipse cx="13" cy="8.35672" rx="4.64286" ry="4.64286" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>
                        <Input type='tel' value={'9927611144'} label={'Phone Number'} />
                    </li>
                    <Typography textAlign={'center'} margin={'15px 0px'}>
                        OR
                    </Typography>
                    <li>
                        {/* user Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                            <ellipse cx="13" cy="8.35672" rx="4.64286" ry="4.64286" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>
                        <Input type='email' value={'farmer@farm.com'} label={'Email Address'} />
                    </li>
                </ul>

                <Box className='w95 positionBottom positionVCenter'>
                    <Box sx={{ marginBottom: '21px', display: 'flex', alignItems: 'center', gap: '1em' }}>
                        <input type="checkbox" />
                        <label>
                            I agree to all user agreement and privacy policy.
                        </label>
                    </Box>
                    <NavLink to={`#`} className={`btn primary block`}>
                        Create Account
                    </NavLink>
                </Box>
            </TabPanel>


            {/* Login CODE */}
            <TabPanel value={selectedTab} index={1}>
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
                        {/* user Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                            <ellipse cx="13" cy="8.35672" rx="4.64286" ry="4.64286" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>
                        <Input type='tel' value={'9927611144'} label={'Phone Number'} />
                    </li>
                    <Typography textAlign={'center'} margin={'15px 0px'}>
                        OR
                    </Typography>
                    <li>
                        {/* user Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M3.25 21.3573L3.48898 21.1183C6.01146 18.5958 9.43267 17.1787 13 17.1787V17.1787C16.5673 17.1787 19.9885 18.5958 22.511 21.1183L22.75 21.3573" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                            <ellipse cx="13" cy="8.35672" rx="4.64286" ry="4.64286" stroke="#ADB4C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel" />
                        </svg>
                        <Input type='email' value={'farmer@farm.com'} label={'Email Address'} />
                    </li>
                </ul>

                <Box className='w95 positionBottom positionVCenter'>
                    <Box sx={{ marginBottom: '21px', display: 'flex', alignItems: 'center', gap: '1em' }}>
                        <input type="checkbox" />
                        <label>
                            I agree to all user agreement and privacy policy.
                        </label>
                    </Box>
                    <NavLink to={`#`} className={`btn primary block`}>
                        Create Account
                    </NavLink>
                </Box>
            </TabPanel>
        </Layout>
    )
}

export default Signup