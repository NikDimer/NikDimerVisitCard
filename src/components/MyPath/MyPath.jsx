import styles from './styles.module.css'
import Image from 'next/image'
import classnames from 'classnames'

import TrainWay from '@/src/assets/images/TrainWay.png'

export default function MyPath() {
    return (
        <div className={styles.MyPathMain}>
            <h1 className={styles.MyPathTitle}>Мой путь становления</h1>
            <Image className={styles.MyPathTrainWay} src={TrainWay} />
        </div>
    )
}