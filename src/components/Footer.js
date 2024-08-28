"use client";
import styles from './styles/styles.css'
import email from './assets/email.svg'
import facebook from './assets/facebook.svg'
import instagram from './assets/instagram.svg'

export default function Footer() {
    return (
      <main>
        <footer>
            <ul class="footer-list">
              <li class="footer-item-1">
                <h2>HYGEARS</h2>
              </li>
              <li class="footer-item-2">
                <img class="icons instagram-logo" src="{instagram}" alt="instagram-icon"/>
                <img class="icons facebook-logo" src="{facebook}" alt="facebook-icon" />
                <p>PUP Hygears</p>
              </li>
              <li class="footer-item-3">
                <img class="icons email-logo" src="{email}" alt="email-icon" />
                <a href="mailto:puphygears@gmail.com">puphygears@gmail.com</a>
              </li>
              <li class="footer-item-4">
                <img class="icons youtube-logo" src="./assets/youtube.svg" alt="youtube-icon" />
                <img class="icons twitter-logo" src="./assets/twitter.svg" alt="twitter-icon" />

                {/* link to be added */}
                <a href="x">&#64;pup&#95;hygears</a>
              </li>
            </ul>
        </footer>
      </main>
  )
}