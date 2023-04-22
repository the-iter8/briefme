import React, { useContext } from "react";
import styles from "./Landing.module.css";
import { UserContext } from "../../utils/Contexts";
import { loginWithRedirect } from "../../utils/Firebase";
import GoogleIcon from "@mui/icons-material/Google";
// WARNING ---- THIS LANDING PAGE IS COPY PASTED FROM CODEPEN JUST FOR DISPLAYING POURPOSE. REAL ONE WILL BE UP AND RUNNING SOON.
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
            <a href=''>Home</a>
          </li>

          <li>
            <a href='/dashboard'>Dashboard</a>
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
            Ever got so occupied, that you forgot to take your daily source of information? Well, Just open Brief me on
            your Laptop and glance over all the daily digest information that <strong> matters you the most</strong>
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

        <img
          src='https://github.com/malunaridev/Rocketseat-Explorer/blob/master/project-02/assets/fitness-jump.png?raw=true'
          alt='Google'
        />
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
