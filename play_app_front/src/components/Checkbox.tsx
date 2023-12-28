import styles from "../assets/css/components/Checkbox.module.css";
import { useState } from 'react';
import check from "../assets/svg/check.svg";
interface CheckboxProps {
    text: string;
    object: string;
    onCheckboxChange: (isChecked: boolean) => void;
}
const Checkbox = (props: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);
        console.log('check');
        props.onCheckboxChange(newCheckedState);
    };

    return <div className={styles.checkbox}>
        <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            id={props.object}
        />
        <label htmlFor={props.object}>
            <img src={check} className={styles.checkbox__check}  alt="check"/>
        </label>
        <span className={styles.checkbox__desc}>{props.text}</span>
    </div>
}

export default Checkbox;
