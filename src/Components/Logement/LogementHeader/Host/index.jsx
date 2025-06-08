import Styles from './host.module.scss'

const Host = ({name, picture}) => {
    const [firstName, lastName] = name.split(' ')


    return (
        <div className={Styles.hostContainer}>
            <div className={Styles.nameContainer} >
                <p>{firstName}</p>
                <p>{lastName}</p>
            </div>
            <div className={Styles.pictureContainer} >
                <img src={picture} alt={name}/>
            </div>
        </div>
    );
};

export default Host;