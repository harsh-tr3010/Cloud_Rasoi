import React, { useState } from "react";
import "./Menuorders.css";
import { Link } from 'react-router-dom';
import NavlogoImage from "./img/CR-icon.png";
import LogoImage from "./img/pizza.jpg";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Menuorders = () => {
  const [profile, setProfile] = useState({
    name: '',
    quantity_kg: '',
    price: '',
    image_URL: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfile({
        ...profile,
        image_URL: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profile.name);
    formData.append('quantity_kg', profile.quantity_kg);
    formData.append('price', profile.price);
    formData.append('image_URL', profile.image_URL);

    try {
      const response = await axios.post('http://localhost:3100/add-food-item', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Menu Added successfully!');
      navigate('/Vdashboard'); // Navigate to dashboard after successful submission
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    }
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div id="root" style={{ height: "100%" }}>
        <div className="whole-background _3arMG">
          <header className="header-section _76q0O">
            <div className="main-navbar global-nav">
              <div className="interior-navbar _1EuBh">
                <a
                  href="/"
                  className="logo d9y3g"
                  title="CloudRasoi"
                  style={{ marginRight: "16px" }}
                >
                  <img src={NavlogoImage} alt="" width="50px" height="50px" />
                </a>
                <div
                  role="button"
                  className="address-button _2z2N5"
                  tabIndex="0"
                >
                  <span className="other _1tcx6">
                    <span className="_3odgy">Other</span>
                  </span>
                  <span className="address _3HusE">
                    Agra, Uttar Pradesh, India
                  </span>
                  <span className="icon-downArrow kVKTT fa-solid fa-angle-down"></span>
                </div>
                <ul className="navbar-list _1JNGZ">
                  <li className="cart _1fo6c">
                    <div className="inner _1fmVk _30y3a">
                      <div>
                        <div className="inner1 _2CgXb">
                          <a className="_1T-E4" href="/checkout">
                            <span className="_3yZyp">
                              <i
                                className="fa-solid fa-cart-shopping"
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  fontSize: "18px",
                                }}
                              ></i>
                            </span>
                            <span>Cart</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "78px" }}>
                    <div className="inner1 _2CgXb">
                      <span className="_3yZyp">
                        <i
                          className="fa-regular fa-user"
                          style={{
                            width: "18px",
                            height: "19px",
                            fontSize: "18px",
                          }}
                        ></i>
                      </span>
                      <span>Sign In</span>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb" style={{ padding: '10px' }}>
                      <a className="_1T-E4" >
                        <span className="_3yZyp">
                          <i
                            className=""
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                        </span>
                        <Link to="/Vdashboard" className='_1T-E4' activeclassname="active">
                          <span>Dashboard</span>
                        </Link>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c _ma1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb">
                      <a className="_1T-E4" href="/support">
                        <span className="_3yZyp">
                          <i
                            className="fa-solid fa-percent"
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                          Offers
                        </span>
                        <span className="PJaej">New</span>
                      </a>
                    </div>
                  </li>
                  <li className="cart _1fo6c" style={{ width: "62px" }}>
                    <div className="inner1 _2CgXb">
                      <a className="_1T-E4" href="/support">
                        <span className="_3yZyp">
                          <i
                            className="fa-solid fa-magnifying-glass"
                            style={{
                              width: "18px",
                              height: "19px",
                              fontSize: "18px",
                            }}
                          ></i>
                        </span>
                        <span>Search</span>
                      </a>
                    </div>
                  </li>
                  <li
                    className="cart _1fo6c"
                    style={{ width: "156.5px" }}
                  ></li>
                </ul>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="main _mn2510">
        <div className="leftbox _lx2510">
          <div className="lowerleft _lt25100">
            <div className="box189">
              <div className="inpout56">
                <p>Res ID: 8512448</p>
              </div>
            </div>
            <div className="box289">
              <img src={LogoImage} width="300px" height="200px" alt="Logo" />
            </div>
            <div className="box389">
              <p className="content678">Sri Dauji Chatpata</p>
              <p className="content678">Kamla nagar agra</p>
              <p className="content678">+91 876543238</p>
              <p className="content6789">Registered</p>
            </div>
            <div className="box489">
              <i className="fa-solid fa-bars"></i>
              <p>Menu</p>
            </div>
            <div className="box589">
              <i className="fa-regular fa-image"></i>
              <p>Photos</p>
            </div>
          </div>
        </div>
        <div className="rightbox _rx2510">
          <div className="upper _ur2510"></div>
          <div className="lower _lr2510">
            <div className="upperbox _ux25101">
              <div className="photoupload">
                <div
                  style={{
                    maxWidth: "666px",
                    height: "500px",
                    padding: "1rem",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    marginLeft: "280px",
                    marginTop: "50px"
                  }}
                >
                  <form onSubmit={handleSubmit} className="_fomo009">
                    <label className="h_llo009">Upload Image</label>
                    <br/>
                    <div style={{ marginBottom: "1rem" }}>
                      <br/>
                      <input
                        type="file"
                        className="_rmtet00"
                        name="image_URL"
                        onChange={handleImageChange}
                        required
                        style={{paddingTop: '5px', paddingLeft: '5px'}}
                      />
                    </div>
                    <br/>

                    <div style={{ marginBottom: "1rem" }}>
                      <br/>
                      <label className="h_llo009">Item name</label><br/>
                      <br/>
                      <input
                        type="text"
                        name="name"
                        className="_rmtet00"
                        value={profile.name}
                        onChange={handleChange}
                        placeholder="Item name"
                        required
                      />
                    </div>
                    <br/>

                    <div style={{ marginBottom: "1rem" }}>
                      <br/>
                    <label className="h_llo009">Item Quantity</label><br/>
                    <br/>
                      <input
                        type="text"
                        name="quantity_kg"
                        className="_rmtet00"
                        value={profile.quantity_kg}
                        onChange={handleChange}
                        placeholder="Quantity (kg)"
                        required
                      />
                    </div>
                    <br/>

                    <div style={{ marginBottom: "1rem" }}>
                      <br/>
                    <label className="h_llo009">Item price</label><br/>
                    <br/>
                      <input
                        type="text"
                        name="price"
                        className="_rmtet00"
                        value={profile.price}
                        onChange={handleChange}
                        placeholder="Price"
                        required
                      />
                    </div>
                    <br/>

                    <br/><button type="submit" className="btt008">Add Food item</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="lowerbox _lx25101"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menuorders;
