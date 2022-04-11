import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { userLogoutAction } from '../../store/actions/userActions'

import { Section, ResponsiveNav } from './Sidebar.elements'

import { MdSpaceDashboard } from 'react-icons/md'
import { IoIosCreate } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import { IoSettings, IoStatsChart } from 'react-icons/io5'
import { FiLogOut, FiTrendingDown } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { VscChromeClose } from 'react-icons/vsc'

export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1)
    const [navbarState, setNavbarState] = useState(false)

    const dispatch = useDispatch()

    const html = document.querySelector('html')
    html.addEventListener('click', () => setNavbarState(false))
    return (
        <>
            <Section>
                <div className='top'>
                    <div className='brand'>
                        <span>Expenser.</span>
                    </div>
                    <div className='toggle'>
                        {navbarState ? (
                            <VscChromeClose
                                onClick={() => setNavbarState(false)}
                            />
                        ) : (
                            <GiHamburgerMenu
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setNavbarState(true)
                                }}
                            />
                        )}
                    </div>
                    <div className='links'>
                        <ul>
                            <li>
                                <Link to='/dashboard'>
                                    <MdSpaceDashboard />
                                    <span> Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/transaction/new'>
                                    <IoIosCreate />
                                    <span> Transaction</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/expenses'>
                                    <FiTrendingDown />
                                    <span> Expenses</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/savings'>
                                    <IoStatsChart />
                                    <span> Savings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/other'>
                                    <GiReceiveMoney />
                                    <span> Other</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard'>
                                    <IoSettings />
                                    <span> Settings</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div
                    className='logout'
                    onClick={() => dispatch(userLogoutAction())}
                >
                    <Link href='#'>
                        <FiLogOut />
                        <span className='logout'>Logout</span>
                    </Link>
                </div>
            </Section>
            <ResponsiveNav
                state={navbarState}
                className={navbarState ? 'show' : ''}
            >
                <div className='responsive__links'>
                    <ul>
                        <li>
                            <Link to='/dashboard'>
                                <MdSpaceDashboard />
                                <span> Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/transaction/new'>
                                <IoIosCreate />
                                <span> Transaction</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/expenses'>
                                <FiTrendingDown />
                                <span> Expenses</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/savings'>
                                <IoStatsChart />
                                <span> Savings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/other'>
                                <GiReceiveMoney />
                                <span> Other</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>
                                <IoSettings />
                                <span> Settings</span>
                            </Link>
                        </li>
                        <li onClick={() => dispatch(userLogoutAction())}>
                            <Link href='#'>
                                <FiLogOut />
                                <span> Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </ResponsiveNav>
        </>
    )
}
