"use client";
import "../styles/Coming Soon.css";
import Image from 'next/image'
import ComingSoonImg from "../assets/ComingSoon.png";
import Ornament1 from "../assets/Ornament1.png";
import Ornament2 from "../assets/Ornament-2.png";
import Ornament3 from "../assets/Ornament-3.png"

export default function ComingSoon () {
    return (
      <main>
        <div className="comingSoonPage container-fluid">

            {/* Floating Images */}
            <Image className="dottedOrnament img-fluid" src={Ornament1}></Image>
            <Image className="dottedOrnament-1 img-fluid" src={Ornament1}></Image>
            
            <div className="arrow arrow-top">
              <Image className="arrow-1" src={Ornament2}></Image>
              <Image className="arrow-2" src={Ornament3}></Image>
            </div>

            <div className="arrow arrow-bottom">
              <Image className="arrow-1" src={Ornament2}></Image>
              <Image className="arrow-2" src={Ornament3}></Image>
            </div>
          
            {/* Image Column */}
            <div className="row align-items-center justify-content-center">
              <div className="col-4 d-flex justify-content-end">
              <Image className="comingSoonImage img-fluid" src={ComingSoonImg} alt="Page under construction" />
              </div>

              {/* Text Column */}
             <div className="comingSoonTextbox col-8">
              <div className="row mt-5">
                <p className="comingSoonHeader lh-1">We Are Currently Working on this Website to Deliver <br></br> A Better User Experience</p>
                <p className="comingSoonSubtitle">STAY TUNED!</p>
              </div>

              {/* Floating Images
              <Image className="ornamentImage" src={Ornament1}></Image> */}
          
             </div>
            </div> 

        </div>
      </main>
  )
}