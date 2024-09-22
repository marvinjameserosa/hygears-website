"use client";
import "../styles/Footer.css";
import Image from 'next/image';
import Email from '../assets/email.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import YouTube from '../assets/youtube.svg';
import Twitter from '../assets/twitter.svg'

export default function Footer() {
    return (
      <main>
        <footer class="footer">
          <div class="container">
              <div class="row">
                  <div class="col text-center">
                      <h2 class="footer-title">PUP HYGEARS</h2>
                      <div class="footer-icons">
                          <a href="https://www.instagram.com/puphygears?igsh=MTJ4N254eXE4MnRlNQ=="><i class="bi bi-instagram"></i>puphygears</a>
                          <a href="https://www.facebook.com/PUPHygears"><i class="bi bi-facebook"></i> PUP Hygears</a>
                          <a href="mailto:puphygears@gmail.com"><i class="bi bi-envelope"></i> puphygears@gmail.com</a>
                          <a href="https://x.com/pup_hygears"><i class="bi bi-twitter"></i> @pup_hygears</a>
                      </div>
                  </div>
              </div>
          </div>
        </footer>
      </main>
  )
}