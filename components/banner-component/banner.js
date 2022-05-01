import styles from './Banner.module.css';

const Banner = (props) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>
            <span className={styles.title1}>کافه</span>
            <span className={styles.title2}> جو</span>
        </h1>
        <p className={styles.description}>همه کافی شاپ های اطرافت رو بشناس!</p>
        <button className={styles.button} onClick={props.handleOnClick}>
            {props.buttonText}
        </button>
    </div>
}

export default Banner;