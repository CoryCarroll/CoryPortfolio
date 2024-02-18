import React from 'react';
import About from './about';
import Project from './newProjects';
import Header from './header';
import Footer from './footer';
import Skills from './skills';
import NavBar from './navBar';
import ContactForm from './contactMe';


const Home = () => {
    return (
        <div className='home-container bg-gray-700'>
            <NavBar />
            <Header />
            <About />
            <Skills />
            <Project />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home;