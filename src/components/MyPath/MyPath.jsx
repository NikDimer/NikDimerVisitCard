import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import path1 from '../../../src/assets/images/path1.jpg'
import path2 from '../../../src/assets/images/path2.jpeg'
import path3 from '../../../src/assets/images/path3.jpg'
import path4 from '../../../src/assets/images/path4.jpg'

import train from '../../../src/assets/images/train.png'

//import TrainWay from '@/src/assets/images/TrainWay.png'

export default function MyPath() {
    return (
        <div className={styles.MyPathMain}>
            <h1 className={styles.MyPathTitle}>Мой путь становления</h1>
            <div className={styles.MyPathTrainWayContainer}>
                <div className={styles.MyPathTrainWay}>
                    <div className={classnames(styles.MyPathTrainWayCircle1, styles.MyPathTrainWayCircle)}>
                        <Image src={path1} width={200} height={200} className={styles.MyPathTrainWayImage} />
                    </div>
                    <div className={classnames(styles.MyPathTrainWayTextContainer1, styles.MyPathTrainWayTextContainer)}>
                        <p className={styles.MyPathTrainWayText} >1.Я начал свой путь в сайтостроении при помощи HtmlAcademy, где изучил HTML, CSS, JS, немного PHP.</p>
                    </div>
                    <div className={classnames(styles.MyPathTrainWayLine1, styles.MyPathTrainWayLine)}>
                        <Image src={train} className={styles.MyPathTrainImage1} />
                    </div>

                    <div className={classnames(styles.MyPathTrainWayCircle2, styles.MyPathTrainWayCircle)}>
                        <Image src={path2} width={200} height={200} className={styles.MyPathTrainWayImage} />
                    </div>
                    <div className={classnames(styles.MyPathTrainWayTextContainer2, styles.MyPathTrainWayTextContainer)}><p className={styles.MyPathTrainWayText} >
                        2.В дальнейшем я улучшал свои навыки вёрстки и начал делать первые шаги в изучении фреймворков.</p>
                    </div>
                    <div className={classnames(styles.MyPathTrainWayLine2, styles.MyPathTrainWayLine)}>
                        <Image src={train} className={styles.MyPathTrainImage2} />
                    </div>

                    <div className={classnames(styles.MyPathTrainWayCircle3, styles.MyPathTrainWayCircle)}>
                        <Image src={path3} width={200} height={200} className={styles.MyPathTrainWayImage} />
                    </div>
                    <div className={classnames(styles.MyPathTrainWayTextContainer3, styles.MyPathTrainWayTextContainer)}>
                        <p className={styles.MyPathTrainWayText} >3.Прошёл на Интенсив Яндекс Академии, где получил начальное понимание React и вектор для дальнейшего развития.</p>
                    </div>
                    <div className={classnames(styles.MyPathTrainWayLine3, styles.MyPathTrainWayLine)}>
                        <Image src={train} className={styles.MyPathTrainImage3} />
                    </div>

                    <div className={classnames(styles.MyPathTrainWayCircle4, styles.MyPathTrainWayCircle)}>
                        <Image src={path4} width={200} height={200} className={styles.MyPathTrainWayImage} />
                    </div>
                    <div className={classnames(styles.MyPathTrainWayTextContainer4, styles.MyPathTrainWayTextContainer)}><p className={styles.MyPathTrainWayText} >
                        4.С тех пор я активно занимался самообучением с помощью лекций и статей в интернете, ориентируясь по советам других опытных разработчиков.</p>
                    </div>
                </div>
            </div>
            <div className={styles.MyPathEndTextContainer}>
                <p className={styles.MyPathEndText}>Сейчас я стараюсь укрепить теоретические основы и ищу как можно больше возможности для реальной практики, чтобы собрать себе полноценное портфолио.</p>
            </div>
        </div>
    )
}