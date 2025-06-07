import home_picture from '../../assets/home_picture.png'
import Banner from "../../Components/Banner/index.jsx";

const Home = () => {
    return (
        <div>
           <Banner picture={home_picture}>
               <h2>Chez vous,</h2>
               <h2>partout et ailleurs</h2>
           </Banner>
        </div>
    );
};

export default Home;