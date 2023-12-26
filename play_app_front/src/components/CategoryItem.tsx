import styles from "../assets/css/components/CategoryItem.module.css";
import writing from '../assets/images/writing.png';
import academic from '../assets/images/academic.png';
import social_media from '../assets/images/social_media.png';
import improve from '../assets/images/improve.png';
import write_code from '../assets/images/write_code.png';
import explain_code from '../assets/images/explain_code.png';

interface categoryItemProps {
    logo: string;
    color_outer: string;
    color_inner: string;
    title: string;
    content: string;
}

const CategoryItem = (props: categoryItemProps) => {
    const getBackgroundStyle = (color: string): object => ({
        backgroundColor: color,
    });

    const getLogo = (logo: string): string => {
        let logoIcon: string ='';
        switch (logo) {
            case 'writing':
                logoIcon = writing;
                break;
            case 'academic':
                logoIcon = academic;
                break;
            case 'social_media':
                logoIcon = social_media;
                break;
            case 'improve':
                logoIcon = improve;
                break;
            case 'write_code':
                logoIcon = write_code;
                break;
            case 'explain_code':
                logoIcon = explain_code;
                break;
            default:
                console.log('알맞은 로고가 없음');
        }
        return logoIcon;
    }

    return <div className={styles.categoryItem} style={getBackgroundStyle(props.color_outer)}>
        <div className={styles.categoryItem__iconArea} style={getBackgroundStyle(props.color_inner)}>
            <img src={getLogo(props.logo)} alt="Icon" className={styles.categoryItem__icon} />
        </div>
        <div className={styles.categoryItem__title}>{props.title}</div>
        <div className={styles.categoryItem__content}>{props.content}</div>
    </div>;
}

export default CategoryItem;
