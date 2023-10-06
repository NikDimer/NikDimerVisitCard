import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import land1 from '@/src/assets/images/land1.png'
import houses from '@/src/assets/images/houses.svg'
import moon from '@/src/assets/images/moon.png'
import cloud1 from '@/src/assets/images/cloud1.png'
import cloud2 from '@/src/assets/images/cloud2.png'
import cloud3 from '@/src/assets/images/cloud3.png'
import cloud4 from '@/src/assets/images/cloud4.png'
import cloud5 from '@/src/assets/images/cloud5.png'
import cloud6 from '@/src/assets/images/cloud6.png'
import cloud7 from '@/src/assets/images/cloud7.png'
import cloud8 from '@/src/assets/images/cloud8.png'
import cloud9 from '@/src/assets/images/cloud9.png'
import star from '@/src/assets/images/star.png'

export default function Hero() {
    return (
        <div className={styles.HeroMain}>
            <div className={styles.HeroBackgroundText}>
                <h1 className={styles.HeroBackgroundTextMain}>Привет, меня зовут Дмитрий!</h1>
                <p className={styles.HeroBackgroundTextDescription}>Я начинающий Frontend-разработчик</p>
            </div>
            <div className={styles.HeroBackgroundClouds1}>
                <Image className={classnames(styles.HeroBackgroundCloud1, styles.HeroBackgroundCloud)} src={cloud1} />
                <Image className={classnames(styles.HeroBackgroundCloud2, styles.HeroBackgroundCloud)} src={cloud2} />
                <Image className={classnames(styles.HeroBackgroundCloud3, styles.HeroBackgroundCloud)} src={cloud3} />
            </div>
            <div className={styles.HeroBackgroundClouds2}>
                <Image className={classnames(styles.HeroBackgroundCloud4, styles.HeroBackgroundCloud)} src={cloud4} />
                <Image className={classnames(styles.HeroBackgroundCloud5, styles.HeroBackgroundCloud)} src={cloud5} />
                <Image className={classnames(styles.HeroBackgroundCloud6, styles.HeroBackgroundCloud)} src={cloud6} />
            </div>
            <div className={styles.HeroBackgroundClouds3}>
                <Image className={classnames(styles.HeroBackgroundCloud7, styles.HeroBackgroundCloud)} src={cloud7} />
                <Image className={classnames(styles.HeroBackgroundCloud8, styles.HeroBackgroundCloud)} src={cloud8} />
                <Image className={classnames(styles.HeroBackgroundCloud9, styles.HeroBackgroundCloud)} src={cloud9} />
            </div>
            <Image className={styles.HeroBackgroundMoon} src={moon} />
            <div className={styles.HeroBackgroundStars}>
                <Image className={classnames(styles.HeroBackgroundStar1, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar2, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar3, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar4, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar5, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar6, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar7, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar8, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar9, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar10, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar11, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar12, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar13, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar14, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar15, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar16, styles.HeroBackgroundStar)} src={star} />
                <Image className={classnames(styles.HeroBackgroundStar17, styles.HeroBackgroundStar)} src={star} />
            </div>
            <div className={styles.HeroBackgroundGround}>
                <Image className={styles.HeroBackgroundLand1} src={land1} />
                <div className={styles.HeroBackgroundRight}>
                    <Image className={styles.HeroBackgroundHouses} src={houses} />
                    <div className={styles.HeroBackgroundLand2} />
                </div>
            </div>
        </div>
    )
}