import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

import data from '../../data/coffee-store.json';

import styles from '../../styles/CoffeeStore.module.css';
import { Main } from 'next/document';

export async function getStaticProps(context) {
    const idParameter = context.params.id;
    return {
        props: {
            coffeeStore: data.find(item => item.id == idParameter)
        },
    }
}

export async function getStaticPaths() {
    const paths = data.map(coffeeStore => {
        return {params: {id: coffeeStore.id.toString()}}
    });
    return {
        paths: paths,
        fallback: true,
    }
}

export default function CoffeeStores(props) {
    const router = useRouter();
    if(router.isFallback) return <></>
    const {name, address, imageUrl, vote} = props.coffeeStore;
    return <div className={styles.container}>
        <Head>
            <title>{name}</title>
        </Head>
        <Link className={styles.backToHomeContainer} href="/">
            <a className={styles.backToHomeText}>
                <Image src="/static/img/back-button.svg" alt="Back Button" width={36} height={36}/>
                <div className={styles.backToHomeTextContainer}>بازگشت به خانه</div>
            </a>
        </Link>
        <div className={styles.mainContainer}>
            <div>
                <h3 className={styles.coffeeStoreName}>{name}</h3>
                <Image className={styles.coffeeStoreImage} src={imageUrl} alt={name} width={800} height={500} />
            </div>
            <div className={styles.detailsContainer}>
                <div className={styles.glassyContainer}>
                    <div className={styles.addressContainer}>
                        <Image src="/static/img/location.svg" alt="Back Button"  layout="fixed" width={36} height={36}/>
                        <h3 className={styles.detailText}>{address}</h3>
                    </div>            
                    <div className={styles.voteContainer}>
                        <Image src="/static/img/vote.svg" alt="Back Button" width={36} height={36} layout="fixed" />
                        <h3 className={styles.detailText}>{vote}</h3>
                    </div> 
                    <div className={styles.buttonContainer}>
                        <button className={styles.button} onClick={console.log("Vote button clicked!")}>
                            امتیاز بده
                        </button>      
                    </div> 
                </div>
            </div>
        </div>
    </div>
}
