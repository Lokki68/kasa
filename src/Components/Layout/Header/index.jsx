import Styles from './header.module.scss'
import kasa_logo from '../../../assets/kasa_logo.svg'
import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const {pathname} = useLocation()

    return (
        <header className={Styles.header}>
            <img src={kasa_logo} alt="Kasa Logo" className={Styles.headerLogo} loading='lazy'/>
            <nav>
                <NavLink
                    to='/'
                    className={ pathname === '/' ? Styles.navItemActive : Styles.navItem }
                >
                    Accueil
                </NavLink>
                <NavLink
                    to='/about'
                    className={ pathname === '/about' ? Styles.navItemActive : Styles.navItem }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;