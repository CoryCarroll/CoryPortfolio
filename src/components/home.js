import React from 'react';
import About from './about';
import Project from './newProjects';
import Header from './header';
import Footer from './footer';
import Skills from './skills';
import NavBar from './navBar';


const Home = () => {
    return (
        <div className='home-container bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 p-10' >
            <NavBar />
            <Header />
            <About />
            <Skills />
            <Project />
            <Footer />
        </div>
    )
}

export default Home;