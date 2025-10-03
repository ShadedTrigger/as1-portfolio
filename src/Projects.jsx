import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
        <h1>My Projects</h1>
        <h3>Click on any of the screenshots to learn more about each project!</h3>
        <div className="projectsContainer"> 
            <h2>Project 1: Bug Smasher Game</h2>
            <h2>Project 2: Gravity Flux</h2>
            <h2>Project 3: Website for Creperie</h2>
        </div>
        <div className="projectsContainer">
            <Link to="/Project1">
                <img src="./src/assets/project1.png" alt="Screenshot of my Bug Smasher Game" className="project1Image"/>
            </Link>
            <Link to="/Project2">
                <img src="./src/assets/project2.png" alt="Screenshot of my Gravity Flux Game" className="project2Image"/>
            </Link>
            <Link to="/Project3">
                <img src="./src/assets/project3.png" alt="Screenshot of Creperie Website" className="project3Image"/>
            </Link>
        </div>
        </>
    )
}