import Styles from './carrousel.module.scss'
import {useState} from "react";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Carrousel = ({pictures}) => {
    const picturesLength = pictures.length
    const [carrouselIndex, setCarrouselIndex] = useState(0)

    const handlePreviousPicture = () => {
        if (carrouselIndex > 0) {
            setCarrouselIndex(carrouselIndex - 1)
        } else {
            setCarrouselIndex(picturesLength - 1)
        }
    }

    const handleNextPicture = () => {
        if (carrouselIndex < picturesLength - 1) {
            setCarrouselIndex(carrouselIndex + 1)
        } else {
            setCarrouselIndex(0)
        }
    }

    return (
        <div className={Styles.carrouselContainer} >
            <div className={Styles.actionsContainer} >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={handlePreviousPicture}
                />
                <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={handleNextPicture}
                />
            </div>

            <div className={Styles.numberContainer} >
                <p>{carrouselIndex +1} / {picturesLength}</p>
            </div>

            <div className={Styles.carrouselPicture} >
                <img
                    src={pictures[carrouselIndex]}
                    alt={`picture ${carrouselIndex}`}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default Carrousel;