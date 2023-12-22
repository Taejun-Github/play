import styles from "../assets/css/components/CategoryNav.module.css";

interface categoryNavProps {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
}

const CategoryNav: React.FC<categoryNavProps> = (props) => {
  return (
    <div className={styles.category}>
      <div
        className={`${styles.category__item} ${styles["category__item--checked"]}`}
      >
        {props.item1}
      </div>
      <div className={styles.category__item}>{props.item2}</div>
      <div className={styles.category__item}>{props.item3}</div>
      <div className={styles.category__item}>{props.item4}</div>
    </div>
  );
};

export default CategoryNav;
