import chat from "../assets/svg/chat-colored.svg";
import category from "../assets/svg/category.svg";
import saved from "../assets/svg/saved.svg";
import styles from "../assets/css/components/NavBar.module.css";

interface navbarProps {
  item1: string;
  item2: string;
  item3: string;
}

const NavBar = (props: navbarProps) => {
  return (
    <div className={styles.navbar}>
      <div
        className={`${styles.navbar__item} ${styles["navbar__item--selected"]}`}
      >
        <img src={chat} alt="Chat" className={styles.navbar__icon} />
        <span className={styles.navbar__desc}>{props.item1}</span>
      </div>
      <div className={styles.navbar__item}>
        <img src={category} alt="Chat" className={styles.navbar__icon} />
        <span className={styles.navbar__desc}>{props.item2}</span>
      </div>
      <div className={styles.navbar__item}>
        <img src={saved} alt="Chat" className={styles.navbar__icon} />
        <span className={styles.navbar__desc}>{props.item3}</span>
      </div>
    </div>
  );
};

export default NavBar;
