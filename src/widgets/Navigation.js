import { useState } from "react";
import { ActiveMenu, InactiveMenu, LOGO } from "../assets";
import './widgetsStyles.css';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const toggler = () => {
        setNavbar(prevState => !prevState)
    }

    return (
        <>
            <nav className={"navContainer"}>
                <section>
                    <img src={LOGO} alt='logo' />
                </section>
                <section>
                    {navbar ?
                        <div className={"menuBtnContainer"} onClick={toggler} style={{ alignItems: navbar ? 'flex-end' : 'center' }}>
                            <img src={ActiveMenu} alt='icon' className={'menuBtn'} />
                        </div>
                        :
                        <div className={"menuBtnContainer"} onClick={toggler} >
                            <img src={InactiveMenu} alt='icon' className={'menuBtn'} />
                        </div>
                    }

                </section>
                {navbar &&
                    <ul>
                        <li>WORK</li>
                        <li>DUMP</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>}
            </nav>
        </>
    );
}