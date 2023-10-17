import Featured from '../../Components/featured/Featured';
import FeaturedProperties from '../../Components/featuredProperties/FeaturedProperties';
import Footer from '../../Components/footer/Footer';
import Header from '../../Components/header/Header';
import MailList from '../../Components/mailList/MailList';
import Navbar from '../../Components/navbar/Navbar';
import PropertyList from '../../Components/propertyList/PropertyList';
import './Home.css';


const Home = () => {
  return (
    <div>
       <Navbar />
       <Header />

        <div className="homeContainer">
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className='homeTitle'>Homes guests love</h1>
          <FeaturedProperties />
          <MailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home
