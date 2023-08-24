import React, { useContext } from "react";
import styles from "./Landing.module.css";
import { UserContext } from "../../utils/Contexts";
import { loginWithRedirect } from "../../utils/Firebase";
import GoogleIcon from "@mui/icons-material/Google";
// WARNING ---- THIS LANDING PAGE IS JUST FOR DISPLAYING POURPOSE. REAL ONE WILL BE UP AND RUNNING SOON.
export default function Landing() {
  const { setCurrentUser } = useContext(UserContext);

  async function loginHandle() {
    const { user } = await loginWithRedirect();
    setCurrentUser(user);
  }

  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <a id='logo' href='#' className={styles.a}>
          Brief Me 📓
        </a>

        <ul className={styles.ul}>
          <li>
            <a href='' className={styles.underlinehovereffect}>
              Home
            </a>
          </li>

          <li>
            <a href='/dashboard' className={styles.underlinehovereffect}>
              Dashboard
            </a>
          </li>
        </ul>
      </nav>

      <main className={styles.main}>
        <section className={styles.section}>
          <h1 className={styles.h1}>
            Brief me<br></br> <span>Your Daily Digest </span>
            <div>
              <span>Condensed in 1 screen.</span>
            </div>
          </h1>

          <p>
            Ever got so occupied, that you forgot to take your daily digest? Well, Just "Brief me" on your Laptop and
            glance over all the daily digest that <strong> matters you the most.</strong> It displays information like
            Weather, On This Day, Stock Prices, Metal Prices etc. in form of modules so that you can access all of the
            quick & small but important information, at one place.
          </p>

          <button
            className={styles.button}
            onClick={() => {
              loginHandle();
            }}
          >
            <GoogleIcon fontSize='medium' />
            Login With Google.
          </button>
        </section>

        <img src='/assets/landing.gif' alt='Google' />
      </main>

      <footer className={styles.footer}>
        Made with ❤️ by{" "}
        <a href='https://iter8.netlify.app/' className={styles.a}>
          iter8
        </a>{" "}
        in India.
      </footer>
    </div>
  );
}
