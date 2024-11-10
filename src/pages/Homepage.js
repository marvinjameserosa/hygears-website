"use client";
import "../styles/Homepage.css"
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import profilePic from "../assets/profilePic.png"
import MechanicalEng from "../assets/MechEng.png"
import ElectronicAndCommunicationsEng from "../assets/ElecAndCommsEng.png"
import IndustrialEng from "../assets/IndEng.png"
import ElectronicsEng from "../assets/ElecEng.png"
import ComputerEng from "../assets/CompEng.png"
import sampleProjectImg from "../assets/sampleProjectImage.png"
import project1Image from "../assets/proj1-pic.jpg"
import project2Image from "../assets/luna-img.jpg"

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Homepage() {
  return (
    <div className="homepage">


      <div className="description">
        <div className="profile-pic-container">
          <Image className="profile-pic-image" src={profilePic}></Image>
        </div>
        <div className="description-text">
          <p>
          The PUP Hygears is an organization that aims to further enhance the awareness
        of the PUP Students in the field of research and help produce well-trained and
        competent students through real-life training in innovation and production of
        a highly efficient vehicle to help the economy and heighten the technology
        of the country.
          </p>
        </div>
      </div>

      <div className="aboutUsTitle">
        <span className="aboutUsTitleTextContainer">
           <span className="aboutUsTitleText">About Us</span>
        </span>
      </div>

  
      <div className="projects-main-container">

      <div className="projects-main-title">
        Projects and Activities
      </div>

      <Carousel>

        <Carousel.Item>
        <Card className="project-item" id="p1">
        <div className="proj-img-container">
          <Image className="proj-img-content" src={project1Image}></Image>
        </div>
      <Card.Body className="proj-body">
        <Card.Title className="project-title">Shell Eco Marathon 2024</Card.Title>
        <Card.Text className="project-description">
            We participated in the annual Shell Eco Marathon 2024, a world’s leading student
            engineering competition that brings together students across the world to design, build and
            operate some of the world’s most energy-efficient vehicles.
        </Card.Text>
      </Card.Body>
      </Card>
        </Carousel.Item>

        <Carousel.Item>
        <Card className="project-item" id="p2">
      <Card.Body className="proj-body">
        <Card.Title className="project-title">LUNA </Card.Title>
        <Card.Text className="project-description">
        The creation of LUNA, is a testament to the unwavering dedication and passion of every
        member of the PUP Hygears family. From inception to realization, each individual has poured
        their heart and soul into bringing Luna Five to life. As the final chapter of its generation,
        Luna Five is primed to make history
        </Card.Text>
      </Card.Body>
      <div className="proj-img-container">
          <Image className="proj-img-content" src={project2Image}></Image>
        </div>
      </Card>
        </Carousel.Item>

      </Carousel>


      </div>

     <div className="members-title">
      Members
     </div>

    <div className="members-description">

      <p className="members-description-text">
      The team’s diverse composition across various
        disciplines fosters innovative ideas and solutions,
        driven by a collective passion to make a positive impact and continuously improve.
      </p>

      <div className="see-members-button-container">
      <Button className="see-members-button" variant="primary">See Members</Button>
      </div>
      
    </div>
        

      </div>
  )
}