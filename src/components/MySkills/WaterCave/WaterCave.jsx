import styles from "./styles.module.css";

import classnames from "classnames";
import MotionFish from "./Fishes/Fishes.jsx";

export default function WaterCave() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.triangleContainer}>
                    <div className={styles.triangleBar}></div>
                    {[...Array(50)].map((el, ind) => (
                        <span key={ind} className={styles.triangle}></span>
                    ))}
                </div>
                <div className={styles.gradientContainer}>
                    <div
                        className={classnames(styles.overlay, styles.one)}
                    ></div>
                    <div className={styles.gradient}>
                        {[...Array(8)].map((el, ind1) =>
                            [...Array(38)].map((el, ind2) => (
                                <span
                                    className={styles["ray" + (ind2 + 1)]}
                                    key={ind1 * ind2}
                                ></span>
                            ))
                        )}
                    </div>
                    <MotionFish />
                </div>
                <div className={styles.rocks}>
                    {[...Array(30)].map((el, ind) => {
                        return (
                            <div
                                className={classnames(
                                    styles["rock" + (ind + 1)],
                                    styles.rock
                                )}
                                key={ind}
                            ></div>
                        );
                    })}
                </div>
                <div className={styles.bubbleContainer}>
                    {[...Array(49)].map((el, ind) => (
                        <span
                            className={styles["bubbleY" + (ind + 1)]}
                            key={ind}
                        >
                            <span
                                className={styles["bubbleX" + (ind + 1)]}
                            ></span>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
