import {NavLink} from "react-router-dom";
import Styles from './not_found.module.scss'

const NotFound = () => {
    return (
        <div className={Styles.not_found} >
            <div className={Styles.content}>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <NavLink to='/'>
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    );
};

export default NotFound;