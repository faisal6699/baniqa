import React from 'react';
import Header from '../layout/Header/Header';
import Main from '../Main/Main';
import Footer from '../layout/Footer/Footer';
import './Home.css';

const Home = () => {
    return (
        <div id="home">
            <div className="container-fluid">
                <Header/>

                <Main/>

                <Footer/>
            </div>
        </div>
    );
}

export default Home;
