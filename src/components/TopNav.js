import React, { useState } from "react";
import "./topnav.css";
import Flag from "react-world-flags";
import RoomIcon from "@mui/icons-material/Room";
import SearchIcon from "@mui/icons-material/Search";

function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = (state) => {
    setIsOpen(state);
  };
  return (
    <>
      <div className="header">
        <div className="section section1">
          {" "}
          <div className="title">
            <div className="heading"></div>
            <span>.in</span>
          </div>
          <div className="location">
            <RoomIcon
              style={{
                color: "white",
                fontSize: "19px",
                display: "inline-block",
              }}
            />
            <div className="location-text">
              <p>Delivering to lucknow 226028</p>
              <h4>Update location</h4>
            </div>
          </div>
        </div>

        <div className="section section2">
          <div className="searchSection" >
            <select className="select-category">
              <option>All</option>
              <option>Mobiles</option>
              <option>Best Sellers</option>
              <option>Today's Deals</option>
              <option>Customer Service</option>
            </select>
          </div>
          <input type="text" placeholder="Search Amazon.in" />
          <button className="searchbtn">
            <SearchIcon />
          </button>
        </div>

        <div className="section section3">
          <div className="sub-section1"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}>
            <div className="language-container">
              <Flag code="IN" style={{ width: "20px", height: "20px", display: "inline-block" }} />
              <p style={{ marginLeft: "4px", fontWeight: "750", fontSize: "14px", color: "white" }}>EN</p>
              <span className="dropdown-icon">▼</span>
              {isOpen && (
                <div className="popup arrow-top">
                  <div className="popup-wrapper">
                    <ul>
                      <li>
                        <input type="radio" name="language" id="en" defaultChecked />
                        <label htmlFor="en">English - EN</label>
                      </li>
                      <hr />
                      <li>
                        <input type="radio" name="language" id="hi" />
                        <label htmlFor="hi">हिंदी - HI</label>
                      </li>
                      <li>
                        <input type="radio" name="language" id="ta" />
                        <label htmlFor="ta">தமிழ் - TA</label>
                      </li>
                      <li>
                        <input type="radio" name="language" id="te" />
                        <label htmlFor="te">తెలుగు - TE</label>
                      </li>
                      <li>
                        <input type="radio" name="language" id="kn" />
                        <label htmlFor="kn">ಕನ್ನಡ - KN</label>
                      </li>
                      <li>
                        <input type="radio" name="language" id="ml" />
                        <label htmlFor="ml">മലയാളം - ML</label>
                      </li>
                      <li>
                        <input type="radio" name="language" id="bn" />
                        <label htmlFor="bn">বাংলা - BN</label>
                      </li>
                      <li>
                        <input type="radio" name="language" id="mr" />
                        <label htmlFor="mr">मराठी - MR</label>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="sub-section2"
            onMouseEnter={() => toggleDropdown(true)}
            onMouseLeave={() => toggleDropdown(false)}>
            <div className="sign-lists">
              <p className="sign-h1">Hello, Sign in</p>
              <p className="sign-h2">Accounts & Lists<span className="dropdown-icon">▼</span></p>
              
              {isOpen && (
                <div className="popup arrow-top">
                  <div className="popup-wrapper">
                    <button className="SignIn-btn">Sign In</button>
                    <div className="lgn">
                    <span>New Customer?</span>
                    <a href="#"><span>Start here</span></a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="sub-section3">
            <div>Returns and orders</div>
          </div>
          <div className="sub-section4">
            <div>
              Cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
