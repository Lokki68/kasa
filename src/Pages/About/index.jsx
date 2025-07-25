import about_picture from '../../assets/about_picture.png'

import Banner from "../../Components/Banner/index.jsx";
import Collapse from "../../Components/Collapse/index.jsx";
import styles from './about.module.scss'
import {aboutData} from "../../Data/about_data.js";

const About = () => {
    return (
        <div>
            <Banner picture={about_picture} height />
            <div className={styles.collapse_container} >
                {
                    aboutData.map((item, index) => (
                        <Collapse key={index} title={item.title} content={item.content} open={index === 0} />
                    ))
                }
            </div>
        </div>
    );
};

export default About;