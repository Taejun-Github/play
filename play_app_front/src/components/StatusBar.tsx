import styles from "../assets/css/components/StatusBar.module.css";
import statusBar from "../assets/svg/status-bar.svg";
import {useEffect, useState} from "react";

const StatusBar = () => {
    const getCurrentTime = (): string => {
        const currentDateTime = new Date();
        const hours: number = currentDateTime.getHours();
        const minutes: number = currentDateTime.getMinutes();
        const seconds: number = currentDateTime.getSeconds();
        const formattedMinutes: number | string = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds: number | string = seconds < 10 ? `0${seconds}` : seconds;
        return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    }
    const [time, setTime] = useState(getCurrentTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    })
    return (<div className={styles.statusBar}>
        <div className={styles.statusBar__time}>{time}</div>
        <img src={statusBar} alt="Save Icon" className={styles.statusBar__icon} />
    </div>);
}

export default StatusBar;
