import React from 'react';
import About from './about';
import Project from './newProjects';
import Header from './header';
import Footer from './footer';
import Skills from './skills';
import NavBar from './navBar';


const Home = () => {
    return (
        <div className='home-container' >
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