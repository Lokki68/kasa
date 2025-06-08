import Styles from './tags.module.scss';
import Tag from "./Tag/index.jsx";

const Tags = ({tags}) => {
    return (
        <div className={Styles.tagsContainer} >
            {
                tags.map((tag, index) => <Tag tag={tag} key={index} />)
            }
        </div>
    );
};

export default Tags;