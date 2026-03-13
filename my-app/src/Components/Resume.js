import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavigation from "./Navigation";
import Skills from "./Skills";
import Contact from "./Contact"
import resume from "../Assets/Icons/resume.png"
import projects from "../Assets/Icons/projects.png"
import experience from "../Assets/Icons/experience.png"
import education from "../Assets/Icons/education.png"
import resumeFile from "../Assets/Projects/MyaMahaleyResume.pdf"
export default function Resume() {
    const educationHeader = "[AUG 2019 - MAY 2023]";
    return (
        <div>
            <MyNavigation/>
            <Container className="ProjectsContainer3">
                <Row >
                    <Col xs={8}>
                        <img className="ResumeHeader" src={resume} alt="Resume"/>
                        
                    </Col>
                    <Col className="ProjectTitleContainer">
                        <a href={resumeFile} target = "_blank" rel="noreferrer"><h3 className="LinkButton" >Open PDF Version</h3></a>
                    </Col>

                </Row>
            </Container> 
            <Container className="ProjectsContainer2">
                <Row >
                    <Col className="ProjectTitleContainer">
                        <Container className="IntroText">
                            <Row>
                                <h4 ><strong>The University of Texas at Austin</strong></h4>
                            </Row>
                            <Row>
                                <h5 ><strong>B.S IN COMPUTER SCIENCE </strong></h5>
                            </Row>
                            <Row>
                                <h6>{educationHeader}</h6>
                            </Row>
                        </Container>
                        
                    </Col>
                    <Col xs={6} className="">
                        <img className="ProjectsHeader" src={education} alt="Education"/>
                    </Col>
                    
                </Row>
                <Row className="ProjectTitleContainer2">
                    <Container ><h6 className="ProjectTextLeft"> <strong>Coursework: </strong>&nbsp;Computer Systems, Computer Architecture, Data Structures, iOS Development, Android Development
Algorithms + Complexity, Discrete Math, Vector Calculus, Linear Algebra, Differential, Integral, and Multivariable Calculus,
</h6></Container>

                </Row>
            </Container> 
            <Container className="ProjectsContainer" id="Experience">
                <Row className="ProjectTypeContainer">
                    <Col className="">
                        <img className="ProjectsHeader" src={experience} alt="Experience"/>
                    </Col>
                </Row>
                <Row className="ProjectTypeContainer">
                    <Col className="">
                            <Container className="IntroText">
                                    <h4 ><strong>iOS Engineer at Under Armour</strong></h4>
                            </Container>
                            <Container className="IntroText">
                                    <h6 ><strong>Mar 2025 - Present</strong></h6>
                            </Container>
                            <Container className="ProjectText">
                                <ul>
                                    <li>Played a key role in rewriting the entire codebase for Under Armour’s shopping app</li>
                                    <li>Maintained ~80% automated test coverage using Swift Testing and ViewInspector</li>
                                    <li>Led an app-wide initiative to standardize and streamline SwiftUI animations, improving maintainability and UI consistency</li>
                                    <li>Collaborated with Android developers to ensure feature and architecture parity across mobile platforms</li>
                                    <li>Led the transition between content management systems, improving flexibility and increasing user engagement</li>
                                    <li>Developed and integrated Kotlin Multiplatform libraries to enable shared business logic across iOS and Android</li>
                                </ul>
                            </Container>
                    </Col>
                    <Col className="">
                            <Container className="IntroText">
                                    <h4 ><strong>iOS Engineer at Swiftkick Mobile</strong></h4>
                            </Container>
                            <Container className="IntroText">
                                    <h6 ><strong>Oct 2023 - Jan 2025</strong></h6>
                            </Container>
                            <Container className="ProjectText">
                                <ul>
                                    <li>Led the development and release of HomeStory Pro, a complex SwiftUI app for real estate professionals</li>
                                    <li>Built reactive architecture using Combine and Factory for scalable state management</li>
                                    <li>Implemented authentication and backend integrations using Cognito and Firebase</li>
                                    <li>Partnered with product, design, and QA teams to deliver accessible, user-friendly features</li>
                                    <li>Maintained app reliability through unit testing, CI pipelines, and third-party debugging tools</li>
                                </ul>
                            </Container>
                    </Col>
                </Row>
                <Row className="">
                <h4 ><strong>/n</strong></h4>
                </Row>
                <Row className="">
                    <Col className="">
                            <Container className="IntroText">
                                    <h4 ><strong>Google SWE Intern</strong></h4>
                            </Container>
                            <Container className="IntroText">
                                    <h6 ><strong>May 2022 - Aug 2022</strong></h6>
                            </Container>
                            <Container className="ProjectText">
                                <ul>
                                    <li>Developed Android features using Java, SQL, and Android Studio for Google Photos</li>
                                    <li>Built a scoring algorithm using photo metadata to determine which photos appear on the users' homepage</li>
                                    <li>Improved visual experience by optimizing how photos are highlighted on the user homepage</li>
                                </ul>
                            </Container>
                    </Col>
                    
                    <Col className="">
                            <Container className="IntroText">
                                    <h4><strong>Amazon SWE Intern</strong></h4>
                            </Container>
                            <Container className="IntroText">
                                    <h6 ><strong>May 2021 - Aug 2021</strong></h6>
                            </Container>
                            <Container className="ProjectText">
                                <ul>
                                    <li>Deployed an AWS Elasticsearch instance which enabled recruiters/managers to visualize the status of Amazon applicants</li>
                                    <li>Automated the ingestion of applicant data using AWS S3 + AWS Lambda</li>
                                    <li>Created extensive internal documentation and training materials for scaling the system across HR teams</li>
                                </ul>
                            </Container>
                    </Col>
                </Row>
            </Container> 
            <Skills id="Skills"/>
            <Container className="ResumeProjectsContainer">

                <Row> <Col className="ProjectTitleContainer">
                        <Link to="/Projects"><h4 className="LinkButton" >View More Project Details</h4></Link>
                    </Col>
                    <Col xs={7}>
                        <img className="ProjectsHeader" src={projects} alt="Projects"/> 
                    </Col></Row>
                    <Row className="ResumeProjectRow">
                        <Col className="">
                                <Container className="IntroText">
                                        <h4 ><strong>ScreenBreak</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>App Development, Spring 2023</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Created an iOS application using SwiftUI, Apple's Screen Time API, and Firebase. Prototyped wireframes using Figma.</li>
                                        <li>Acquired data about user's phone usage via the Family Controls, Device Activity, and Managed Settings Frameworks.</li>
                                        <li>Explored the Family Controls, Device Activity, and Managed Settings Framework.</li>
                                    </ul>
                                </Container>
                        </Col>
                        
                        <Col className="">
                                <Container className="IntroText">
                                        <h4><strong>PlayMaker</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>HCI, Spring 2023</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Developed a ReactJS websites that allows users to draw and save play diagrams for sports various sports.</li>
                                        <li>Completed various phases of user testing and formal experiments to improve our prototypes and final designs</li>
                                        <li>Followed design principles to improve styling and accessibility</li>
                                    </ul>
                                </Container>
                        </Col>
                    </Row>
                    <Row className="ResumeProjectRow">
                        <Col className="">
                                <Container className="IntroText">
                                        <h4 ><strong>AdLunam</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>App Development, Spring 2023</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Implemented an educational astronomy Android application using Kotlin</li>
                                        <li>Consolidated data from various NASA APIs to create an astronomy search engine and an educational trivia game</li>
                                        <li>Utilized Firebase to allow users to create accounts. Allowed users to view the current moon phase using location services.</li>
                                    </ul>
                                </Container>
                        </Col>
                        
                        <Col className="">
                                <Container className="IntroText">
                                        <h4><strong>SoundStats</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>iOS Mobile Development, Fall 2022</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Developed an iOS application using UIKit & Firebase that provided users with graphics about their music streaming habits</li>
                                        <li>Extracted data from the Spotify API and developed algorithms that detect the average mood of a listener's music choices</li>
                                    </ul>
                                </Container>
                        </Col>
                    </Row>
                    <Row className="ResumeProjectRow">
                        <Col className="">
                                <Container className="IntroText">
                                        <h4 ><strong>Find-A-Home</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>Software Engineering, Spring 2022</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Created a website with the goal of providing access to consolidated data about the best countries to immigrate to</li>
                                        <li>mplemented the frontend interactivity using ReactJS</li>
                                        <li>Developed a backend database and API using Python and SQL, Deployed with AWS</li>
                                    </ul>
                                </Container>
                        </Col>
                        
                        <Col className="">
                                <Container className="IntroText">
                                        <h4><strong>Digital Divas Competition</strong></h4>
                                </Container>
                                <Container className="IntroText">
                                        <h6 ><strong>Spring 2019</strong></h6>
                                </Container>
                                <Container className="ProjectText">
                                    <ul>
                                        <li>Organized an all-girls coding competition for over 100 competitors</li>
                                        <li>Coordinated communication with sponsors including AT&T, Oracle, IBM, and more</li>
                                    </ul>
                                </Container>
                        </Col>
                    </Row>
             </Container>
            <Contact/>
        </div>
    );
}