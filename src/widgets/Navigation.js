import { useState } from "react";
import { ActiveMenu, InactiveMenu, LOGO } from "../assets";
import MenuBlack from '../assets/images/inactiveMenuBlack.svg';
import LogoBlack from '../assets/images/logoBlack.svg';
import './widgetsStyles.css';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar(props) {
    const [navbar, setNavbar] = useState(false);
    const toggler = () => {
        setNavbar(prevState => !prevState)
    }

    return (
        <>
            <nav className={"navContainer"} style={{ background: props.bg }}>
                <section>
                    <Link to={'/'}>
                        {props.bg === '#ffffff' ? <img src={LogoBlack} alt='logo' /> :
                            <img src={LOGO} alt='logo' />}
                    </Link>
                </section>
                <section>
                    {navbar ?
                        <div className={"menuBtnContainer"} onClick={toggler} style={{ alignItems: navbar ? 'flex-end' : 'center' }}>
                            {props.bg === '#ffffff' ? <img src={MenuBlack} alt='icon' className={'menuBtn'} style={{ border: '1px solid red ' }} /> :
                                <img src={ActiveMenu} alt='icon' className={'menuBtn'} style={{ border: '1px solid red ' }} />}
                        </div>
                        :
                        <div className={"menuBtnContainer"} onClick={toggler} >
                            <img src={InactiveMenu} alt='icon' className={'menuBtn'} />
                        </div>
                    }

                </section>
                {navbar &&
                    <ul>
                        <NavLink to={'/work'} className={({ isActive }) => (isActive ? 'active' : '')} >
                            <li>WORK</li>
                        </NavLink>
                        <NavLink to={'/dump'} className={({ isActive }) => (isActive ? 'active' : '')} >
                            <li>DUMP</li>
                        </NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'active' : '')} >
                            <li>ABOUT</li>
                        </NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'active' : '')} >
                            <li>CONTACT</li>
                        </NavLink>



                    </ul>}
            </nav>
        </>
    );
}