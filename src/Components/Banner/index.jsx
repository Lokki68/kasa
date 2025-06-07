import Styles from './banner.module.scss'

const Index = ({picture, children}) => {
    return (
        <div className={Styles.banner_container} >
            <div className={Styles.image_container}>
                <img src={picture} alt="banner picture" />
            </div>
            {children}
        </div>
    );
};

export default Index;