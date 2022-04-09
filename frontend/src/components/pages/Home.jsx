import React, { useEffect, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import UserContext from '../../context/userContext';
import './Home.css';
import image from './Images/image.png';
import ww2 from './Images/home1.png';
import Footer from './Footer/Footer';

import ww3 from './Images/home2.png';

const Home = () => {
    const { userData } = useContext(UserContext);
    const history = useNavigate();

    useEffect(() => {
        if (!userData.user)
            history("/");

    }, []);
    return (
        <>
            <div className='homeMain'>
                <div className="home">
                    <div className="homeImg">
                        <img src={image} alt="img" />
                    </div>
                    <div className="right">
                        <h1 className='heading'>Welcome to Saksham</h1>
                        <div id="carouselExampleControls" className="carousel slide carouselMain" data-ride="carousel" data-interval="2000">

                            <div className="carousel-inner">
                                <div className="carousel-item active carouselImg">
                                    <img className="d-block w-100" src={ww2} alt="First slide" />
                                </div>
                                <div className="carousel-item carouselImg">
                                    <img className="d-block w-100" src={ww3} alt="Second slide" />
                                </div>
                                <div className="carousel-item carouselImg">
                                    <img className="d-block w-100" src="http://www.mysticindiatour.com/wp-content/uploads/2013/12/Maharashtra-Arts-Crafts.jpg" alt="Third slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='OurContributers'>
                    <h1 className="h1">Our Top Contributers</h1>
                    <div className="card" style={{ width: "18rem" }}>
                        <div>
                            <img className="card-img-top" src="https://files.globalgiving.org/pfil/11402/pict_featured_jumbo.jpg?t=1641216097000" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Nidhi Khanna</h5>
                            <p className="card-text">I am from Ujjain, Madhya Pradesh and I like do craft work. Craft of any kind. Saksham has helped me reach milions of people across india and sell my products directly to them</p>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div>
                            <img className="card-img-top" src="https://www.indiafilings.com/learn/wp-content/uploads/2018/07/Indira-Gandhi-National-Old-Age-Pension-Scheme.jpg" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Ashrad Pandy</h5>
                            <p className="card-text">SI am a Handicraft Worker From a village Bargi in Jabalpur district, India and my speciality is Wooden Craft and I make bags , stands, wooden hangers and variety of other products. I am glad to be a part of saksham and thankful to them for this incredible initiative</p>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>

                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <div>
                            <img className="card-img-top" src="https://elements-twenty20-photos-0.imgix.net/production/uploads/items/3f5fce8f-5147-41f0-8713-ff396455d9ae/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=034ee5a8fef263242d38723b71169d29" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Mahesh Jain</h5>
                            <p className="card-text">I am a Handicraft Worker From a village in Jaipur district, Rajashthan and my speciality is Porcelain Art and Craft and I make flower vase , baskets, holders and variety of other products and customise it to make better. I thank saksham community to give a boost to our livelihood</p>

                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>
                            <span><i className="fas fa-star" style={{ color: "yellow", fontSize: "1.5rem", marginRight: "0.3rem", textShadow: "2px 2px #ff0000" }}></i></span>

                        </div>
                    </div>
                </div>
                <div className='OurCommunity'>
                    <h1 className="h1">Our Community</h1>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className='stats'>
                            <h3>States</h3>
                            <p style={{ fontSize: "1.5rem" }}>15</p>
                        </div>
                        <div className='stats'>
                            <h3>Customers</h3>
                            <p style={{ fontSize: "1.5rem" }}>200,000</p>
                        </div>
                        <div className='stats'>
                            <h3>Contributers</h3>
                            <p style={{ fontSize: "1.5rem" }}>10,000</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )

}

export default Home;