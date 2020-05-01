import React, { Component } from 'react';
import Header from "parts/Header";
import Hero from "parts/Hero";

class LandingPage extends Component{
    render(){
        return(
            <>
                <Header {...this.props}></Header>
                <Hero/>
            </>
        )
    }
}

export default LandingPage;