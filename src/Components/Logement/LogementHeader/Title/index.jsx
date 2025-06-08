import Styles from './title.module.scss'

const Title = ({title, location}) => {
    return (
        <div className={Styles.titleContainer}>
            <h2 className={Styles.title}>{title}</h2>
            <p className={Styles.location}>{location}</p>
        </div>
    );
};

export default Title;