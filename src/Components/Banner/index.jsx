import Styles from './banner.module.scss'

/**
 * @param {string | Object} picture
 * @param {HTMLElement} children
 * @param {boolean} [height = false]
 * @returns {JSX.Element}
 * @constructor
 */
const Index = ({picture, children, height= false}) => {
    return (
        <div className={`${Styles.banner_container} ${height && Styles.bannerHeight}`} >
            <div className={Styles.image_container}>
                <img src={picture} alt="banner picture" />
            </div>
            {children}
        </div>
    );
};

export default Index;