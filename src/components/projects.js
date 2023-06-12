import React, { Component, useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import Cards from "./projectCards/cards.json";

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
    setCurrentIndex(newIndex);
}

const nextSlide = () => {};

class Projects extends Component {
    render() {
        return (
        <div className="projects mt-96 group">
            <h2 className="header text-4xl font-bold text-slate-100">My Projects</h2>
            <div>
                <div className="projectContainer grid justify-items-center">
                {Cards.map((cardDetails, i) => {
                    return (
                        <div> 
                            <div className="mt-28" key={i}>
                                <h4 className="font-bold text-2xl text-slate-100 underline">{cardDetails.cardname}</h4>
                                <img className="projectImg w-100 h-80 p-4" src={cardDetails.image} alt="Project Card"/>
                                <div>
                                    <a className="m-2" href={cardDetails.github}>
                                        <button className="btn border rounded m-4 p-2 text-slate-100 bg-gray-500 hover:bg-blue-500">GitHub Repo</button>
                                    </a>
                                    <a className="m-2" href={cardDetails.deployedSite}>
                                        <button className="btn border rounded m-4 p-2 text-slate-100 bg-gray-500 hover:bg-blue-500">Website</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>

        )
    }
}

export default Projects;