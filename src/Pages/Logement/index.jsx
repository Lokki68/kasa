import {NavLink, useParams} from "react-router-dom";
import logements from '../../Data/logements.json'
import Styles from './logement.module.scss'
import Carrousel from "../../Components/Logement/Carrousel/index.jsx";
import LogementHeader from "../../Components/Logement/LogementHeader/index.jsx";
import Collapse from "../../Components/Collapse/index.jsx";

const Logement = () => {
    const params = useParams()
    const logement = logements.find(logement => logement.id === params.id)

    if (!logement) {
        return (
            <div className={Styles.logementNotFound} >
                <h2>
                    Logement introuvable
                </h2>

                <NavLink to='/'>
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        )
    }

    return (
        <div className={Styles.logementContainer} >
            <Carrousel pictures={logement.pictures} />
            <LogementHeader title={logement.title} location={logement.location} host={logement.host} tags={logement.tags} stars={logement.rating}  />
            <div className={Styles.detailContainer}>
                <Collapse title='Description' open={true} content={logement.description} />
                <Collapse title='Equipement' >
                    {
                        logement.equipments.map((item, index) => <p key={index}>{item}</p>)
                    }
                </Collapse>


            </div>
        </div>
    );
};

export default Logement;