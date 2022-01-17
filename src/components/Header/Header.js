import { NavLink } from 'react-router-dom'
import { Switch } from '@mui/material'
import tw from 'twin.macro'
import styled from "styled-components";


const AutosubmitWrap = styled.div`
    ${tw`flex items-center ml-auto`}
    `

const HeaderWrap = styled.header`
    ${tw`flex items-center`}
    `

const NavList = styled.ul`
    ${tw`flex items-center`}
    `

const Header = ({ autoSubmit, setAutoSubmit }) => {

    function handleToggle() {
        setAutoSubmit(!autoSubmit)
    }

    const navItems = [
        {
            title: "Buffer",
            link: "/buffer"
        },
        {
            title: "Library",
            link: "/library"
        }
    ]

    return (
        <HeaderWrap>
            <nav>
                <NavList>
                    {navItems.map((item, index) =>
                        <li key={index}>
                            <NavLink className={isActive => "p-4" +
                                (isActive.isActive ? " bg-gray-300" : "")
                            } to={item.link}>{item.title}
                            </NavLink>
                        </li>)}
                </NavList>
            </nav>
            <AutosubmitWrap>
                <span>autosubmit</span>
                <Switch onChange={handleToggle} checked={autoSubmit} />
            </AutosubmitWrap>

            <nav>
                <NavList>
                    <li>
                        <NavLink className={isActive => "p-4" +
                            (isActive.isActive ? " bg-gray-300" : "")
                        } to="/archive">Archive</NavLink>
                    </li>
                </NavList>
            </nav>
        </HeaderWrap>
    )
}

export default Header
