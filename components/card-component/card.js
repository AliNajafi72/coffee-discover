import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";
import cls from 'classnames';

export default function Card({id, name, imageUrl}) {
    return(
        <div className={cls("glassy",styles.cardWrapper)}>
            <Link href={"/coffee-store/" + id}>
                <a className={styles.cardLink}>
                    <div className="cardContainer">
                        <h2 className={styles.cardTitle}>{name}</h2>
                        <Image
                            src={imageUrl}
                            alt={name}
                            className={styles.cardImage}
                            width={800}
                            height={500}
                        />
                    </div>
                </a>
            </Link>
        </div>
    )
}