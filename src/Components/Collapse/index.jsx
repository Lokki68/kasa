import React, {useState} from 'react';
import Styles from './collapse.module.scss'

const Collapse = ({title, content, open=false}) => {
    const [isOpen, setIsOpen] = useState(open)
    const toggleCollapse = () => setIsOpen(!isOpen)

    return (
        <div className={Styles.collapseContainer} >
            <div className={Styles.collapseBar} onClick={toggleCollapse} >
                {title}
                {
                    isOpen ?
                        <i className="fa-solid fa-chevron-up" ></i> :
                        <i className="fa-solid fa-chevron-down" ></i>
                }
            </div>
            {
                isOpen && <div className={Styles.collapseContent}>{content}</div>
            }

        </div>
    );
};

export default Collapse;