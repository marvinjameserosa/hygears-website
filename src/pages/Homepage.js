"use client";
import "../styles/Homepage.css"
import "../assets/teamPHoto.png"
import Image from 'next/image'
import profilePic from "../assets/profilePic.png"
import MechanicalEng from "../assets/MechEng.png"
import ElectronicAndCommunicationsEng from "../assets/ElecAndCommsEng.png"
import IndustrialEng from "../assets/IndEng.png"
import ElectronicsEng from "../assets/ElecEng.png"
import ComputerEng from "../assets/CompEng.png"

export default function Homepage() {
  return (
    <div className="homepage">

      <div className="hero">
        <div className="heroBg"></div>
        <div className="heroText">
          <p className="mainText">WE ARE HYGEARS!</p>
          <p className="quote">"Hygears Quote"</p>
        </div>
      </div>

      <div className="description">
        <div className="profilePic">
          <Image src={profilePic}></Image>
        </div>
        <div className="descriptionText">
        The PUP Hygears is an organization that aims to further enhance the awareness
        of the PUP Students in the field of research and help produce well-trained and
        competent students through real-life training in innovation and production of
        a highly efficient vehicle to help the economy and heighten the technology
        of the country.
        </div>
      </div>

      <div className="aboutUs">
        <div className="teamMembersTitle">
          <p className="titleText">DIVERSE TEAM MEMBERS</p>
          <div className="titleLine"></div>
        </div>
        <div className="teamMembers">
          <div className="programBox">
            <p className="MechEng">Mechanical Engineering</p>
            <Image src={MechanicalEng}></Image>
          </div>
          <div className="programBox">
            <p className="ElecAndComms">Electronic and Communications Engineering</p>
            <Image src={ElectronicAndCommunicationsEng}></Image>
          </div>
          <div className="programBox">
            <p className="IndEng">Industrial Engineering</p>
            <Image src={IndustrialEng}></Image>
          </div>
          <div className="programBox">
            <p className="ElecEng">Electrical Engineering</p>
            <Image src={ElectronicsEng}></Image>
          </div>
          <div className="programBox">
            <p className="CompEng">Computer Engineering</p>
            <Image src={ComputerEng}></Image>
          </div>
        </div>
      </div>

      <div className="teamMembersDescription">
          <p>
            The team is composed of various students from different programs.
            This includes students from Mechanical Engineering, Electronics and
            Communications Engineering, Industrial Engineering, Electrical Engineering,
            and even from Marketing.
          </p>
          <p>
            This diversity makes the team even greater for it brings a wide variety
            of ideas, which when collaborated turns into one concrete idea. However,
            the main characteristic of this team is the hunger that they have. The
            hunger to improve the current situation of humanity, the hunger to
            contribute to the innovating world, and most importantly, the internal
            hunger in every members to improve themselves.
          </p>
        </div>
        

      </div>
  )
}