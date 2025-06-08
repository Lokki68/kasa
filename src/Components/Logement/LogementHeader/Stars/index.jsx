import Styles from './stars.module.scss'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Stars = ({rates}) => {

    const stars = []

    for (let i = 1; i <= 5; i++) {
        stars.push(<FontAwesomeIcon
            key={i}
            icon={faStar}
            style={{color: i <= rates ? '#FF6060' : '#E3E3E3'}}
        />)
    }

    return (
        <div className={Styles.starsContainer}>
            {stars}
        </div>
    );
};

export default Stars;