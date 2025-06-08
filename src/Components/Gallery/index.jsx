import Styles from './gallery.module.scss'
import Card from "./Card/index.jsx";

const Gallery = ({properties}) => {
    return (
        <div className={Styles.galleryContainer}>
            {
                properties.map((item, index) => (
                    <Card item={item} key={index} />
                ))
            }
        </div>
    );
};

export default Gallery;