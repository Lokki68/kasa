import about_picture from '../../assets/about_picture.png'

import Banner from "../../Components/Banner/index.jsx";
import Collapse from "../../Components/Collapse/index.jsx";

import {aboutData} from "../../Data/about_data.js";

const About = () => {
    return (
        <div>
            <Banner picture={about_picture} height />
            {
                aboutData.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} open={index === 0} />
                ))
            }
        </div>
    );
};

export default About;