import React from 'react';

import ImageHero from 'assets/image/static/hero-image.png';
import Icon1 from 'assets/image/icons/ic_traveler.svg';
import Icon2 from 'assets/image/icons/ic_treasure.svg';
import Icon3 from 'assets/image/icons/ic_cities.svg';
import Button from 'elements/Button';

const Hero = (props) => {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    const formatNumber = param => {
        const formatNumbering = new Intl.NumberFormat("id-ID");
            return formatNumbering.format(param);
    }

    return(
        <div className="container hero-section">
            <div className="row">
                <div className="col-md-6 hero-section__left">
                    <h1>Forget Busy Work, Start Next Vacation</h1>
                    <p>We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>

                    <Button 
                        className="btn px-5" 
                        isPrimary 
                        hasShadow 
                        onClick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className="hero-section__left__stats">
                        <div className="row mt-5">
                            <div className="col-auto mr-2">
                                <img src={Icon1} alt="Traveller's Icon"/>
                                <h6 className="mt-2">{formatNumber(80123)} <span className="label">traveler</span></h6>
                            </div>
                            <div className="col-auto mr-2">
                                <img src={Icon2} alt="Traveller's Icon"/>
                                <h6 className="mt-2">{formatNumber(1234)} <span className="label">treasure</span></h6>
                            </div>
                            <div className="col-auto mr-2">
                                <img src={Icon3} alt="Traveller's Icon"/>
                                <h6 className="mt-2">{formatNumber(12334)} <span className="label">cities</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 hero-section__right">
                    <img src={ImageHero} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default Hero;