import Styles from './card.module.scss'
import {Link} from "react-router-dom";
const Card = ({item}) => {
    const { id, title, cover } = item
    return (
        <Link to={`/logement/${id}`} className={Styles.cardContainer} >
            <h3>{title}</h3>
            <div className={Styles.cardPicture} >
                <img src={cover} alt={title} loading='lazy'/>
            </div>
        </Link>
    );
};

export default Card;