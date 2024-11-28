import styles from "./styles.module.css";
import Image from "next/image";
import classnames from "classnames";

import land1 from "../../../src/assets/images/land1.png";
import houses from "../../../src/assets/images/houses.svg";
import moon from "../../../src/assets/images/moon.png";

import star from "../../../src/assets/images/star.png";

import CloudAnimation from "./CloudsAnimation/CloudsAnimation";
import { ReactTyped } from "react-typed";

export default function Hero() {
    return (
        <div className={styles.HeroMain}>
            <div className={styles.HeroBackgroundText}>
                <h1 className={styles.HeroBackgroundTextMain}>
                    Привет, меня зовут Дмитрий!
                </h1>
                <p className={styles.HeroBackgroundTextDescription}>
                    <ReactTyped
                        strings={[
                            "Я начинающий Fullstack-разработчик",
                            "Добро пожаловать на мой сайт-визитку",
                        ]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                    />
                </p>
            </div>
            <div className={styles.HeroBackgroundClouds}>
                <CloudAnimation />
            </div>
            <Image className={styles.HeroBackgroundMoon} src={moon} />
            <div className={styles.HeroBackgroundStars}>
                {(() => {
                    let res = [];
                    for (let i = 1; i < 18; i++) {
                        res.push(i);
                    }
                    return res.map((el) => (
                        <Image
                            className={classnames(
                                styles["HeroBackgroundStar" + el],
                                styles.HeroBackgroundStar
                            )}
                            src={star}
                        />
                    ));
                })()}
            </div>
            <div className={styles.HeroBackgroundGround}>
                <Image className={styles.HeroBackgroundLand1} src={land1} />
                <div className={styles.HeroBackgroundRight}>
                    <Image
                        className={styles.HeroBackgroundHouses}
                        src={houses}
                    />
                    <div className={styles.HeroBackgroundLand2} />
                </div>
            </div>
        </div>
    );
}
