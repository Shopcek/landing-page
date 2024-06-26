//@ts-ignore
import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import icon from '../../assets/images/icon.svg'
import text from '../../assets/images/text.svg'

import { Nav, Logo } from './web'
import { useNavigate } from 'react-router'

import { MenuProvider, useMenu } from '../../context/menu'

import { MobileMenu } from './menu'

export function Header() {
    function Component() {
        const { isOpen, stateChangeHandler } = useMenu()
        const navigate = useNavigate()

        return (
            <React.Fragment>
                <MobileMenu />
                <header className="header">
                    <img
                        onClick={() => {
                            navigate('/')
                        }}
                        className="icon"
                        src={icon}
                    />
                </header>
            </React.Fragment>
        )
    }

    return (
        <MenuProvider>
            <Component></Component>
        </MenuProvider>
    )
}
