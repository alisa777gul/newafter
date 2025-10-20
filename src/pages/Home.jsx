import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import blockImg from "../assets/block@2x-min.png";
export default function Home() {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <h1 className={styles.title}>
          Unlock your potential with the best{" "}
          <span className={styles.lng}>language</span> tutors
        </h1>
        <p className={styles.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <Link to="/teachers" className={styles.btn}>
          Get started
        </Link>
      </div>
      <div>
        <img src={blockImg} width={568} height={530} className={styles.img} />
      </div>
      <ul className={styles.listWrapper}>
        <li className={styles.list}>
          <span className={styles.number}>32,000+</span>Experienced tutors
        </li>
        <li className={styles.list}>
          <span className={styles.number}>300,000+</span>5-star tutor reviews
        </li>
        <li className={styles.list}>
          <span className={styles.number}>120+</span>Subjects taught
        </li>
        <li className={styles.list}>
          <span className={styles.number}>200+</span>Tutor nationalities
        </li>
      </ul>
    </section>
  );
}
