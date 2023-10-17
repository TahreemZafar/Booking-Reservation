import "./hotel.css";
import Navbar from '../../Components/navbar/Navbar';
import Header from '../../Components/header/Header';
import MailList from '../../Components/mailList/MailList';
import Footer from '../../Components/footer/Footer';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";


const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [open, setOpen] = useState(true)

  const photos = [
    {
      src: "https://media.architecturaldigest.com/photos/5d2503489cc853000825a39a/2:1/w_1280%2Cc_limit/190614_EJ_190614_QUAY_TOWER_3-0195_HIGH%2520RES%2520(1).jpg",
    },
    {
      src: "https://media.designcafe.com/wp-content/uploads/2022/03/16154002/apartment-balcony-decor-ideas-for-your-home.jpg",
    },
    {
      src: "https://woodsidevillage.com/wp-content/uploads/2022/06/NiceModernBedroom.jpg",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/5e30b4c769dcbf426b421101/1622592834869-0KH1CCXV98O064CK0JL1/Laurel+Way+Beverly+Hills+modern+mansion+glass+wall+living+room+with+views",
    },
    {
      src: "https://i.pinimg.com/originals/a4/f7/48/a4f74813559ec2afed325c8596fcd0fd.jpg",
    },
    {
      src: "https://cdn.home-designing.com/wp-content/uploads/2013/08/large-apartment-bathroom-11.jpg",
      
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let nsNumber;

    if (direction === "l") {
      nsNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else {
      nsNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    
    setSlideNumber(nsNumber);

  }


  return (
    <>
       <Navbar />
       <Header type="list" />
       
       <div className="hotelContainer">
        
       {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
           <div className="sliderWrapper">
           <img src={photos[slideNumber].src} alt="" className="sliderImg" />
           </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}

       <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Tower Street Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
