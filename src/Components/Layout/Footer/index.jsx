import kasa_white_logo from '../../../assets/kasa_white_logo.svg'
import Styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <img src={kasa_white_logo} alt="Kasa logo" loading='lazy'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;