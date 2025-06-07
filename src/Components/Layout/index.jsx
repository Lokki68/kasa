import Styles from './layout.module.scss'
import Header from "./Header/index.jsx";
import Footer from "./Footer/index.jsx";

const Layout = ({children}) => {
    return (
        <div className={Styles.layout}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;