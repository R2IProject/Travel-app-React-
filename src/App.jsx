import PhoneHeader from "./assets/travel app header phone.png"
import gooogleplay from "./assets/googleappstore-removebg-preview.png"
import travelogo from "./assets/logo.jpg"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter , FaBlogger , FaArrowRight , FaCheck } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaGlobe } from 'react-icons/fa';
import { MdPeople } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import worldwide from "./assets/Tambahkan sedikit teks isi (2).png"
import Tgirl from "./assets/Travel Girl.png"
import cooked from "./assets/Tambahkan judul.png"
import playstore from "./assets/googleplay.png"
import appstore from "./assets/applestore.png"
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <h3 id='travel'>Travel App</h3>
        <nav>
        <ul>
            <li><a class="nav-link" href="#home">Review</a></li>
            <li><a class="nav-link" href="#People">People</a></li>
            <li><a class="nav-link" href="#Partners">Partners</a></li>
            <li><a class="nav-link" href="#Feedback">Feedback</a></li>
            <li><a class="nav-link" href="#Pricing">Pricing</a></li>
            <li><a id='getheapp'  class="nav-link" href="#Get_the_app">Get the app</a></li>
          </ul>
        </nav>
        </div>
        <div className="imga">
          <img src={PhoneHeader} alt="" />
          </div>
          <center><fa-chevron-down></fa-chevron-down></center>
        <div className="header">
          <ul>
            {/* =========== */}
            <li>
            <div class="travel-booking-app">
              {/* <img id="" src={travelogo} alt="Travel Booking App Logo" class="logo"/> */}
                <a id="tra" href="">Travel Booking App</a>
            </div>
            </li>
            {/* =========== */}
            <li><h1>Discover the <span id="span">Best</span> <br/> <span id="span">Lovely</span> Places</h1></li>
            <li><h>Plan and book your perfect tirp with expert advice, travel <br/> tips, destination information and inspiration from us</h></li>
            <br/>
            <li><img id="googleplay" src={gooogleplay} alt="" /></li>
          </ul>
        </div>
        <div className="world-wide">
          <div className="top">
            {/* ======= */}
            <center>
            <ul>
              <li>B U I L D  U P  A  C O M M U N I T Y</li>
              <li><h2>Join the biggest community of Travellers</h2></li>
            </ul>
            </center>
            {/* ======= */}
          </div>
          <div className="bottom">
            {/* ======= */}
            <center><img src= {worldwide} alt="" /></center>
            {/* ======= */}
          </div>
        </div>
        <div className="travel-girl">
          <div className="left_girl">
          <img id="tgirl" src={Tgirl} alt="" />
          </div>
          <div className="right-girl">
          <ul className="ul">
            <li>G E T  C O N N E T E D</li>
            <li id="resize">Share your memories <br /> with your travel buddys</li>
            <li><a href="">-</a></li><br />
            <li id="resize1">Search Travel Location</li>
            <li><FaGlobe className="FaGlobe" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /><span id="sp-girl">sed do euismod temport incididunt ut labore et dolore</span></li>
            <li id="resize1">Create Team Event</li>
            <li><MdPeople className="MdPeople" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /><span id="sp-girl">sed do euismod temport incididunt ut labore et dolore</span></li>
            <li id="resize1">Tract Members</li>
            <li><AiOutlineCalendar className="AiOutlineCalendar" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /><span id="sp-girl">sed do euismod temport incididunt ut labore et dolore</span></li>
          </ul>
          </div>
        </div>
        <div className="last-component-overcooked">
          <center><img src={cooked} alt="" /></center>
        </div>
        <div className="pricing_table">
            <ul>
              <li>P R I C I N G T A B L E</li>
              <li id="choose">Choose the plan that's right for you</li>
              <li><a href="">-</a></li>
            </ul>
        </div>
        <div className="pricing_tab">
          <div className="gird1">
            <div className="row">
              <div className="col">
                <div className="card">
                <ul>
                  <li><span id="price">$29</span>/month</li><br />
                  <li><span id="kategori">Basic</span></li><br />
                  <li>Lorem ipsum dolor sit amet,</li><br />
                  <li id="border">consectetur adipiscing elit</li><br />
                  <li><FaCheck className="green-checkmark" /> Lorem ipsum dolor sit amet</li><br />
                  <li><FaCheck className="green-checkmark" /> Sed ut perspiciatis</li><br />
                  <li><FaCheck className="green-checkmark" /> At vero eos et accusamus</li><br /><br /><br /><br /><br />
                  <li id="planner"><a href="">Choose Plan <span><FaArrowRight className="arrow-right"/></span></a></li>
                </ul>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <ul>
                    <li><span id="price">$49</span>/month</li><br />
                    <li><span id="kategori">Standard</span></li><br />
                    <li>Lorem ipsum dolor sit amet,</li><br />
                    <li id="border">consectetur adipiscing elit</li><br />
                    <li><FaCheck className="green-checkmark" /> Lorem ipsum dolor sit amet</li><br />
                    <li><FaCheck className="green-checkmark" /> Sed ut perspiciatis</li><br />
                    <li><FaCheck className="green-checkmark" /> At vero eos et accusamus</li><br /><br /><br /><br /><br />
                    <li id="planner"><a href="">Choose Plan <span><FaArrowRight className="arrow-right"/></span></a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <ul>
                    <li><span id="price">$99</span>/month</li><br />
                    <li><span id="kategori">Premium</span></li><br />
                    <li>Lorem ipsum dolor sit amet,</li><br />
                    <li id="border">consectetur adipiscing elit</li><br />
                    <li><FaCheck className="green-checkmark" /> Lorem ipsum dolor sit amet</li><br />
                    <li><FaCheck className="green-checkmark" /> Sed ut perspiciatis</li><br />
                    <li><FaCheck className="green-checkmark" /> At vero eos et accusamus</li><br /><br /><br /><br /><br />
                    <li id="planner"><a href="">Choose Plan <span><FaArrowRight className="arrow-right"/></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="component5">
          <ul>
            <li><h3>Download The Travelapp now!</h3></li><br/>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</li>
            <li>eiusmod tempor incididunt ut labore et dolore</li>
          </ul>
          <div className="grid">
            <div className="row">
              <div className="col">
                <a href=""><img id="icomp" src={playstore} alt="" /></a>
              </div>
              <div className="col">
                <a href=""><img id="icomp" src={appstore} alt="" /></a>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="containe">
            <div className="row">
              <div className="col">
                <div className="item">
                  <ul>
                    <li><h4>Company</h4></li>
                    <li><a href="#career">Career</a></li><br />
                    <li><a href="#about_us">About us</a></li><br />
                    <li><a href="#blog">Blog</a></li><br />
                    <li><a href="#press_info">Press Info</a></li><br />
                    <li><a href="#features">Features</a></li><br />
                    <li><a href="#successes">Successes</a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="item1">
                  <ul>
                    <li><h4>Travelapp</h4></li>
                    <li><a href="#wht_travelapp">Wht Travelapp</a></li><br />
                    <li><a href="#enterprise">Enterprise</a></li><br />
                    <li><a href="#customer_stories">Customer Stories</a></li><br />
                    <li><a href="#pricing">Pricing</a></li><br />
                    <li><a href="#security">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="item2">
                  <ul>
                    <li><h4>Resources</h4></li>
                    <li><a href="#Download">Download</a></li><br />
                    <li><a href="#Help">Help Center</a></li><br />
                    <li><a href="#Guides">Guides</a></li><br />
                    <li><a href="#Events">Events</a></li><br />
                    <li><a href="#Developers">Developers</a></li><br />
                    <li><a href="#App_Directory">App Directory</a></li><br />
                    <li><a href="#Partnes">Partnes</a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="item3">
                  <ul>
                    <li><h4>Extras</h4></li>
                    <li><a href="#Travekapp Shop">Travelapp Shop</a></li><br />
                    <li><a href="#Travelapp at work">Travelapp at work</a></li><br />
                    <li><a href="#Travelapp fund">Travelapp fund</a></li><br />
                    <li><a href="#Integrations">Integrations</a></li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="item4">
                  <ul>
                    <li><h4>Extras</h4></li>
                    <li>
                      <form action="#">
                        <div className="form-box">
                          <input type="text" name="EmailAddres" placeholder="Email Address"/>
                          <button id="siub" type="submit"><FontAwesomeIcon icon={faChevronRight} className="Fontawesome" /></button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="contain">
            <div className="row">
              <div className="col">
                <a id="containe" href="">Travelapp</a>
              </div>
              <div className="col">
                <ul>
                  <li><a href="Review">Review</a></li>
                  <li><a href="People">People</a></li>
                  <li><a href="Partners">Partners</a></li>
                  <li><a href="Feedback">Feedback</a></li>
                  <li><a href="Pricing">Pricing</a></li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li  id="ula"><a href="https://facebook.com"><FaFacebook/></a></li>
                  <li id="ula"><a href="https://blogger.com"><FaBlogger/></a></li>
                  <li id="ula"><a href="https://instagram.com"><FaInstagram/></a></li>
                  <li id="ula"><a href="https://youtube.com"><FaYoutube/></a></li>
                  <li id="ula"><a href="https://twitter.com"><FaTwitter/></a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>  
      </div>
    </>
  )
}

export default App
