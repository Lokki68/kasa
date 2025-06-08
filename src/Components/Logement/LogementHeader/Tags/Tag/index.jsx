import Styles from './tag.module.scss'

const Tag = ({tag}) => {
    return (
        <div className={Styles.tagContainer} >
            {tag}
        </div>
    );
};

export default Tag;