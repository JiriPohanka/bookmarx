import { NavLink } from 'react-router-dom'
import { Switch } from '@mui/material'

const Header = (props) => {
    const setAutoSubmit = props.setAutoSubmit
    const autoSubmit = props.autoSubmit

    function handleToggle() {
        setAutoSubmit(!autoSubmit)
    }

    const navItems = [
        {
            title: "Buffer",
            link: "/buffer",
            cName: "nav-item buffer-nav-item"
        },
        {
            title: "Library",
            link: "/library",
            cName: "nav-item library-nav-item"
        },
        {
            title: "Archive",
            link: "/archive",
            cName: "nav-item archive-nav-item"
        }
    ]

    return (
        <header>
            <nav>
                <ul>
                    {navItems.map((item, index) =>
                        <li key={index}>
                            <NavLink className={item.cName} activeClassName="is-active" to={item.link}>{item.title}</NavLink>
                        </li>)}
                </ul>
            </nav>
            <div className="autosubmit-wrap">
                <span>autosubmit</span>
                <Switch onChange={handleToggle} />
            </div>
        </header>
    )
}

export default Header
