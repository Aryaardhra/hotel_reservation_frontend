import Featured from "../../featured/Featured";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import MailList from "../../mail/MailList";
import Navbar from "../../navbar/Navbar";
import PropertyList from "../../propertyList/PropertyList";
import SubFeatures from "../../subFeatures/SubFeatures";
import "./home.css";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="home">
    <div className="homeContainer">
      <Featured />
      <h2 className="homeTitle">Browse by property type</h2>
      <PropertyList />
      <h2 className="homeTitle">Homes guests love</h2>
      <SubFeatures />
      <MailList />
      <Footer />
    </div>
    </div>
    </>
  )
}

export default Home;