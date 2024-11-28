import styles from "./styles.module.css";
import Image from "next/image";
import classnames from "classnames";

import path1 from "../../../src/assets/images/path1.jpg";
import path2 from "../../../src/assets/images/path2.jpg";
import path3 from "../../../src/assets/images/path3.png";
import path4 from "../../../src/assets/images/path4.jpg";

import train from "../../../src/assets/images/train.png";

//import TrainWay from '@/src/assets/images/TrainWay.png'

export default function MyPath() {
    return (
        <div className={styles.MyPathMain}>
            <h1 className={styles.MyPathTitle}>Мой путь становления</h1>
            <div className={styles.MyPathTrainWayContainer}>
                <div className={styles.MyPathTrainWay}>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayCircle1,
                            styles.MyPathTrainWayCircle
                        )}
                    >
                        <Image
                            src={path1}
                            width={200}
                            height={200}
                            className={styles.MyPathTrainWayImage}
                        />
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayTextContainer1,
                            styles.MyPathTrainWayTextContainer
                        )}
                    >
                        <p className={styles.MyPathTrainWayText}>
                            1. Я начал свой путь в сайтостроении при помощи
                            HtmlAcademy, где изучил HTML, CSS, JS, немного PHP.
                        </p>
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayLine1,
                            styles.MyPathTrainWayLine
                        )}
                    >
                        <Image
                            src={train}
                            className={styles.MyPathTrainImage1}
                        />
                    </div>

                    <div
                        className={classnames(
                            styles.MyPathTrainWayCircle2,
                            styles.MyPathTrainWayCircle
                        )}
                    >
                        <Image
                            src={path2}
                            width={200}
                            height={200}
                            className={styles.MyPathTrainWayImage}
                        />
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayTextContainer2,
                            styles.MyPathTrainWayTextContainer
                        )}
                    >
                        <p className={styles.MyPathTrainWayText}>
                            2. Прошёл на Интенсив Яндекс Академии, где получил
                            начальное понимание React и вектор для дальнейшего
                            развития.
                        </p>
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayLine2,
                            styles.MyPathTrainWayLine
                        )}
                    >
                        <Image
                            src={train}
                            className={styles.MyPathTrainImage2}
                        />
                    </div>

                    <div
                        className={classnames(
                            styles.MyPathTrainWayCircle3,
                            styles.MyPathTrainWayCircle
                        )}
                    >
                        <Image
                            src={path3}
                            width={200}
                            height={200}
                            className={styles.MyPathTrainWayImage}
                        />
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayTextContainer3,
                            styles.MyPathTrainWayTextContainer
                        )}
                    >
                        <p className={styles.MyPathTrainWayText}>
                            3. В дальнейшем постоянно изучал материалы по React,
                            JavaScript и Next.js, подкрепляя практикой
                        </p>
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayLine3,
                            styles.MyPathTrainWayLine
                        )}
                    >
                        <Image
                            src={train}
                            className={styles.MyPathTrainImage3}
                        />
                    </div>

                    <div
                        className={classnames(
                            styles.MyPathTrainWayCircle4,
                            styles.MyPathTrainWayCircle
                        )}
                    >
                        <Image
                            src={path4}
                            width={200}
                            height={200}
                            className={styles.MyPathTrainWayImage}
                        />
                    </div>
                    <div
                        className={classnames(
                            styles.MyPathTrainWayTextContainer4,
                            styles.MyPathTrainWayTextContainer
                        )}
                    >
                        <p className={styles.MyPathTrainWayText}>
                            4. На данный момент достиг Junior-уровня, нахожусь в
                            активном поиске работы, стажировок и других
                            возможностей набраться опыта
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
