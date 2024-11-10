"use client";
import "../styles/Footer.css"
import Image from 'next/image'
import instagramLogo from "../assets/instagram.svg"
import facebookLogo from "../assets/facebook.svg"
import emailLogo from "../assets/email.svg"
import xLogo from "../assets/twitter.svg"

export default function Footer() {
    return (
      <main>
        <footer>
            <ul class="footer-list">
              <li class="footer-item-1">
                <h2>PUP HYGEARS</h2>
              </li>
              <li class="footer-item-2">
                <Image class="icons instagram-logo" src={Instagram} alt="instagram-icon"/>
                <Image class="icons facebook-logo" src={Facebook} alt="facebook-icon"/> 
                PUP Hygears
              </li>
              <li class="footer-item-3">
                <Image class="icons email-logo" src={Email} alt="email-icon"/> 
                <a href="mailto:puphygears@gmail.com">puphygears@gmail.com</a>
              </li>
              <li class="footer-item-4">
                <Image class="icons youtube-logo" src={YouTube} alt="youtube-icon"/> 
                <Image class="icons twitter-logo" src={Twitter} alt="twitter-icon"/> 

                {/* link to be added */}
                <a href="x">&#64;pup&#95;hygears</a>
              </li>
            </ul>
        </footer>
      </main>)}