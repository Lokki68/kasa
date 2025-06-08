import Styles from './logement_header.module.scss'
import Title from "./Title/index.jsx";
import Tags from "./Tags/index.jsx";
import Stars from "./Stars/index.jsx";
import Host from "./Host/index.jsx";



const LogementHeader = ({title, location, tags, stars, host}) => {
    return (
        <div className={Styles.logementHeader}>
            <div className={Styles.titleContainer} >
                <Title title={title} location={location} />
                <Tags tags={tags} />
            </div>
            <div className={Styles.infoContainer}>
                <Stars rates={stars} />
                <Host name={host.name} picture={host.picture} />
            </div>
        </div>
    );
};

export default LogementHeader;