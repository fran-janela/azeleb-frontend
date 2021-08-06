import React from "react";

import styles from '../styles/components/Background.module.css';
import Image from 'next/image';
import BackgroundImage from '../../public/background.png';

export default function Background(){
    return(
        <div className={styles.imgBackGroundContainer}>
            <div className={styles.backgroundGridItem}>
                <Image src={BackgroundImage} width={1920} height={1080}/>
            </div>
            <div className={styles.backgroundGridItem}>
                <div className={styles.hideBackground}></div>
            </div>
        </div>
    );
}