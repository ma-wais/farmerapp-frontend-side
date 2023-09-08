import React from 'react'
import '../../styles/app/components/Navbar.css'
import menuIcon from '../../assets/icons/menu.svg'
import backIcon from '../../assets/icons/arrowLg.svg'
import walletIcon from '../../assets/icons/folder.svg'
import bellIcon from '../../assets/icons/notification.svg'
import { toggleSidebar } from './Sidebar'
import { Typography } from '@mui/material'
import { NavbarProps } from '../../props'

const Navbar: React.FC<NavbarProps> = ({ goBack = false, showIcons = false, pageTitle = '', community = false }) => {
    const handleGoBack = () => {

    }
    return (
        <div className='navbar'>
            {
                goBack == false ?
                    <img src={menuIcon} alt="Menu Icon" width={'23px'} onClick={toggleSidebar} />
                    : <img src={backIcon} alt="Menu Icon" width={'23px'} onClick={handleGoBack} style={{ transform: 'rotateZ(180deg)' }} />
            }
            {
                pageTitle && (
                    <Typography className='mxAuto heading' sx={{ fontSize: '24px !important', fontWeight: '600 !important' }}>{pageTitle}</Typography>
                )
            }
            {
                showIcons && (
                    <div className={`left ${!pageTitle && 'msAuto'}`}>
                        <div className="wallet">
                            <img src={walletIcon} alt="Menu Icon" />
                            <span className="balance">₹ 450</span>
                        </div>
                        <img src={bellIcon} alt="Menu Icon" className='mbAuto' />
                    </div>
                )
            }
            {
                community && (
                    <div className={`left ${!pageTitle && 'msAuto'}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={28}
                            viewBox="0 0 30 28"
                            fill="none"
                        >
                            <path
                                d="M23.44 10.872V6.432H19V4.416H23.44V0H25.456V4.416H29.884V6.432H25.456V10.872H23.44Z"
                                fill="#C89963"
                            />
                            <path
                                d="M10.5484 16.9597C13.5748 16.9597 16.0428 14.4915 16.0428 11.4652C16.0428 8.46817 13.5747 6 10.5484 6C7.52212 6 5.05396 8.46817 5.05396 11.4944C5.05396 14.4915 7.52212 16.9597 10.5484 16.9597ZM10.5484 7.76298C12.6051 7.76298 14.28 9.43781 14.28 11.4945C14.28 13.5513 12.6051 15.2261 10.5484 15.2261C8.49166 15.2261 6.81683 13.5513 6.81683 11.4945C6.81683 9.43781 8.49166 7.76298 10.5484 7.76298Z"
                                fill="#C89963"
                            />
                            <path
                                d="M15.103 16.6659C14.8385 16.6366 14.6034 16.7248 14.4271 16.9011C13.3986 17.9295 12.0178 18.4584 10.5486 18.4584C9.07934 18.4584 7.72779 17.9002 6.67 16.9011C6.4937 16.7248 6.25857 16.6366 5.99413 16.6659C2.64447 16.9011 0 19.7512 0 23.13V24.5111C0 25.9803 1.17525 27.1556 2.64447 27.1556H18.4231C19.8923 27.1556 21.0676 25.9803 21.0676 24.5111V23.13C21.0971 19.7511 18.4526 16.9304 15.1032 16.6659H15.103ZM19.3341 24.5112C19.3341 25.0108 18.9522 25.3927 18.4526 25.3927H2.64427C2.14469 25.3927 1.76278 25.0108 1.76278 24.5112V23.1301C1.76278 20.8089 3.49644 18.8108 5.75879 18.4876C7.08103 19.6335 8.78517 20.2799 10.5481 20.2799C12.3111 20.2799 14.0153 19.6628 15.3375 18.4876C17.6001 18.8402 19.3335 20.8087 19.3335 23.1301L19.3341 24.5112Z"
                                fill="#C89963"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={23}
                            height={24}
                            viewBox="0 0 23 24"
                            fill="none"
                        >
                            <path
                                d="M6.82878 9.55556H16.1621M6.82878 14.4444H16.1621M22 12C22 18.0751 17.299 23 11.5 23C9.12419 23 1.00084 23 1.00084 23C1.00084 23 2.8199 18.4242 2.0919 16.8899C1.39299 15.4169 1 13.7565 1 12C1 5.92487 5.70101 1 11.5 1C17.299 1 22 5.92487 22 12Z"
                                stroke="#C89963"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar