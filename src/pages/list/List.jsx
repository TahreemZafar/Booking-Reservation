import "./list.css";
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/header/Header'
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../Components/searchItem/SearchItem";
import Footer from "../../Components/footer/Footer";
import MailList from "../../Components/mailList/MailList";

const List = () => {

  const location = useLocation()

  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  const destin = location.state.destination;
  const opt = location.state.options;
  const mydate = location.state.date;

  
  return (
    <div>
       <Navbar />
       <Header type="list" />

        <div className="listContainer">
          <div className="listWrapper">

            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>

              <div className="lsItem">
                <label htmlFor="">Destination</label>
                <input placeholder={destin} type="text" />
              </div>
              <div className="lsItem">
                <label htmlFor="">Check-In Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>

             { openDate && (
               <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
              )}
 
              </div>

             <div className="lsItem">
              <label>Options</label>
              
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>

            <div className="listResult">
              
              <SearchItem img="https://img.freepik.com/premium-photo/3d-rendering-interior-house-modern-open-living-space-with-kitchenluxury-modern-style-duplex-apartment-residencehome-decoration-luxury-interior-design_717482-944.jpg?w=2000" />
              <SearchItem img="https://www.luxxu.net/blog/wp-content/uploads/2016/02/Ultra-Luxury-Apartment-Design-cover.jpg" />
              <SearchItem img="https://www.pocketwanderings.com/wp-content/uploads/2022/03/St-Regis-Rome.jpg" />
              <SearchItem img="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg" />
              <SearchItem img="https://dlmdd.com/app/uploads/sonevajani-1880.jpeg" />
              <SearchItem img="https://cdn.home-designing.com/wp-content/uploads/2015/11/luxurious-staircase.jpg" />
              <SearchItem img="https://s3-ap-southeast-1.amazonaws.com/atap-main/gallery-full/404fa596-a036-4a02-982d-e5b94d13baa9/modern-apartment-design.jpg" />
              <SearchItem img="https://cdn.homedit.com/wp-content/uploads/2017/05/Taiwan-residence-with-colorblocked-decor-accents.jpg" />
              <SearchItem img="https://www.jamesedition.com/stories/wp-content/uploads/2020/10/15.jpg" />
              <SearchItem img="https://images.viewretreats.com/wp-content/uploads/2021/05/18124502/Sofitel-Sydney-Darling-Harbour-Luxury-Hotel-Sydney.jpeg" />
              <SearchItem img="https://img.freepik.com/premium-photo/3d-rendering-interior-house-modern-open-living-space-with-kitchenloft-style-duplex-apartment-residencehome-decoration-luxury-interior-design_717482-976.jpg?w=2000" />
              <SearchItem img="https://i.pinimg.com/originals/e9/50/d7/e950d7773ec40ccc15d4e2243678dc71.jpg" />
              <SearchItem img="https://88designbox.com/upload/2015/07/07/living-room-ideas-with-luxury-modern-interior-design-03.jpg" />

            </div>

          </div>
          <MailList />
          <Footer />
        </div>
    </div>


  )
}

export default List
 